import { UserButton } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { Addinterview } from "./Addinterview";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const { getToken } = useAuth(); 
  const [interviews, setInterviews] = useState([]); 
  const navigate=useNavigate()

  useEffect(() => {
    const getInterviews = async () => {
      const token = await getToken();
      try {
        const res = await axios.get(
          "http://localhost:3000/api/mock/user",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        
        console.log(res.data);
        setInterviews(res.data.data); 
        
        
      } catch (error) {
        console.log(error);
      }
    };

    getInterviews();
  }, [getToken]);

  return (
    <>
      <div className="p-10 pt-5 flex flex-col gap-1">
        <h2 className="text-3xl font-bold text-indigo-700">Dashboard</h2>
        <p className="text-gray-500">
          Create and Start Your AI Mock Interview
        </p>
      </div>

      <div>
        <Addinterview />
      </div>

      <div className="p-4">
        <h2 className="text-black font-bold text-xl mb-4">
          Previous Mock Interview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {interviews.map((item) => (
            <div 
              key={item._id}
              className="border rounded-lg p-4 shadow-sm"
            >
              <h3 className="font-bold text-indigo-700">
                {item.jobPosition}
              </h3>
              
              <p className="text-gray-500">
                {item.experience} Years of Experience
              </p>
              
              <p className="text-xs text-gray-400">
                Created At: {new Date(item.createdAt).toLocaleDateString()}
              </p>

              <div className="flex justify-between mt-3">
                <button className="border px-3 py-1 rounded text-black font-bold cursor-pointer">
                  Feedback
                </button>
                <button className="bg-indigo-600 text-white px-3 py-1 rounded cursor-pointer" onClick={() => navigate(`/interview/${item.mockId}`)}>
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>

        
        {interviews.length === 0 && (
          <p className="text-gray-400 mt-4">No interviews found</p>
        )}
      </div>
    </>
  );
};
