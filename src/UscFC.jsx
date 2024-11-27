import Header from "./components/ui/Header";
import HomeWelcome from "./components/ui/HomeWelcome";
import UscFcText from "./components/ui/UscFcText";

const UscFC = () => {
  return (
    <div className="min-h-screen bg-indigo-700 flex flex-col">
      <Header />
      <HomeWelcome text={"Fő csatornám: Usc FC"} />
      <UscFcText />
    </div>
  );
};

export default UscFC;
