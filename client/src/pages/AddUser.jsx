import React from "react";
import AddUserForm from "../components/user/AddUserForm";

const AddUser = () => {
  const handleAddUser = async (name) => {
    try {
      const response = await fetch("http://localhost:8000/api/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (!response.ok) throw new Error("Failed to add user");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New User</h1>
      <AddUserForm onAddUser={handleAddUser} />
    </div>
  );
};

export default AddUser;
