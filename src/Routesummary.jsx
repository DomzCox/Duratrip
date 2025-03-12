import { Link } from "react-router-dom";
import Pastroutes from "./components/Pastroutes";
import Stageroutes from "./components/Stageroutes";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { listenForRoutes } from './routeSlice'



function Routesummary() {
  const dispatch = useDispatch()
  const routes = useSelector( (state) => state.tripRoutes.routes )
  const user = useSelector( (state) => state.user.user )
  useEffect(() => {
    dispatch(listenForRoutes()); // Listen for real-time Firestore changes
    
  }, [dispatch]);

  return (
    <>
      <div className="text-teal-600 p-2">
      <h2 className="font-bold">Active Routes</h2>
     </div>
     
    {routes && routes.map( (route, key) => 
      <div key={key} className="text-sm p-2 mb-4 shadow-md bg-gray-100 text-gray-500">
        <Link to="/">
          <h3 className="font-semibold">{} - Drop & instsall - Completed <span className="text-xs"> 11/02/2024 9:32am</span></h3>
          <p>Sales Rep: {route.sales_person} - Phone:{route.rep_phone}</p>
          <p>cust.name : {route.cust_name}</p>
          
          <p>cust.phone : {route.phone} | cust.mobile : {route.mobile}</p>
          <p>Conf.Addr : {route.addr1 + route.addr2}, {route.city} {route.state}, {route.zip}</p>
          <p>cust.notes : {route.notes}</p>
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

)}


      <div>
        
        <Stageroutes />
        <Pastroutes />
      </div>

    </>
  );
}

export default Routesummary;
