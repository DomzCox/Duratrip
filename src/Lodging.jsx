import { places } from "./dbase/places"


export default function Lodging() {
  return (
    <div>
         <h2 className="text-center mt-10 mb-10 font-xl text-gray-500 font-bold">Suggested places to stay on your trip</h2>
        <div className="places flex flex-row justify-evenly gap-3 mt-5">

         
            {places.map((place, key) => 
            
            <div className="text-sm" key={key}>
              <time className="">
              Arrival: {place.arrival}<sub>pm</sub>
              </time>
                <p className="mb-3">
                  Distance: {place.distance}
                </p>
              <h3>{place.name}</h3>
                <p>
                  {place.address}<br />
                  {place.city}, {place.state}, {place.zip}
                </p>
              <p className="mt-3 text-teal-600 font-semibold">Price: ${place.price}</p>
           </div>
            
            )}
          

         


        

        </div>
    </div>
  )
}
