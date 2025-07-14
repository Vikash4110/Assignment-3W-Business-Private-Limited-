import React from "react";

const UserSelector = ({ users, selectedUser, setSelectedUser }) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Select User
      </label>
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="" disabled>
          Select a user
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
