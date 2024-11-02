import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="container mb-5">
        <span className="w-0.5">
          <h1 className="font-extrabold text-gray-500 text-2xl">DuraTrip</h1>
        </span>

        <div className=" flex justify-evenly gap-3 mt-3">
          <Link className="nav-buttons" to="/">
            Dashboard
          </Link>
          <Link className="nav-buttons" to="/trip">
            Add trip
          </Link>
          {/*  <Link className="nav-buttons" to="/map">map</Link>
            <Link className="nav-buttons" to="/prod">Products (test)</Link>
            <Link className="nav-buttons" to="/fbase">Fbase (test)</Link> */}
        </div>
      </div>
      <Outlet />
    </>
  );
}
