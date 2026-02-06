import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./homex/Home";
import Courses from "./Courses/Courses";
import Contacts from "./Contact/Contacts";
import Abouts from "./About/Abouts";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
