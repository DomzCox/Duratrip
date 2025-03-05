import Home from "./Home"
import Nav from "./Nav"
import {
   createBrowserRouter,
    createRoutesFromElements,
     Route, RouterProvider 
    } from 'react-router-dom';
import Trip from "./Trip";
import Routemap from "./Routemap";
import Productdisplay from "./Productdisplay";
import Fbase from "./Fbase";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
      <Route path="trip" element={<Trip />} />
      <Route path="map" element={<Routemap />} />
      <Route path="prod" element={<Productdisplay />} />
      <Route path="fbase" element={<Fbase />} />
    </Route>
  ))

function App() {
 
  
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
