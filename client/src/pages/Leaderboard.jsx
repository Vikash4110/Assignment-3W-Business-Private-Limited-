import React, { useEffect, useState } from "react";
import LeaderboardTable from "../components/leaderboard/LeaderboardTable";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/users/leaderboard"
        );
        if (!response.ok) throw new Error("Failed to fetch leaderboard");
        const data = await response.json();
        setLeaderboard(data);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Leaderboard</h1>
      <LeaderboardTable leaderboard={leaderboard} />
    </div>
  );
};

export default Leaderboard;
