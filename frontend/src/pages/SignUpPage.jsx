import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleloginOrSignupWithGithub } from "../lib/function";

export const SignUpPage = () => {

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div className="w-full rounded-lg shadow bg-glass md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 -space-y-4 md:space-y-6 sm:p-8 ">
          <h1 className="font-bold text-xl md:text-2xl py-2 text-center">
            Create Account
          </h1>
          <button
            type="button"
            className="bg-[#24292F] hover:bg-[#24292F]/90 flex justify-center items-center w-full text-center rounded-lg font-medium focus:ring-4 focus:ring-[#24292F]/50 gap-2 p-2"
            onClick={handleloginOrSignupWithGithub}
          >
            <FaGithub className="w-5 h-5" />
            Sign Up With GitHub
          </button>

          <p className="text-gray-300">
            By Signing Up, you Will Unlock All features of the App.
            <span>
              <FaUnlock className="w-4 h-4 inline mx-1" />
            </span>
          </p>

          <p className="text-sm font-light text-gray-400">
            Already have an Account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
