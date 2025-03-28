import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listenForRoutes, updateRouteStatus } from "./slices/routeSlice";
import Changeorderstatus from "./Changeorderstatus";
import Stageroutes from "./components/Stageroutes";
import Pastroutes from "./components/Pastroutes";
import {
  Truck,
  Send,
  MapPin,
  PlayCircle,
  CheckCircle,
  XCircle,
  User,
  Phone,
  ClipboardList,
} from "lucide-react";

const statusOptions = [
  { label: "Loaded", icon: <Truck size={20} />, color: "text-blue-500" },
  { label: "Enroute", icon: <Send size={20} />, color: "text-orange-500" },
  { label: "Arrived", icon: <MapPin size={20} />, color: "text-green-500" },
  { label: "Ongoing", icon: <PlayCircle size={20} />, color: "text-purple-500" },
  { label: "Completed", icon: <CheckCircle size={20} />, color: "text-teal-500" },
  { label: "Incomplete", icon: <XCircle size={20} />, color: "text-red-500" },
];

function Routesummary() {
  const dispatch = useDispatch();
  const routes = useSelector((state) => state.tripRoutes.routes);

  useEffect(() => {
    dispatch(listenForRoutes());
  }, [dispatch]);

  const handleStatusChange = (routeId, newStatus) => {
    dispatch(updateRouteStatus({ routeId, newStatus }));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-teal-600 p-4 text-center">
        <h2 className="text-2xl font-extrabold">🚗 Active Routes</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" key="theone">
        {routes &&
          routes.map((route) => (
            <div
              key={route.id}
              className="relative p-6 bg-white shadow-lg rounded-2xl border border-gray-200 transition hover:shadow-xl"
            >
              {/* Responsive Status Selector */}
              <div className="flex flex-wrap justify-center gap-2 mb-4 px-4 py-2 bg-gray-100 rounded-lg">
                {statusOptions.map((status) => (
                  <button
                    key={status.label}
                    className={`flex flex-col items-center gap-1 p-2 ${status.color} hover:scale-110 transition`}
                    onClick={() => handleStatusChange(route.id, status.label)}
                  >
                    {status.icon}
                    <span className="text-xs">{status.label}</span>
                  </button>
                ))}
              </div>

              {/* Header */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-md font-semibold text-gray-700">
                  <span className="text-blue-500">Status:</span> {route.status}
                </h3>
              </div>

              {/* Details */}
              <div className="space-y-3 text-gray-600 text-sm">
                <p className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                  <User size={16} className="text-teal-500" />{" "}
                  <span className="font-semibold">{route.sales_person}</span>
                </p>

                <p className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                  <Phone size={16} className="text-blue-500" /> {route.rep_phone}
                </p>

                <p className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                  <MapPin size={16} className="text-red-500" /> {route.addr1}{" "}
                  {route.addr2}, {route.city} {route.state}, {route.zip}
                </p>

                <p className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                  <ClipboardList size={16} className="text-purple-500" />{" "}
                  {route.notes ? route.notes : "No notes added"}
                </p>
              </div>

              {/* Buttons */}
              <Changeorderstatus />
            </div>
          ))}
      </div>

      <div className="mt-8">
        <Stageroutes />
        <Pastroutes />
      </div>
    </div>
  );
}

export default Routesummary;
