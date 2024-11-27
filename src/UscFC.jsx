import Header from "./components/ui/Header";
import HomeWelcome from "./components/ui/HomeWelcome";
import UscFcText from "./components/ui/UscFcText";

const UscFC = () => {
  return (
    <div className="min-h-screen bg-indigo-700 flex flex-col">
      <Header />
      <HomeWelcome text={"Fő csatornám: Usc FC"} />
      <div className="flex justify-center mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md h-1/2 w-full sd:w-3/4 mx-3 mb-6 lg:w-1/2">
          <UscFcText />
        </div>
      </div>
    </div>
  );
};

export default UscFC;
