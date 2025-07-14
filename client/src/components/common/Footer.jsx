import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white text-center p-4">
      <p>
        &copy; {new Date().getFullYear()} Leaderboard Pro. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
