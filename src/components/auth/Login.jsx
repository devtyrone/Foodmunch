import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <SignIn path="/login" routing="path" signUpUrl="/signup" />
    </div>
  );
};

export default Login;
