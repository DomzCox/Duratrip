import {
  APIProvider,
  Map,
  useMap,
  AdvancedMarker,
  Pin,
  InfoWindow,
  Marker,
  useMarkerRef,
  useMapsLibrary
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

export default function Routemap() {
  const position = { lat: 33.930828, lng: -98.484879 };
  const [markerRef, marker] = useMarkerRef();
 

  return (
    <div className="mt-10">
      <h1 className="text-bold text-gray-400">Route Map</h1>
      <APIProvider apiKey={"AIzaSyAyGFva7f2VVuPrxat-lq-ZNtfJIcLk0WE"}>
        <Map
          defaultCenter={position}
          defaultZoom={7}
          style={{ width: "100%", height: "50vh" }}
          fullscreenControl={false}
          mapId={"ad539911b7eb2d6b"}
        >
            
           <Direction />
          
        </Map>

       
      </APIProvider>
    </div>
  );
}

function Direction() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const [routeSummary, setRouteSummary] = useState({})

  const selected = routes[routeIndex];
  const leg = selected?.legs[0]

  useEffect( () => {

    if(!routesLibrary || !map ) return;
    let ds = new routesLibrary.DirectionsService()
    let dr = new routesLibrary.DirectionsRenderer( {map} ) 
   
   
   ds.route({
       origin:"4200 blankenship st, wichita falls, tx",
       destination:"NRG Pkwy, Houston, TX 77054",
       
       travelMode:google.maps.TravelMode.DRIVING,
       provideRouteAlternatives: true,

   }).then( (response) => {
    
    dr.setDirections( response );
       setRoutes(response.routes);
       setRouteSummary({
        summary:response.routes[0].summary,
        duration:response.routes[0].legs[0].duration.text,
        distance:response.routes[0].legs[0].distance.text,
        start_address:response.routes[0].legs[0].start_address,
        end_address:response.routes[0].legs[0].end_address
       })
       
    /*  
    console.log(response)  
     console.log(response.routes[0].legs[0].duration.text)
     console.log(response.routes[0].legs[0].distance.text)
     console.log(response.routes[0].legs[0].start_address)
     console.log(response.routes[0].legs[0].end_address)
     console.log(response.routes[0].summary)
     */
   });


  },[routesLibrary, map]);

  
return(
    <div className="text-sm text-gray-600">
        Distance: {routeSummary.distance} | 
        Duration: {routeSummary.duration} 
        </div>
)

console.log(routeSummary)

}


