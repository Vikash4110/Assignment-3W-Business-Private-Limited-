import React from "react";

const Alert = ({ message, type }) => {
  if (!message) return null;
  return (
    <div
      className={`p-4 rounded-md mt-4 ${
        type === "error"
          ? "bg-red-100 text-red-700"
          : "bg-green-100 text-green-700"
      }`}
    >
      {message}
    </div>
  );
};

export default Alert;
