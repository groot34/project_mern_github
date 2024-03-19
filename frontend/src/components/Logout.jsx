import React from "react";
import { MdLogout } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";

export default function Logout() {

  const {authUser, setAuthUser}= useAuthContext();

  const handleLogout = async()=>{
    try{
      const res = await fetch('/api/auth/logout', {credentials:"include"})
      const data= await res.json();
      console.log(data);
      setAuthUser(null);
    }catch(error){
      toast.error(error.message)
    }
  }
  
  return (
    <div>
      <img
        src={authUser.avatarUrl}
        className="w-10 h-10 flex justify-center rounded-full border border-gray-800 ml-1"
      />
      <div className="cursor-pointer flex items-center p-3 rounded-lg bg-glass mt-2 border border-gray-800 hover:bg-gray-800" onClick={handleLogout}>
        <MdLogout size={22} />
      </div>
    </div>
  );
}


