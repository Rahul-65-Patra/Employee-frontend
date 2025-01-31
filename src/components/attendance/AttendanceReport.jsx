import axios from "axios";
import React, { useEffect, useState } from "react";

const AttendanceReport = () => {
  const [report, setReport] = useState({});
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);
  const [dateFilter, setDateFilter] = useState();
  const [loading, setLoading] = useState(false);

  const fetchReport = async () => {
    try {
      setLoading(true);
      const query = new URLSearchParams({ limit, skip });
      if (dateFilter) {
        query.append("date", dateFilter);
      }
      const responnse = await axios.get(
        `http://localhost:5000/api/attendance/report?${query.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (responnse.data.success) {
        if (skip == 0) {
          setReport(responnse.data.groupData);
        } else {
          setReport((prevData) => ({
            ...prevData,
            ...responnse.data.groupData,
          }));
        }
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchReport();
  }, [skip, dateFilter]);

  const handleLoadmore = () => {
    setSkip((prevSkip) => prevSkip + limit);
  };
  return (
    <div className="min-h-[600px] p-10">
    <h2 className="mb-6 text-3xl font-bold text-center text-indigo-600">Attendance Report</h2>
  
    <div className="mb-6">
      <h2 className="mb-2 text-xl font-semibold text-gray-700">Filter by Date</h2>
      <input
        type="date"
        className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        onChange={(e) => {
          setDateFilter(e.target.value);
          setSkip(0);
        }}
      />
    </div>
  
    {loading ? (
      <div className="text-xl text-center text-gray-600">Loading...</div>
    ) : (
      Object.entries(report).map(([date, record]) => (
        <div className="p-6 mt-6 bg-white rounded-lg shadow-lg" key={date}>
          <h2 className="mb-4 text-xl font-semibold text-gray-800">{date}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr className="text-left text-gray-600 bg-gray-100">
                  <th className="px-4 py-2 border-b">S No</th>
                  <th className="px-4 py-2 border-b">Employee ID</th>
                  <th className="px-4 py-2 border-b">Name</th>
                  <th className="px-4 py-2 border-b">Department</th>
                  <th className="px-4 py-2 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {record.map((data, i) => (
                  <tr key={data.employeeId} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-gray-700 border-b">{i + 1}</td>
                    <td className="px-4 py-2 text-gray-700 border-b">{data.employeeId}</td>
                    <td className="px-4 py-2 text-gray-700 border-b">{data.employeeName}</td>
                    <td className="px-4 py-2 text-gray-700 border-b">{data.departmentName}</td>
                    <td className="px-4 py-2 text-gray-700 border-b">{data.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))
    )}
  
    <div className="flex justify-center mt-6">
      <button
        className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        onClick={handleLoadmore}
      >
        Load More
      </button>
    </div>
  </div>
  
  
  );
};

export default AttendanceReport;