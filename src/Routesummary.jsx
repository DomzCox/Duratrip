import { Link } from "react-router-dom";
import Pastroutes from "./components/Pastroutes";
import Stageroutes from "./components/Stageroutes";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { listenForRoutes } from './slices/routeSlice';
import { changeOrderStatus } from "./slices/SingleOrderSlice";
import Changeorderstatus from "./Changeorderstatus";
import Addnote from "./addNote"



function Routesummary() {
  const dispatch = useDispatch()
  const routes = useSelector( (state) => state.tripRoutes.routes )
  const orderStatus = useSelector( state => state.singleOrder.orderStatus)
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
      <div key={key} className="relative text-sm p-2 mb-4 shadow-md bg-gray-100 text-gray-500">
        {/* <Link to="/"> */}
          
          <Changeorderstatus />
          <h3 className="font-semibold">{} - Status: {orderStatus} </h3>
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
           
          </p>

          {/* Component for adding notes to the order while working on the job*/}
          <Addnote />
        {/* </Link> */}
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
