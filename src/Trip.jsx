export default function Trip() {
  return (
    <div className="container">
      <h2 className="text-center font-semibold text-teal-900 text-xl">
        Trip Details
      </h2>

      <form className="flex flex-col gap-2 text-sm">

        <label htmlFor="">Order #</label>
        <input className="input" type="text" />

        <label htmlFor="">Sales person / POC</label>
        <select className="input" name="" id="">
          <option value="">Maria</option>
          <option value="">Tony</option>
          <option value="">Devin</option>
          <option value="">Mandy</option>
          <option value="">Crystal</option>
          <option value="">Nick</option>
        </select>

        <label htmlFor="">Address</label>
        <input className="input" type="text" />

        <label htmlFor="">Phone</label>
        <input className="input" type="text" />

        <label htmlFor="">Mobile</label>
        <input className="input" type="text" />

        <label htmlFor="">Dopo off / Pick up</label>
        <select className="input" type="text">
          <option>Drop</option>
          <option>Prop</option>
        </select>

        

        <label htmlFor="">Install</label>
        <select className="input">
          <option>No</option>
          <option>Yes</option>
          <option>Un-install</option>
        </select>

        <label htmlFor="">Stairs/Elevator</label>
        <select className="input">
          <option>None</option>
          <option>Elevator</option>
          <option>Stairs</option>
        </select>

        <label htmlFor="">Distance</label>
        <input className="input" type="text" />

        <label htmlFor="">Notes</label>
        <textarea className="input" name="notes" type="text" />

        <button className="bg-teal-700 p-1 rounded-lg mt-5 text-sm">
          Add trip
        </button>
      </form>
    </div>
  );
}
