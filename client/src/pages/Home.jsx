import React, { useEffect, useState } from "react";
import Alert from "../components/common/Alert";
import UserSelector from "../components/leaderboard/UserSelector";
import ClaimButton from "../components/user/ClaimButton";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    const initialize = async () => {
      try {
        await fetch("http://localhost:8000/api/users/initialize", {
          method: "GET",
        });
        fetchUsers();
      } catch (error) {
        setMessage("Error initializing users");
        setMessageType("error");
      }
    };
    initialize();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/users/leaderboard"
      );
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
      if (data.length > 0) {
        setSelectedUser(data[0].id);
      }
    } catch (error) {
      setMessage("Error fetching users");
      setMessageType("error");
    }
  };

  const handleClaim = async () => {
    if (!selectedUser) {
      setMessage("Please select a user");
      setMessageType("error");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/api/users/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: selectedUser }),
      });
      if (!response.ok) throw new Error("Failed to claim points");
      const data = await response.json();
      setMessage(`Claimed ${data.points} points for ${data.user.name}`);
      setMessageType("success");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Error claiming points");
      setMessageType("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to Leaderboard Pro
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <UserSelector
          users={users}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <ClaimButton onClaim={handleClaim} disabled={!selectedUser} />
        <Alert message={message} type={messageType} />
      </div>
    </div>
  );
};

export default Home;
