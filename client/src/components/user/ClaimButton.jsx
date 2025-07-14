import React from "react";

const ClaimButton = ({ onClaim, disabled }) => {
  return (
    <button
      onClick={onClaim}
      disabled={disabled}
      className={`w-full p-3 rounded-lg text-white font-medium transition ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-indigo-700"
      }`}
    >
      Claim Points
    </button>
  );
};

export default ClaimButton;
