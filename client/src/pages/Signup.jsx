import React from "react";
import {
  SignUp, 
} from "@clerk/clerk-react";

export const Signup = () => {
  return(
    <div className="flex m-7  justify-center">
      
      <SignUp redirectUrl="/dashboard" path="/signup"  routing="path"  signInAfterSignUp={false} />
      {/* OR if you want only SignIn */}
       {/* <SignIn redirectUrl="/dashboard" /> */}
    </div>
  )
};
