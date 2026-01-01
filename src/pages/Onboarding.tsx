// import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Onboarding 1 1 (1).png";

export default function Onboarding() {
  const options = [
    {
      label: "User",
      row: "/onboarding",
    },
    {
      label: "Hotel Management",
      row: "/vendor-login",
    },
    {
      label: "Flight Management",
      row: "/onboarding",
    },
    {
      label: "Restaurant Management",
      row: "/admin-login",
    },
    {
      label: "Rider Managment",
      row: "/admin-login",
    },
    {
      label: "Taxi Management",
      row: "/admin-login",
    },
    {
      label: "Car Rentals",
      row: "/admin-login",
    },
    {
      label: "Admin",

      row: "/admin-login",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl shadow-lg p-6 mb-4">
            <img src={logo} alt="" />
          </div>
        </div>

        {/* Button Selection */}
        <div className="space-y-4">
          {options.map((option) => {
            return (
              <button
                key={option.label}
                className="group w-full bg-white hover:bg-[#1BC1DC]  border-2 border-gray-100  rounded-2xl p-5 transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => {
                  navigate(option.row);
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-center  text-[#1BC1DC] font-inter group-hover:text-[#F2F2F2] transition-colors">
                      {option.label}
                    </h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
