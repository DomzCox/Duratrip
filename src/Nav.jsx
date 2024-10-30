
import { Outlet, Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <div className="container mb-5">
        
        
        

        <div className=" flex justify-evenly gap-3 mt-3">
        <h1 className="font-extrabold text-gray-500 text-2xl">DuraTrip</h1>
            <Link className="nav-buttons" to="/">Dashboard</Link>
            <Link className="nav-buttons" to="/trip">Trip Details</Link>
        </div>
    </div>
    <Outlet />
    </>
  )
}
