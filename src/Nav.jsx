import { Outlet, Link } from "react-router-dom";
import Setroutenumber from "./Setroutenumber";
import { logUserOut, loginUser } from "./slices/userSlice";
import { useDispatch, useSelector } from "react-redux"

export default function Nav() {

  const route = useSelector( (state)=> state.tripRoutes.routeNum )
  const routeSet = useSelector( (state)=> state.tripRoutes.routeNumIsSet )
  const loggedStatus = useSelector( state => state.user.isLoggedIn)
  const dispatch =  useDispatch()

  const handleLogOut = () =>{
    dispatch(logUserOut())
  }

  const handleLogin = () =>{
    dispatch(loginUser())
  }

  return (
    <>
      <div className="container mb-5">
        <span className="w-0.5 ring-1">
          <h1 className="font-extrabold text-gray-500  text-2xl mb-3">DuraTrip 
            {
              (routeSet) ? " - Route# " + route  : ""
            }
              </h1>
        </span>
      <span className="font-semibold text-gray-500"> 3,753mi | orders icon | status icon</span>
        <div className=" flex gap-1 mt-3">
          <Link className="nav-buttons" to="/">
            Dashboard
          </Link>
          <Link className="nav-buttons" to="/trip">
            New order
          </Link>
          <Link className="nav-buttons" to="/testnav">
            Test Nav
          </Link>


          {loggedStatus ? <button className="nav-buttons" onClick={handleLogOut}>LogOut</button> : <Link className="nav-buttons" to="/login" onClick={handleLogin}>Login</Link>}

          {/*  <Link className="nav-buttons" to="/map">map</Link>
            <Link className="nav-buttons" to="/prod">Products (test)</Link>
            <Link className="nav-buttons" to="/fbase">Fbase (test)</Link> 
            */}
        </div>
        <Setroutenumber/>
      </div>
      <Outlet />
      
    </>
  );
}
