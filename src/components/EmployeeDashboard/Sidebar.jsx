import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegCalendarAlt, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import { FcDepartment, FcLeave } from 'react-icons/fc';
import { IoSettings } from 'react-icons/io5';
import { useAuth } from '../../context/authContext';


const Sidebar = () => {
  
   const {user} = useAuth();

  return (
    <div className="fixed top-0 left-0 w-64 h-screen text-white bg-gray-900 shadow-md">
    {/* Header */}
    <div className="flex items-center justify-center h-16 bg-green-600">
      <h3 className="text-2xl font-bold tracking-tight text-white">StaffHub</h3>
    </div>
  
    {/* Navigation Links */}
    <div className="px-6 py-6 space-y-4">
      <NavLink
        to="/employee-dashboard"
        className={({ isActive }) =>
          `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
          flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-300 ease-in-out`
        }
        end
      >
        <FaTachometerAlt className="text-xl" />
        <span className="text-lg font-medium">Dashboard</span>
      </NavLink>
  
      <NavLink
        to={`/employee-dashboard/profile/${user._id}`}
        className={({ isActive }) =>
          `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
          flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-300 ease-in-out`
        }
      >
        <FaUsers className="text-xl" />
        <span className="text-lg font-medium">My Profile</span>
      </NavLink>
  
      <NavLink
        to={`/employee-dashboard/leaves/${user._id}`}
        className={({ isActive }) =>
          `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
          flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-300 ease-in-out`
        }
      >
        <FcDepartment className="text-xl" />
        <span className="text-lg font-medium">Leaves</span>
      </NavLink>
  
      <NavLink
        to={`/employee-dashboard/salary/${user._id}`}
        className={({ isActive }) =>
          `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
          flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-300 ease-in-out`
        }
      >
        <FaRegCalendarAlt className="text-xl" />
        <span className="text-lg font-medium">Salary</span>
      </NavLink>
  
      <NavLink
        to="/employee-dashboard/setting"
        className={({ isActive }) =>
          `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
          flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-300 ease-in-out`
        }
      >
        <IoSettings className="text-xl" />
        <span className="text-lg font-medium">Setting</span>
      </NavLink>
    </div>
  </div>
  
  )
}

export default Sidebar;
