import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Search } from "lucide-react";
import Login from "./Login";
import Signup from "./Signup";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <div className="navbar bg-base-100 text-base-content shadow-md px-6">

        {/* LEFT */}
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold text-primary">
            BookStore
          </Link>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/course" className="hover:text-primary">Course</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
        </div>

        {/* RIGHT */}
        {/* 🔑 ONLY CHANGE IS ml-12 */}
        <div className="flex items-center gap-4 ml-12">

          {/* SEARCH */}
          <div className="relative hidden sm:block">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
            />
            <input
              type="text"
              placeholder="Search books"
              className="input input-bordered h-9 pl-9 w-48"
            />
          </div>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            title="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* SIGNUP */}
          <button
            onClick={() => document.getElementById("signup_modal").showModal()}
            className="btn btn-outline btn-primary"
          >
            Signup
          </button>

          {/* LOGIN */}
          <button
            onClick={() => document.getElementById("login_modal").showModal()}
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </div>

      {/* MODALS */}
      <Login />
      <Signup />
    </>
  );
}

export default Navbar;
