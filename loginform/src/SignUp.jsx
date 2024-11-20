import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "./components/icons/UserIcon";
import EmailIcon from "./components/icons/EmailIcon";
import PasswordIcon from "./components/icons/PasswordIcon";
import Input from "./components/ui/Input";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-700">
      <div className="bg-white p-8 w-100 rounded-lg shadow-lg text-center">
        <h2 className="text-purple-700 text-2xl mb-8 font-bold">Sign Up</h2>
        <form>
          <Input
            placeholder={"Username"}
            type={"text"}
            icon={UserIcon}
            design={""}
          />
          <Input placeholder={"Email"} type={"email"} icon={EmailIcon} />
          <Input
            placeholder={"Password"}
            type={"password"}
            icon={PasswordIcon}
          />

          <button
            type="submit"
            class="btn mt-5 bg-purple-600 text-white hover:bg-purple-700"
          >
            Sign Up
          </button>
          <p className="mt-4">
            Have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-bold hover:underline"
            >
              Log in here!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
