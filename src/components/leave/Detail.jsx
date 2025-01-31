import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [leave, setLeave] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchLeave = async () => {
      try {
        const responnse = await axios.get(
          `https://employee-backend-cbhu.vercel.app/api/leave/detail/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (responnse.data.success) {
          setLeave(responnse.data.leave);
        }
      } catch (error) {
        console.log("Errrror: " + error)
        if (error.response && !error.response.data.success) {
          toast.error(error.response.data.error);
        }
      }
    };

    fetchLeave();
  }, []);

  const changeStatus = async (id, status) => {
    try {
        const responnse = await axios.put(
          `https://employee-backend-cbhu.vercel.app/api/leave/${id}`, {status},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (responnse.data.success) {
            navigate('/admin-dashboard/leaves')
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          toast.error(error.response.data.error);
        }
      }
  }

  return (
    <>
      {leave ? (
        <div className="max-w-3xl p-8 mx-auto bg-white rounded-md shadow-md mt-28">
          <h2 className="mb-8 text-2xl font-bold text-center">
            Leave Details
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <img
                src={`https://employee-backend-cbhu.vercel.app/${leave.employeeId.userId.profileImage}`}
                className="border rounded-full w-72 h-72"
              />
            </div>
            <div>
              <div className="flex mb-2 space-x-3">
                <p className="text-lg font-bold">Name:</p>
                <p className="font-medium">{leave.employeeId.userId.name}</p>
              </div>
              <div className="flex mb-2 space-x-3">
                <p className="text-lg font-bold">Employee ID:</p>
                <p className="font-medium">{leave.employeeId.employeeId}</p>
              </div>

              <div className="flex mb-2 space-x-3">
                <p className="text-lg font-bold">LeaveType:</p>
                <p className="font-medium">
                  {leave.leaveType}
                </p>
              </div>
              <div className="flex mb-2 space-x-3">
                <p className="text-lg font-bold">Reason:</p>
                <p className="font-medium">{leave.reason}</p>
              </div>

              <div className="flex mb-2 space-x-3">
                <p className="text-lg font-bold">Department:</p>
                <p className="font-medium">{leave.employeeId.department.dep_name}</p>
              </div>
              <div className="flex mb-2 space-x-3">
                <p className="text-lg font-bold">Start Date:</p>
                <p className="font-medium">{new Date(leave.startDate).toLocaleDateString()}</p>
              </div>
              <div className="flex mb-2 space-x-3">
                <p className="text-lg font-bold">End Date:</p>
                <p className="font-medium">{new Date(leave.endDate).toLocaleDateString()}</p>
              </div>
              <div className="flex mb-2 space-x-3">
                <p className="text-lg font-bold">
                    {leave.status === "Pending" ? "Action:" : "Status:"}
                    </p>
                    {leave.status === "Pending" ? (
                        <div className="flex space-x-2">
                            <button className="px-2 py-1 text-white bg-green-600 rounded-sm hover:bg-green-500"
                            onClick={() => changeStatus(leave._id, "Approved")}>Approve</button>
                            <button className="px-2 py-0.5 bg-red-600 hover:bg-red-500 text-white rounded-sm"
                            onClick={() => changeStatus(leave._id, "Rejected")}>Reject</button>
                        </div>
                    ) : 
                    <p className="font-medium">{leave.status}</p>
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div> Loading ....</div>
      )}
    </>
  );
};

export default Detail;