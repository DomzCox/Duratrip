import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="container mb-5">
        <span className="w-0.5 ring-1">
          <h1 className="font-extrabold text-gray-500  text-2xl mb-3">DuraTrip - Route# 214  </h1>
        </span>
      <span className="font-semibold text-gray-500"> 3,753mi | orders icon | status icon</span>
        <div className=" flex gap-1 mt-3">
          <Link className="nav-buttons" to="/">
            Dashboard
          </Link>
          <Link className="nav-buttons" to="/trip">
            New order
          </Link>
          {/*  <Link className="nav-buttons" to="/map">map</Link>
            <Link className="nav-buttons" to="/prod">Products (test)</Link>
            <Link className="nav-buttons" to="/fbase">Fbase (test)</Link> 
            */}
        </div>
      </div>
      <Outlet />
    </>
  );
}
