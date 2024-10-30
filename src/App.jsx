import Home from "./Home"
import Nav from "./Nav"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Trip from "./Trip";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
      <Route path="trip" element={<Trip />} />
    

      

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
