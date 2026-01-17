import { UserButton } from "@clerk/clerk-react";
import React, { useState } from "react";
import { Addinterview } from "./Addinterview";


export const Dashboard = () => {
 
  return (
    <>
      <div className="p-14 flex flex-col gap-1">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="text-gray-500">Create and Start Your AI Mock Interview</p>
      </div>
      {<Addinterview/>}

     
    </>
  );
};
