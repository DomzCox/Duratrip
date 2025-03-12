import { useState } from "react";
//import { Button } from "@/components/ui/button";
import { Menu, X, Bell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(2); // Example notification count

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-800 dark:text-white">
            DuraTrip
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Add order
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Services
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Contact
            </a>
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
          <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            Dashboard
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            Add Order
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            Services
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            Contact
          </a>
          <div className="px-4 py-2">
            <button className="w-full">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
