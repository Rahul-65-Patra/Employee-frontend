import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useAuth } from '../../context/authContext'


const SummaryCard = () => {
  const {user} = useAuth()
  return (
    <div className="p-6 rounded-lg shadow-md bg-gray-50">
  <div className="flex items-center overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-xl">

    <div className="flex items-center justify-center w-16 h-16 text-3xl text-white bg-blue-600 rounded-full">
      <FaUser />
    </div>

    <div className="py-2 pl-6">
      <p className="text-lg font-semibold text-gray-600">Welcome Back</p>
      <p className="text-xl font-bold text-gray-800">{user.name}</p>
    </div>
  </div>
</div>


  )
}

export default SummaryCard