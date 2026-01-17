import { SignIn } from "@clerk/clerk-react";

export  function Signin() {
  return (
    <>
    <div className="flex justify-center  m-7 p-5">
     <SignIn
      path="/signin"
      routing="path"
      redirectUrl="/dashboard"
      afterSignInUrl="/dashboard"
      
    />
    </div>
    </>
    
  );
}
