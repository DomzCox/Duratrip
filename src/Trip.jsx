import { useState } from "react";
import { addTripDetails } from "./dbase/Addtrip";

export default function Trip() {

  //capture the form informat
  //save it to the array
  const [routenumber, setRouteNumber] = useState(1)
  const [submitting, isSubmitting] = useState(false)
  const submittingStyle = "bg-slate-700 text-slate-300 text-lg"

  const submitForm = ( e ) =>{
    e.preventDefault();

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)
    isSubmitting(true)
    setTimeout( () => {
      
      addTripDetails.push(payload)
      isSubmitting(false)

      console.log("After Submit complete", addTripDetails)
    },5000)
    
    
   

    
  }
  console.log("Before", addTripDetails)
  return (
    
    <div className="container">
      <h2 className="text-center font-semibold text-teal-900 text-xl">
        Trip Details
      </h2>

      <form className="flex flex-col gap-2 text-sm" onSubmit={submitForm}>

      <label className="heading-label" htmlFor="">Route #<sup className="required-star">*</sup> </label>
        <input className="input" type="text" name="route_num"/>

        <label className="form-label" htmlFor="">Order #</label>
        <input className="input" type="text" name="order_num"/>

        <label className="form-label" htmlFor="">Sales person / POC</label>
        <select className="input" name="sales_rep">
          <option value="">Maria</option>
          <option value="">Tony</option>
          <option value="">Devin</option>
          <option value="">Mandy</option>
          <option value="">Crystal</option>
          <option value="">Nick</option>
        </select>

        <label className="form-label"  htmlFor="">Address</label>
        <input className="input" type="text" name="destination"/>

        <label className="form-label"  htmlFor="">Phone</label>
        <input className="input" type="text" name="phone"/>

        <label className="form-label"  htmlFor="">Mobile</label>
        <input className="input" type="text" name="mobile"/>

        <label className="form-label"  htmlFor="">Dopo off / Pick up</label>
        <select className="input" type="text" name="stop_type">
          <option>Drop</option>
          <option>Prop</option>
        </select>

        

        <label className="form-label"  htmlFor="">Install</label>
        <select className="input" name="install">
          <option>No</option>
          <option>Yes</option>
          <option>Un-install</option>
        </select>

        <label className="form-label"  htmlFor="">Stairs/Elevator</label>
        <select className="input" name="climbs">
          <option>None</option>
          <option>Elevator</option>
          <option>Stairs</option>
        </select>

        <label className="form-label"  htmlFor="">Notes</label>
        <textarea className="input" name="notes" type="text" />

        <button disabled={submitting} className={ submitting ? submittingStyle :"bg-teal-700 p-1 rounded-lg mt-5 text-sm"}>
          Add trip
        </button>
      </form>
    </div>
  );
}
