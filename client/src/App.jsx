import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AddUser from "./pages/AddUser";
import ClaimHistory from "./pages/ClaimHistory";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/history" element={<ClaimHistory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
