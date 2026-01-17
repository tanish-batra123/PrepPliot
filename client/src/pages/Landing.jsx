import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IoReorderThreeOutline } from "react-icons/io5";
import "../pages/landing.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export const Landing = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between p-4 m-2 border shadow-md rounded-lg">
        {/* Logo */}
        <div className="w-24 h-24">
          <img
            src="companyLogo.png"
            alt="Company Logo"
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <ul className="Navigation-links flex gap-6 items-center pr-30 ">
          <li>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/question"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Question
            </Link>
          </li>
          <li>
            <Link
              to="/upgrad"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Upgrad
            </Link>
          </li>
          <li>
            <Link
              to="/howwork"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              How it Works
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <button className="bg-indigo-500 text-white px-4 py-1 rounded hover:bg-indigo-600">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* mobile nav */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setIsopen(!isOpen);
            }}
          >
            {<IoReorderThreeOutline size={30}/>}
          </button>
        </div>

        {isOpen && (
          <ul className="  absolute top-20 right-4 bg-white shadow-md rounded-md w-40 flex flex-col gap-4 p-4 md:hidden">
            <li>
              <Link
                to="dashboard"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsopen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="question"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsopen(false)}
              >
                Question
              </Link>
            </li>
            <li>
              <Link
                to="upgrad"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsopen(false)}
              >
                Upgrad
              </Link>
            </li>

            <li>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 w-full">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
            </li>

          </ul>
        )}

       
      </nav>

      <main className="p-4">
        <Outlet />
      </main>
      
    </>
  );
};
