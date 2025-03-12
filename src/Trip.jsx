import { useState, useEffect } from "react";

import { salesReps } from "./dbase/Saleslist";
import { states } from "./dbase/States";
import { useDispatch, useSelector } from "react-redux";

import { listenForRoutes, addRoute } from "./routeSlice";


export default function Trip() {
  //capture the form informat
  //save it to the array
 // const [routenumber, setRouteNumber] = useState(1);
  const [submitting, SetIssSubmitting] = useState(false);
  const submittingStyle = "bg-slate-700 text-slate-300 text-lg mb-4"
  const routenum = useSelector( (state) => state.tripRoutes.routeNum )
  const routenumset = useSelector( (state) => state.tripRoutes.routeNumIsSet )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listenForRoutes()); // Start listening for Firestore changes
  }, [dispatch]);

  //Handel the form submission for adding a new order to the route
  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    payload.routenum = routenum
    
    dispatch(addRoute(payload))
 
console.log("Payload before Dispatch: ", payload)
   
  };

  
  return (
    <div className="container">
      <h2 className="text-center font-semibold text-teal-900 text-xl">
        Trip Details
      </h2>
      <h3 className="font-bold text-base mt-2 mb-2">Order Information</h3>

      <form className="flex flex-col gap-2 text-sm" onSubmit={submitForm}>
      
      <label className="form-label" htmlFor="order_num">
          Order #
        </label>
        <input className="input" placeholder="DP-" type="number" name="order_num" />

        <label className="form-label" htmlFor="cust_name">
          Customer Name:
          <sup className="required-star">*</sup>{" "}
        </label>
        <input className="input" type="text" name="cust_name" />



        <label className="form-label" htmlFor="sales_rep">
          Sales person / POC
        </label>
        <select className="input" name="sales_rep">

          {
            salesReps.map( (rep, id) => {
              return <option key={id} value={rep.name}>{ rep.name }</option>
            } )
          }
        
        </select>
        
          <h3 className="font-bold text-base mt-2 mb-2">Customer Address</h3>
        

                  <label className="form-label" htmlFor="addr1">
                    Address Line 1.
                  </label>
                  <input className="input" type="text" name="addr1" />

                  <label className="form-label" htmlFor="addr2">
                    Address Line 2.
                  </label>
                  <input className="input" type="text" name="addr2" />

                  <label className="form-label" htmlFor="city">
                    City
                  </label>
                  <input className="input" type="text" name="city" />

                  <label className="form-label" htmlFor="state">
                    State
                  </label>
                  <select className="input" name="state">

                    {
                      states.map( (state, id) => {
                        return <option key={id} value={state.text}>{ state.text }</option>
                      } )
                    }

                  </select>

          <label className="form-label" htmlFor="postal">
            Postal Code
          </label>
          <input className="input" type="text" name="postal" />


        
          <h3 className="font-bold text-base mt-2 mb-2">Preferred Phone Contact</h3>
      

        <label className="form-label" htmlFor="phone">
          Primary Contact Phone
        </label>
        <input className="input" type="text" name="phone" />

        <label className="form-label" htmlFor="mobile">
          Other Contact Phone
        </label>
        <input className="input" type="text" name="mobile" />

        <label className="form-label" htmlFor="stop_type">
          Drop off / Pick up
        </label>
        <select className="input" type="text" name="stop_type">
          <option value="drop">Drop</option>
          <option value="pick_up">Prop</option>
        </select>

        <h3 className="font-bold text-base mt-2 mb-2">Service Details</h3>

        <label className="form-label" htmlFor="service">
            Service Type
        </label>
        <select className="input" name="service">
         
          <option value="All 3">Un-install + Install + pickup</option>
          <option value="pickup">Pickup + Install</option>
        </select>

        <label className="form-label" htmlFor="climbs">
          Stairs / Elevator
        </label>
        <select className="input" name="climbs">
          <option value="none">None</option>
          <option value="elevator">Elevator</option>
          <option value="stairs">Stairs</option>
          <option value="stairs">Ramp</option>
        </select>

        <label className="form-label mt-4 font-bold" htmlFor="notes">
          Order notes
        </label>
        <textarea className="input" name="notes" type="text" />

        <button
          disabled={!routenumset}
          className={
            submitting
              ? submittingStyle
              : "bg-teal-700 p-1 rounded-lg mt-2 font-bold text-md mb-4 text-gray-200"
          }
        >
          {submitting ? <>Adding order to route...</> : <>Add to route</>}
        </button>
      </form>
    </div>
  );
}
