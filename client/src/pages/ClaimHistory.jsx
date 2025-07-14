import React from "react";
import ClaimHistoryTable from "../components/history/ClaimHistoryTable";

const ClaimHistory = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Claim History</h1>
      <ClaimHistoryTable />
    </div>
  );
};

export default ClaimHistory;
