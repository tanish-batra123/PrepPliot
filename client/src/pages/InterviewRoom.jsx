import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate, useParams } from "react-router-dom";
import { IoBulbOutline } from "react-icons/io5";
import { LuWebcam } from "react-icons/lu";
import Webcam from "react-webcam";
import { useRef } from "react";

export const InterviewRoom = () => {
  const { getToken } = useAuth();
  const { mockId } = useParams();

  const [interviewdata, setinterviewdata] = useState(null);
  const [webcamEnabled, setWebcamEnabled] = useState(false);

  const navigate=useNavigate();

  useEffect(() => {
    const getDetailsById = async () => {
      try {
        const token = await getToken();
        const res = await axios.get(
          `http://localhost:3000/api/mock/${mockId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setinterviewdata(res.data.data);
      } catch (error) {
        console.error("Error fetching interview:", error);
      }
    };

    getDetailsById();
  }, [mockId, getToken]);

  if (!interviewdata)
    return <p className="text-center mt-10">Loading interview...</p>;

  const { jobPosition, jobDescription, experience} = interviewdata;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Let's Get Started
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <div className="bg-white border rounded-xl shadow-sm p-6 space-y-3">
            <p className="text-gray-700">
              <span className="font-bold">Job Position / Role:</span>{" "}
              {jobPosition}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Tech Stack:</span> {jobDescription}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Years of Experience:</span>{" "}
              {experience}
            </p>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded-xl shadow-sm p-5 space-y-3">
            <div className="flex items-center gap-3">
              <IoBulbOutline size={22} className="text-yellow-600" />
              <h4 className="text-yellow-800 font-semibold text-lg">
                Information
              </h4>
            </div>

            <p className="text-bold text-yellow-900 leading-relaxed font-medium">
              Enable your webcam and microphone to begin your AI-powered mock
              interview. You’ll be guided through a series of interview
              questions, and at the end you’ll receive a personalized
              performance report based on your responses.
            </p>

            <p className="text-md text-yellow-700 font-medium">
              NOTE: We never record your video. Webcam access can be disabled at
              any time.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md h-[320px] bg-white border-2 border-dashed rounded-xl flex flex-col items-center justify-center shadow-sm ">
            {webcamEnabled ? (
              <Webcam
                onUserMediaError={() => setWebcamEnabled(false)}
                mirrored={true}
                style={{ height: 300, width: 300 }}
              />
            ) : (
              <div className="w-full h-72 flex items-center justify-center text-gray-400">
                <LuWebcam size={100} color="black" />
              </div>
            )}

            <button
              onClick={() => setWebcamEnabled((prev) => !prev)}
              className="mb-8 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
            >
              {webcamEnabled ? "Disable Webcam" : "Enable Webcam "}
            </button>
          </div>
        </div>
        <div>
            <button className="bg-indigo-600 text-white p-3 rounded-xl border-2 cursor-pointer" onClick={()=>{navigate(`/start/${mockId}`)}}>start interview with AI</button>
          </div>
      </div>
    </div>
  );
};
