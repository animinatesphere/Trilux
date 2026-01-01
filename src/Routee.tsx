// import React from "react";
import { Route, Routes } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
// import { Routes } from "react-router-dom";

const Routee = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
    </>
  );
};

export default Routee;
