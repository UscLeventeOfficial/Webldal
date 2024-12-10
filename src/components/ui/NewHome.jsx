import React, { useState } from "react";
import Footer from "./Footer";
import HomeWelcome from "./HomeWelcome";
import NewHeader from "./NewHeader";
import channels from "../../Csatornak";
import PrevButton from "./PrevButton";

const NewHome = () => {
  const UscFCText = channels[0].text;
  const UscExtraText = channels[1].text;
  const [text, setText] = useState(0);
  const UscFCLogo = channels[0].logo;
  const UscExtraLogo = channels[1].logo;
  const [logo, setLogo] = useState(0);

  return (
    <div
      className="min-h-screen flex flex-col bg-indigo-600 font-roboto"
      style={{ backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <NewHeader />
      <div className="flex-grow justify-end">
        <HomeWelcome text={"Üdvözöllek az Usc Weboldalon!"} />
        <div className="flex justify-center mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md mx-3 w-full sm:w-full md:w-2/3 lg:w-1/2 flex flex-col items-center">
            <img
              alt="logo"
              className="w-24 rounded-full"
              src={logo === 0 ? UscFCLogo : UscExtraLogo}
            ></img>
            <pre className="mb-4 mt-4 font-semibold break-words whitespace-pre-wrap w-full text-base font-poppins text-gray-800 flex justify-center">
              {text === 0 ? UscFCText : UscExtraText}
            </pre>
            <div className="flex gap-2">
              <PrevButton
                onClick={() => {
                  setText(text + 1);
                  if (text >= 1) {
                    setText(0);
                  }
                  setLogo(logo + 1);
                  if (logo >= 1) {
                    setLogo(0);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewHome;
