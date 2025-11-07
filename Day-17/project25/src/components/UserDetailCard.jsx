import React, { useContext } from "react";
import { UserDetailContext } from "../context/UserContext";

export default function UserDetailCard({singleUser}) {
    
    const {name,email,phone,profileImage} = singleUser;


  return (
    <div className="bg-[#111] text-white rounded-2xl shadow-lg p-6 w-80 border border-gray-800 m-4 hover:scale-105 transition-transform duration-300">
      {/* Profile Image */}
      <div className="flex flex-col items-center mb-4">
        <img
          src={profileImage}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-[#C9FF2F] mb-3"
        />
        <h2 className="text-xl font-semibold text-[#C9FF2F]">
          {name}
        </h2>
      </div>

      {/* Details */}
      <div className="space-y-3">
        <div className="flex justify-between border-b border-gray-700 pb-1">
          <span className="text-gray-400 text-sm">Name</span>
          <span className="font-medium text-sm">{name}</span>
        </div>
        <div className="flex justify-between border-b border-gray-700 pb-1">
          <span className="text-gray-400 text-sm">Phone</span>
          <span className="font-medium text-sm">{phone}</span>
        </div>
        <div className="flex justify-between border-b border-gray-700 pb-1">
          <span className="text-gray-400 text-sm">Email</span>
          <span className="font-medium text-sm">{email}</span>
        </div>
      </div>
    </div>
  );
}
