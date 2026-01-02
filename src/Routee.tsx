// import React from "react";
import { Route, Routes } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Login from "./user/login/Login";
import UserDashboard from "./user/page/UserDashboard";
// import Login from "../src/user/login/Login";
// import { Routes } from "react-router-dom";

const Routee = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/onboarding" element={<Login />} />
        <Route path="/User-dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
};

export default Routee;
