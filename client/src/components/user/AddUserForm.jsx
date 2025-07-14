import React, { useState } from "react";
import Alert from "../common/Alert";

const AddUserForm = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim()) {
      try {
        await onAddUser(name);
        setMessage("User added successfully!");
        setMessageType("success");
        setName("");
      } catch (error) {
        setMessage("Error adding user");
        setMessageType("error");
      }
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Add New User
      </h2>
      <div className="flex space-x-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name"
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSubmit}
          className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Add User
        </button>
      </div>
      <Alert message={message} type={messageType} />
    </div>
  );
};

export default AddUserForm;
