import React, { useContext } from "react";
import UserDetailCard from "../components/UserDetailCard";
import { UserDetailContext } from "../context/UserContext";

const UserDetails = () => {

  const [userDetails, setuserDetails] = useContext(UserDetailContext);



  const renderData = userDetails.map((singleUser,idx)=>{
    return (
      <UserDetailCard key={idx} singleUser={singleUser} />
    )
  })


  return (
    <div className="min-h-screen bg-[#0B0B0B] flex flex-wrap justify-center items-center px-6 py-10">
          {userDetails.length > 0 ? renderData : <h1 className="text-4xl">No Data Found</h1>}
    </div>
  );
};

export default UserDetails;
