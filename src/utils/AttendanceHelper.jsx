import axios from "axios";
import React from "react";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
    width: "70px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    width: "100px",
  },
  {
    name: "Emp ID",
    selector: (row) => row.employeeId,
    sortable: true,
    width: "100px",
  },
  {
    name: "Department",
    selector: (row) => row.department,
    width: "120px",
    center:true,
  },
  {
    name: "Action",
    selector: (row) => row.action,
    center: "true",
  },
];

export const AttendanceHelper = ({status, employeeId, statusChange}) => {
    const markEmployee = async (status, employeeId) => {
        const response = await axios.put(`http://localhost:5000/api/attendance/update/${employeeId}`, {status}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
        })
        if(response.data.success) {
            statusChange()
        }
    }
  return (
    <div>
      {status == null ? (
        <div className="flex space-x-8">
          <button
            className="px-4 py-2 text-white bg-green-600 rounded-sm hover:bg-green-500"
            onClick={() => markEmployee("present", employeeId)}>
            Present
          </button>
          <button
            className="px-4 py-2 text-white bg-red-600 rounded-sm hover:bg-red-400"
            onClick={() => markEmployee("absent", employeeId)}>
            Absent
          </button>
          <button
            className="px-4 py-2 text-white bg-gray-600 rounded-sm hover:bg-gray-500"
            onClick={() => markEmployee("sick", employeeId)}>
            Sick
          </button>
          <button
            className="px-4 py-2 text-white bg-yellow-500 rounded-sm hover:bg-yellow-400"
            onClick={() => markEmployee("leave", employeeId)}>
            Leave
          </button>
        </div>
      ) : (
        <p className="w-20 py-2 text-center bg-gray-100 rounded">{status}</p>
      )}
    </div>
  );
};