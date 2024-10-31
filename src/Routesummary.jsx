

function Routesummary() {
  return (
    <>
        <span className="text-center">
        <h1 className="font-bold text-gray-500 mb-10 mt-5">Route #: 214 | Total Distance 3,753mi</h1>
       
      </span>

     

      <div className="flex flex-row justify-evenly gap-3">
        <span className="text-center rounded-full bg-slate-500 p-5 text-sm text-gray-300 font-bold">
          Stops <i className="">8</i>
        </span>

        <span className="text-center rounded-full bg-slate-500 p-5 text-sm  text-gray-300 font-bold">
          <h3>
            Drops <i className="font-bold">5</i>
          </h3>
        </span>

        <span className="text-center rounded-full bg-slate-500 p-5 text-sm  text-gray-300 font-bold">
          <h3>
            Installs <i className="">4</i>
          </h3>
        </span>

        <span className="text-center rounded-full bg-slate-500 p-5 text-sm  text-gray-300 font-bold">
          <h3>
            Pickups <i className="">3</i>
          </h3>
        </span>
      </div>
    </>
  )
}

export default Routesummary