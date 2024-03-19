import React from "react";
import { FaEye } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

import { RiUserFollowFill } from "react-icons/ri";
import { SlUserFollowing } from "react-icons/sl";
import { RiGitRepositoryFill } from "react-icons/ri";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { formatMemberSince } from "../utils/functions";
import { formatDate } from "../utils/functions";
import LikeProfile from "./LikeProfile";

// userProfile
const ProfileInfo = ({userProfile}) => {        
  // const userProfile = {
  //   avatar_url: "https://avatars.githubusercontent.com/u/148258145?v=4",
  //   bio: "abcd1234",
  //   email: "abcd@gmail.com",
  //   followers: 100,
  //   following: 200,
  //   html_url: "github url",
  //   location: "Nagpur, Italy",
  //   name: "abcd 1234",
  //   public_gists: 100,
  //   public_repos: 200,
  //   twitter_username: "abcd",
  //   login: "abcd",
  // };

  const memberSince = formatMemberSince(userProfile?.created_at);

  return (
    <div className="lg:w-5/12 w-full flex flex-col gap-2 lg:sticky md:top-10">
      <div className="bg-glass rounded-lg p-4 ">
        <div className="flex gap- items-center mb-2">
          {/* User Avatar */}
          <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
            <img
              src={userProfile?.avatar_url}
              className="rounded-md w-24 h-24 mb-2 mr-6"
              alt="Avatar"
            />
          </a>

          {/* View on GitHub */}
          <div className="flex gap-2 items-center flex-col ml-2">

          <LikeProfile userProfile={userProfile}/>
          
            <a
              href={userProfile?.html_url}
              target="_blank"
              rel="nonrferrer"
              className="bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border-blue-400 flex items-center gap-2"
            >
              <FaEye size={16} />
              View on Github
            </a>
          </div>
        </div>
  
        {/* User Profile */}
        {userProfile?.bio ? (
          <div className="flex items-center gap-2">
            <TfiThought />
            <p className="text-sm">{userProfile?.bio.substring(0, 60)}...</p>
          </div>
        ) : null}

        {/* Location */}
        {userProfile?.location ? (
          <div className="flex items-center gap-2">
            <CiLocationOn />
            {userProfile?.location}
          </div>
        ) : null}

        {/* Twitter username */}
        {userProfile?.twitter_username ? (
          <a
            href="https://twitter.com/${userProfile.twitter_username}"
            target="_blank"
            rel="nonreferrer"
            className="flex items-center gap-2"
          >
            <RiTwitterXFill />
            {userProfile?.twitter_username}
          </a>
        ) : null}

       {/* member since */}
       <div className="my-2">
       <p className="text-gray-600 font-bold text-sm">Member Since</p>
       <p  className="">{memberSince}</p>
       </div>

        {/* email-address */}
        {userProfile?.email ? (
          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">Email Address</p>
            <p className="">{userProfile?.email}</p>
          </div>
        ) : null}

        {/* Full Name */}
        {userProfile?.name ? (
          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">Full Name</p>
            <p className="">{userProfile?.name}</p>
          </div>
        ) : null}   

        {/* Username */}
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Username</p>
          <p className="">{userProfile?.login}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mx-1 ">
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
            <RiUserFollowFill className="w-5 h-5 text-blue-800"/>
            <p className="text-xs">Followers:{userProfile?.followers}</p>
        </div>

        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
           <SlUserFollowing  className="w-5 h-5 text-blue-800"/>
           <p className="text-xs">Following:{userProfile?.following}</p>
        </div>

        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
           <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
           <p className="text-xs">Public Repos:{userProfile?.public_repos}</p>
        </div>

        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryCommitsFill  className="w-5 h-5 text-blue-800"/>
          <p className="text-xs">Public Gists:{userProfile?.public_gists}</p>
        </div>
      </div>
    </div>
  );    
};

export default ProfileInfo;  
