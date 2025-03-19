import Home from "./Home"
import Nav from "./Nav"
import Navbar from "./Nav1";
import {
   createBrowserRouter,
    createRoutesFromElements,
     Route, RouterProvider 
    } from 'react-router-dom';
import Trip from "./Trip";
import Routemap from "./Routemap";
import Productdisplay from "./Productdisplay";


import Login from "./Login";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
    {/* <Route path="/" element={<Nav />}> */}
      <Route index element={<Home />} />
      <Route path="trip" element={<Trip />} />
      <Route path="map" element={<Routemap />} />
      <Route path="prod" element={<Productdisplay />} />
      <Route path="login" element={<Login />} />
     {/*  <Route path="testnav" element={<Navbar />} /> */}
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
