import "./App.css";
import Text from "./components/ui/Text";

const LinkSent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-700">
      <div className="bg-white p-12 w-92 max-w-lg rounded-lg shadow-lg m-10 text-center">
        <h2 className="text-purple-700 text-2xl mb-8 font-bold">Link has been sent!</h2>
        <form>
          <Text text={"Check your email!"} design={"font-bold"}/>
          <Text text2={"Back"} link={"/login"}/>
        </form>
      </div>
    </div>
  );
};

export default LinkSent;