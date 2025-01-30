import React from 'react'
import { useAuth } from '../../context/authContext'

const Navbar = () => {

  const {user,logout} = useAuth();
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-green-600 shadow-md">
    <p className="text-xl font-semibold text-white">Welcome, {user.name}</p>
    
    <button
      onClick={logout}
      className="px-6 py-2 font-semibold text-white transition-all duration-200 ease-in-out bg-red-700 rounded-lg hover:bg-red-600"
    >
      Logout
    </button>
  </div>
  
  )
}

export default Navbar