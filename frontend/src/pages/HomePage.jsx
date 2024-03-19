import React, { useState, useEffect, useCallback } from "react";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

import { useAuthContext } from "../context/AuthContext";


export const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("recent");
  const {authUser}= useAuthContext();

  console.log("Home Page wala AuthUser",authUser)
  
  const getUserProfileAndRepos = useCallback(async(username = authUser.username) => {
      setLoading(true);
      try {
        const res = await fetch(`/api/users/profile/${username}`)
        const {repos, userProfile}= await res.json();
        
        repos.sort((a, b)=>new Date(b.created_at) - new Date(a.created_at));
        setRepos(repos);
        setUserProfile(userProfile)
     
        return { userProfile, repos };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },[]
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    console.log(username);
    console.log(e);
    e.preventDefault();

    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    const { userProfile, repos } = await getUserProfileAndRepos(username);
    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
    setSortType("recent");
  };

  const onSort=(sortType)=>{
    if(sortType==="recent"){
      repos.sort((a, b)=>new Date(b.created_at) - new Date(a.created_at));
    }
    else if(sortType==="stars"){
      repos.sort((a, b)=>b.stargazers_count - a.stargazers_count);
    }
    else if(sortType==="forks"){
      repos.sort((a, b)=>b.forks_count - a.forks_count);
    }

    setSortType(sortType);
    setRepos([...repos]);
  }

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {repos.length>0 && <SortRepos sortType={sortType} onSort={onSort}/>}
      <div className="flex gap-4 flex-col lg:flex-row justify-center ">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};


{
  /* <div className="flex gap-4 flex-col lg:flex-row justify-center ">
                 {userProfile && !loading && <ProfileInfo userProfile={userProfile}/>}
                 {repos.length>0 && !loading && <Repos repos={repos}/>}
                 {loading && <Spinner/>} */
}

//    { <div className="flex gap-4 flex-col lg:flex-row justify-center ">
//    <ProfileInfo userProfile={userProfile}/>
//   <Repos repos={repos}/>
//   <Spinner/>
// </div>
// }
