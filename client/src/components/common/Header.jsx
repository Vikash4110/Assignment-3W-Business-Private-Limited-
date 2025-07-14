import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Leaderboard Pro</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold border-b-2 border-white"
                    : "hover:text-indigo-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/leaderboard"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold border-b-2 border-white"
                    : "hover:text-indigo-200"
                }
              >
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-user"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold border-b-2 border-white"
                    : "hover:text-indigo-200"
                }
              >
                Add User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold border-b-2 border-white"
                    : "hover:text-indigo-200"
                }
              >
                History
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
