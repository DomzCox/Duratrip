
import { Outlet, Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <div className="container">
        <div className="rounded">
        <h1 className="font-semibold text-gray-500">DuraTrip</h1>
        </div>

        <div className=" flex justify-end gap-3">
            <Link to="/">Home</Link>
            <Link to="/trip">Trip</Link>
        </div>
    </div>
    <Outlet />
    </>
  )
}
