import axios from "axios";
import React from "react";
import AddUserForm from "../components/user/AddUserForm";

const AddUser = () => {
  const handleAddUser = async (name) => {
    await axios.post("http://localhost:5000/api/users/add", { name });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New User</h1>
      <AddUserForm onAddUser={handleAddUser} />
    </div>
  );
};

export default AddUser;
