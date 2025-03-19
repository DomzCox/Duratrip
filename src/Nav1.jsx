import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
//import { Button } from "@/components/ui/button";
import { Menu, X, Bell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(2); // Example notification count

  return (
   <>
    <nav className="bg-white dark:bg-gray-900 shadow-md mb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-800 dark:text-white">
            DuraTrip
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Dashboard
            </Link>
            <Link to="/trip" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Add order
            </Link>
           
            
          </div>

          {/* Right Section: Notifications + Login */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <div className="relative cursor-pointer">
              <Bell size={24} className="text-gray-800 dark:text-white" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                  {notifications}
                </span>
              )}
            </div>

            {/* Login Button */}
            <div className="hidden md:block">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" variant="outline">Login</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 dark:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <Link to="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            Dashboard
          </Link>
          <Link to="" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            Add Order
          </Link>
          
        
          <div className="px-4 py-2">
            <Link to="/login">
            <button className="w-full">Login</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
    <Outlet />
   </>
  );
};

export default Navbar;
