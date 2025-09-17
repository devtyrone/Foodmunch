import React from "react";
import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <SignUp path="/signup" routing="path" signInUrl="/login" />
    </div>
  );
};

export default Signup;
