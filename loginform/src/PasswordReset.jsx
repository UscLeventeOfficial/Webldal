import "./App.css";
import EmailIcon from "./components/icons/EmailIcon";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Text from "./components/ui/Text";

const PasswordReset = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-700">
      <div className="bg-white p-12 w-92 max-w-lg rounded-lg shadow-lg m-10 text-center">
        <h2 className="text-purple-700 text-2xl mb-8 font-bold">Reset your password</h2>
        <form>
          <Input icon={EmailIcon} placeholder={"Email"} type={"email"}/>
          <Button text={"Reset"} type={"submit"} design={"mt-3"}/>
          <Text text2={"Back"} link={"/login"}/>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
