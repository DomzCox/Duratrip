import { useState } from "react";

function Pastroutes() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Dummy order data
  const orders = [
    { id: 1, details: "Order details for #1" },
    { id: 2, details: "Order details for #2" },
    { id: 3, details: "Order details for #3" },
    { id: 4, details: "Order details for #4" },
  ];

  return (
    <div className="mt-5 p-4 bg-white rounded-lg shadow-md">
      <h2 className="font-semibold text-lg mb-5">Past Routes</h2>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="border p-4 rounded-lg w-full md:w-64">
          <h4 className="mb-4 font-semibold">Route #: 12345</h4>

          <div className="flex flex-wrap gap-2">
            {orders.map((order) => (
              <button
                key={order.id}
                className="px-2 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                onClick={() => setSelectedOrder(order)}
              >
                Order #{order.id}
              </button>
            ))}
          </div>

          {/* Display selected order details */}
          {selectedOrder && (
            <div className="mt-3 p-2 border-t">
              <h4 className="font-semibold text-gray-700">Order Details:</h4>
              <p className="text-gray-600">{selectedOrder.details}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pastroutes;
