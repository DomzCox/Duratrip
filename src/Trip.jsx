
export default function Trip(){
  return (
    <div className="container">
      <h1 className="text-teal-700 text-2xl mb-5 mt-3">DomzTrip t1</h1>

      <h2 className="text-center font-semibold text-teal-900 text-xl">
        Trip Details
      </h2>

      <form className="flex flex-col">
        <label htmlFor="">Item</label>
        <input className="input" type="text" />
        <label htmlFor="">Item2</label>
        <input className="input" type="text" />
        <label htmlFor="">Item2</label>
        <input className="input" type="text" />
        <label htmlFor="">Item2</label>
        <input className="input" type="text" />
        <label htmlFor="">Item2</label>
        <input className="input" type="text" />
        <button className="bg-teal-700 p-1 rounded-lg mt-5 text-xl">
          submit
        </button>
      </form>
    </div>
  );
};
