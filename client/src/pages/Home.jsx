import axios from "axios";
import React, { useEffect, useState } from "react";
import Alert from "../common/Alert";
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
        await axios.get("http://localhost:5000/api/users/initialize");
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
      const response = await axios.get(
        "http://localhost:5000/api/users/leaderboard"
      );
      setUsers(response.data);
      if (response.data.length > 0) {
        setSelectedUser(response.data[0].id);
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
      const response = await axios.post(
        "http://localhost:5000/api/users/claim",
        { userId: selectedUser }
      );
      setMessage(
        `Claimed ${response.data.points} points for ${response.data.user.name}`
      );
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
