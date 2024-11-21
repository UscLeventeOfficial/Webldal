import "./App.css";
import React from "react";
import Input from "./components/ui/Input";
import EmailIcon from "./components/icons/EmailIcon";
import PasswordIcon from "./components/icons/PasswordIcon";
import Button from "./components/ui/Button";
import Text from "./components/ui/Text";
import NoAccount from "./components/ui/NoAccount";
import RememberMe from "./components/ui/RememberMe";
import ForgotPassword from "./components/ui/ForgotPassword";

const SigninPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-700">
      <div className="bg-white p-12 w-92 max-w-lg rounded-lg shadow-lg m-10 text-center">
        <h2 className="text-purple-700 text-2xl mb-8 font-bold">Sign In</h2>
        <form>
          <Input icon={EmailIcon} placeholder={"Email"} type={"email"} />
          <Input
            icon={PasswordIcon}
            placeholder={"Password"}
            type={"password"}
          />
          <ForgotPassword
            text={"Forgot your password?"}
            link={"/resetpassword"}
          />
          <RememberMe text={"Remember me!"} type={"checkbox"} />
          <Button type={"submit"} text={"Sign In"} />
          <Text
            text={"Don't have an account?"}
            link={"/signup"}
            text2={"Create one here!"}
          />
          <NoAccount text={"<Continue without an account>"} link={"/"} />
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
