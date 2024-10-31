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
  const [directionsService, setDirectionsService] = useState();
  const [directionsRenderer, setDirectionsRenderer] = useState();
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0]

  useEffect( () => {
    if(!routesLibrary || !map ) return;
    let ds = new routesLibrary.DirectionsService()
    let dr =  new routesLibrary.DirectionsRenderer( {map} ) 
    setDirectionsService( ds );
    setDirectionsRenderer( dr );
   
   ds.route({
       origin:"4200 blankenship st, wichita falls, tx",
       destination:"1600 Pennsylvania Avenue NW, Washington, DC 20500",
       travelMode:google.maps.TravelMode.DRIVING,
       provideRouteAlternatives: true,

   }).then( (response) => {
    dr.setDirections( response );
       setRoutes(response.routes);
       

   });


  },[routesLibrary, map]);

  


  
 


}
