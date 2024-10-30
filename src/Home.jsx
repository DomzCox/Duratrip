
function Home() {
  return (
    <div className="container pt-2">

        <span className="text-center p-2 mb-10">
            <h3 className="p-3 font-bold">Total Distance 3,753mi</h3>
        </span>

        <div className="flex flex-row justify-evenly gap-3">
          
        <span className="text-center rounded bg-slate-400 p-1 text-sm">
            Stops <i className="font-extrabold">8</i>
        </span>

        <span className="text-center rounded bg-slate-400 p-1 text-sm">
            <h3>Deliveries <i className="font-extrabold">5</i></h3>
        </span>

        <span className="text-center rounded bg-slate-400 p-1 text-sm">
            <h3>Installs <i className="font-extrabold">4</i></h3>
        </span>

        <span className="text-center rounded bg-slate-400 p-1 text-sm">
            <h3>Pickups <i className="font-extrabold">3</i></h3>
        </span>

       
        </div>

        <h1 className="mt-10 font-semibold text-xl mb-3">Route</h1>
        <img src="https://placehold.co/100" className="w-full" alt="" />

        <div>
            <h1 className="mt-10 mb-5 font-semibold">Notes:</h1>
            <ol>
                <li>
                    <p className="font-semibold mb-3">Order# DP13232 </p>
                    <p className="text-gray-500 mb-5 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ex reprehenderit obcaecati enim cupiditate maxime at dolor harum natus doloribus dignissimos sit quae nemo veritatis odio eaque dolorum, voluptate vel.</p>
                </li>

                <li>
                    <p className="font-semibold mb-5">Order# DP25232 </p>
                    <p className="text-gray-500 mb-5 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ex reprehenderit obcaecati enim cupiditate maxime at dolor harum natus doloribus dignissimos sit quae nemo veritatis odio eaque dolorum, voluptate vel.</p>
                </li>

                <li>
                    <p className="font-semibold mb-3">Order# DP27432 </p>
                    <p className="text-gray-500 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ex reprehenderit obcaecati enim cupiditate maxime at dolor harum natus doloribus dignissimos sit quae nemo veritatis odio eaque dolorum, voluptate vel.</p>
                </li>
                
            </ol>
        </div>

    <div className="trip-summary mt-10 text-gray-600 text-sm">
       <h1 className="font-bold mb-5">Trip Summary</h1>
       <p className="">Projected Cost: $</p>
       <p className="">Food Cost: $</p>
       </div>
    </div>
  )
}

export default Home

