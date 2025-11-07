import React, { useContext } from "react";
import { UserDetailContext } from "../context/UserContext";
import { Trash2 } from "lucide-react"; // delete icon

export default function UserDetailCard({ singleUser }) {

  const [userDetails, setuserDetails] = useContext(UserDetailContext);
  const { id, name, email, phone, profileImage } = singleUser;

  const deleteUser = (id)=>{
      let filterData = userDetails.filter((d)=>d.id !== id);

      setuserDetails(filterData)

  }

  return (
    <div className="relative bg-[#111] text-white rounded-2xl shadow-lg p-6 w-80 border border-gray-800 m-4 hover:scale-105 transition-transform duration-300">
      {/* Delete Icon */}
      <button onClick={()=>{deleteUser(id)}} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-200">
        <Trash2 size={20} />
      </button>

      {/* Profile Image */}
      <div className="flex flex-col items-center mb-4">
        <img
          src={profileImage || "https://plus.unsplash.com/premium_photo-1668902223961-e603b1188337?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-[#C9FF2F] mb-3"
        />
        <h2 className="text-xl font-semibold text-[#C9FF2F]">{name}</h2>
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
