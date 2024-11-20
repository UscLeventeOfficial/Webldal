import "./App.css";
import React from "react";
import UserIcon from "./components/icons/UserIcon";
import EmailIcon from "./components/icons/EmailIcon";
import PasswordIcon from "./components/icons/PasswordIcon";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import Text from "./components/ui/Text"
import NoAccount from "./components/ui/NoAccount";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-700">
    <div className="bg-white p-12 w-92 max-w-lg rounded-lg shadow-lg m-10 text-center">
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
          <Button text={"Sign Up"} type={"submit"}/>
          <Text design={"ml-10 mr-10"} text={"Have an account?"} link={"/login"} text2={"Sign in here!"}/>
          <NoAccount text={"<Continue without an account>"} link={"/"}/>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
