import { useState } from "react";
import { addTripDetails } from "./dbase/Addtrip";
import { salesReps } from "./dbase/Saleslist";
import { states } from "./dbase/States";

export default function Trip() {
  //capture the form informat
  //save it to the array
  const [routenumber, setRouteNumber] = useState(1);
  const [submitting, isSubmitting] = useState(false);
  const submittingStyle = "bg-slate-700 text-slate-300 text-lg mb-4"

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    isSubmitting(true);

    setTimeout(() => {
      setRouteNumber(payload.route_num);
      addTripDetails.push(payload);

      isSubmitting(false);
    }, 5000);
  };

  
  return (
    <div className="container">
      <h2 className="text-center font-semibold text-teal-900 text-xl">
        Trip Details
      </h2>
      <h3 className="font-bold text-base mt-2 mb-2">Order Information</h3>
      <form className="flex flex-col gap-2 text-sm" onSubmit={submitForm}>
        <label className="form-label" htmlFor="">
          Route # 
          <sup className="required-star">*</sup>{" "}
        </label>
        <input className="input" type="text" name="route_num" />

        <label className="form-label" htmlFor="">
          Order #
        </label>
        <input className="input" type="text" name="order_num" />

        <label className="form-label" htmlFor="">
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
        

                  <label className="form-label" htmlFor="">
                    Address Line 1.
                  </label>
                  <input className="input" type="text" name="destination" />

                  <label className="form-label" htmlFor="">
                    Address Line 2.
                  </label>
                  <input className="input" type="text" name="destination" />

                  <label className="form-label" htmlFor="">
                    City
                  </label>
                  <input className="input" type="text" name="destination" />

                  <label className="form-label" htmlFor="">
                    State
                  </label>
                  <select className="input" name="sales_rep">

                    {
                      states.map( (state, id) => {
                        return <option key={id} value={state.text}>{ state.text }</option>
                      } )
                    }

                  </select>

          <label className="form-label" htmlFor="">
            Postal Code
          </label>
          <input className="input" type="text" name="destination" />


        
          <h3 className="font-bold text-base mt-2 mb-2">Preferred Phone Contact</h3>
      

        <label className="form-label" htmlFor="">
          Primary Contact Phone
        </label>
        <input className="input" type="text" name="phone" />

        <label className="form-label" htmlFor="">
          Other Contact Phone
        </label>
        <input className="input" type="text" name="mobile" />

        <label className="form-label" htmlFor="">
          Dopo off / Pick up
        </label>
        <select className="input" type="text" name="stop_type">
          <option value="drop">Drop</option>
          <option value="pick_up">Prop</option>
        </select>

        <h3 className="font-bold text-base mt-2 mb-2">Service Details</h3>

        <label className="form-label" htmlFor="">
            Service Type
        </label>
        <select className="input" name="install">
         
          <option value="un">Un-install + Install + pickup</option>
          <option value="un">Pickup + Install</option>
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
          disabled={submitting}
          className={
            submitting
              ? submittingStyle
              : "bg-teal-700 p-1 rounded-lg mt-2 text-sm mb-4"
          }
        >
          {submitting ? <>Adding order to route...</> : <>Add to route</>}
        </button>
      </form>
    </div>
  );
}
