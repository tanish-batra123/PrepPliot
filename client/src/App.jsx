import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Signup } from "./pages/Signup";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { Dashboard } from "./pages/Dashboard";
import { Signin } from "./pages/signin";
import { Question } from "./pages/Question";
import { Upgrad } from "./pages/Upgrad";
import { Home } from "./pages/Home";
import {InterviewRoom} from "./pages/InterviewRoom";
import { StartInterview } from "./pages/StartInterview";
// import { Skeleton } from "./components/ui/skeleton";

export const App = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-gray-500"></div>
      </div>
    );
  }
  
  return (
   <Routes>
  <Route path="/" element={<Landing />}>

    <Route index element={<Home />} />

    <Route
      path="dashboard"
      element={
        <>
          <SignedIn><Dashboard/></SignedIn>
          <SignedOut><Navigate to="/signin"/></SignedOut>
        </>
      }
    />

    <Route path="question" element={<Question />} />
    <Route path="upgrad" element={<Upgrad />} />
    <Route path="/interview/:mockId" element={<InterviewRoom />} />
    <Route path="/start/:mockId" element={<StartInterview/>}/>

  </Route>

  <Route path="/signup/*" element={<Signup />} />
  <Route path="/signin/*" element={<Signin />} />
 

</Routes>

  );
};
