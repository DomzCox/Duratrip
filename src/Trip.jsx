import { useState } from "react";
import { addTripDetails } from "./dbase/Addtrip";
import { salesReps } from "./dbase/Saleslist";

export default function Trip() {
  //capture the form informat
  //save it to the array
  const [routenumber, setRouteNumber] = useState(1);
  const [submitting, isSubmitting] = useState(false);
  const submittingStyle = "bg-slate-700 text-slate-300 text-lg";

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

      <form className="flex flex-col gap-2 text-sm" onSubmit={submitForm}>
        <label className="heading-label" htmlFor="">
          Route # {routenumber}
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

        <label className="form-label" htmlFor="">
          Cust. Address
        </label>
        <input className="input" type="text" name="destination" />

        <label className="form-label" htmlFor="">
          Cust. Phone
        </label>
        <input className="input" type="text" name="phone" />

        <label className="form-label" htmlFor="">
          Cust. Mobile
        </label>
        <input className="input" type="text" name="mobile" />

        <label className="form-label" htmlFor="">
          Dopo off / Pick up
        </label>
        <select className="input" type="text" name="stop_type">
          <option value="drop">Drop</option>
          <option value="pick_up">Prop</option>
        </select>

        <label className="form-label" htmlFor="">
          Install
        </label>
        <select className="input" name="install">
          <option value="n">No</option>
          <option value="y">Yes</option>
          <option value="un">Un-install</option>
        </select>

        <label className="form-label" htmlFor="">
          Stairs / Elevator
        </label>
        <select className="input" name="climbs">
          <option value="none">None</option>
          <option value="elevator">Elevator</option>
          <option value="stairs">Stairs</option>
        </select>

        <label className="form-label" htmlFor="">
          Order notes
        </label>
        <textarea className="input" name="notes" type="text" />

        <button
          disabled={submitting}
          className={
            submitting
              ? submittingStyle
              : "bg-teal-700 p-1 rounded-lg mt-5 text-sm"
          }
        >
          {submitting ? <>Adding order to route...</> : <>Add to route</>}
        </button>
      </form>
    </div>
  );
}
