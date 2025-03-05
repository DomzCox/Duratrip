import { Link } from "react-router-dom";

function Routesummary() {
  return (
    <>
     

     <div className="text-teal-600 p-2">
      <h2 className="font-bold">Route summary</h2>
     </div>
      <div className="text-sm p-2 mb-4 shadow-md bg-gray-100 text-gray-500">
        <Link to="/">
          <h3 className="font-semibold">DP12987 - Drop & instsall - Completed <span className="text-xs"> 11/02/2024 9:32am</span></h3>
          <p>Sales Rep: Dale Stewart - Phone: 999-999-9999</p>
          <p>cust.name : Dr. Dolittle</p>
          
          <p>cust.phone : 999-999-9999 | cust.mobile : 999-999-9999</p>
          <p>Conf.Addr : 309 N I-70, Wimbledon, MI, 76524</p>
          <p>cust.notes : Use the back access to enter the building. No parking space in the front</p>
          <p className="mt-3">
           {/* 
           
            IF THE TASK IS ALREADY COMPLETED DO NOT SHOW THE COMPLETE BUTTON
            NOTES WILL BE ABLE TO BE ADDED TO THE ROUTE-ORDER AFTER THE ACTUAL TASK IS COMPLETED (in case something was forgotten)

           <button className="bg-green-600 text-gray-50 p-1 rounded text-xs">Complete </button> 
            &nbsp; */}
            <button className="bg-orange-600 text-gray-50 p-1 rounded text-xs"> Add note</button>
          </p>
        </Link>
      </div>
      <div className="text-sm p-2 mb-4 shadow-md bg-gray-100 text-gray-500">
        <Link to="/">
          <h3 className="font-semibold">DP12987 - Drop & instsall - <span className="text-green-600">In-progress</span></h3>
          <p>Sales Rep: Tony Brumley - Phone: 999-999-9999</p>
          <p>cust.name : Dr. Dolittle</p>
          <p>cust.phone : 999-999-9999 | cust.mobile : 999-999-9999</p>
          <p>Conf.Addr : 309 N I-70, Wimbledon, MI, 76524</p>
          <p>cust.notes : Use the back access to enter the building. No parking space in the front</p>
          <p className="mt-3">
            <button className="bg-green-600 text-gray-50 p-1 rounded text-xs">Mark completed </button> 
            &nbsp;
            <button className="bg-orange-600 text-gray-50 p-1 rounded text-xs"> Add note</button>
          </p>
        </Link>
      </div>

      

    </>
  );
}

export default Routesummary;
