import React, { useEffect, useState } from "react";

const ClaimHistoryTable = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users/history");
        if (!response.ok) throw new Error("Failed to fetch history");
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Claim History
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-indigo-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                User
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Points
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry) => (
              <tr key={entry._id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-600">{entry.userId.name}</td>
                <td className="px-6 py-4 text-gray-600">{entry.points}</td>
                <td className="px-6 py-4 text-gray-600">
                  {new Date(entry.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClaimHistoryTable;
