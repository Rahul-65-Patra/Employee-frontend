import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTachometerAlt, FaUsers, FaMoneyBillWave, FaRegCalendarAlt } from 'react-icons/fa';
import { FcDepartment, FcLeave } from 'react-icons/fc';
import { IoSettings } from 'react-icons/io5';
import {AiOutlineFileText} from 'react-icons/ai';

const AdminSidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen text-white bg-gray-900 shadow-lg">
  {/* Header */}
  <div className="flex items-center justify-center h-16 bg-green-600">
    <h3 className="text-3xl font-bold tracking-tight font-spacific">StaffHub</h3>
  </div>

  {/* Navigation Links */}
  <div className="px-4 py-6 space-y-4">
    <NavLink
      to="/admin-dashboard"
      className={({ isActive }) =>
        `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
        flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-200`
      }
      end
    >
      <FaTachometerAlt className="text-xl" />
      <span className="text-lg font-medium">Dashboard</span>
    </NavLink>

    <NavLink
      to="/admin-dashboard/employees"
      className={({ isActive }) =>
        `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
        flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-200`
      }
    >
      <FaUsers className="text-xl" />
      <span className="text-lg font-medium">Employees</span>
    </NavLink>

    <NavLink
      to="/admin-dashboard/departments"
      className={({ isActive }) =>
        `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
        flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-200`
      }
    >
      <FcDepartment className="text-xl" />
      <span className="text-lg font-medium">Departments</span>
    </NavLink>

    <NavLink
      to="/admin-dashboard/leaves"
      className={({ isActive }) =>
        `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
        flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-200`
      }
    >
      <FcLeave className="text-xl" />
      <span className="text-lg font-medium">Leaves</span>
    </NavLink>

    <NavLink
      to="/admin-dashboard/salary/add"
      className={({ isActive }) =>
        `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
        flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-200`
      }
    >
      <FaMoneyBillWave className="text-xl" />
      <span className="text-lg font-medium">Salary</span>
    </NavLink>

    <NavLink
      to="/admin-dashboard/attendance"
      className={({ isActive }) =>
        `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
        flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-200`
      }
    >
      <FaRegCalendarAlt className="text-xl" />
      <span className="text-lg font-medium">Attendance</span>
    </NavLink>

    <NavLink
      to="/admin-dashboard/attendance-report"
      className={({ isActive }) =>
        `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
        flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-200`
      }
    >
      <AiOutlineFileText className="text-xl" />
      <span className="text-lg font-medium">Attendance Report</span>
    </NavLink>

    <NavLink
      to="/admin-dashboard/setting"
      className={({ isActive }) =>
        `${isActive ? "bg-orange-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
        flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-200`
      }
    >
      <IoSettings className="text-xl" />
      <span className="text-lg font-medium">Setting</span>
    </NavLink>
  </div>
</div>

  )
}

export default AdminSidebar;
