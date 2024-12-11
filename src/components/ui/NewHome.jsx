import React, { useState } from "react";
import Footer from "./Footer";
import HomeWelcome from "./HomeWelcome";
import NewHeader from "./NewHeader";
import channels from "../../Csatornak";
import PrevButton from "./PrevButton";
import YoutubeIcon from "../icons/YoutubeIcon";

const NewHome = () => {
  const UscFCText = channels[0].text;
  const UscExtraText = channels[1].text;
  const UscFCLogo = channels[0].logo;
  const UscExtraLogo = channels[1].logo;
  const FCLink = channels[0].link;
  const ExtraLink = channels[1].link;
  const [channel, setChannel] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-indigo-600 groundPosition: 'center'">
      <NewHeader />
      <div className="flex-grow justify-end">
        <HomeWelcome text={"Üdvözöllek az Usc Weboldalon!"} />
        <div className="flex justify-center mt-6">
          <div className="bg-white p-8 rounded-2xl shadow-2xl mx-3 w-full sm:w-full md:w-2/3 lg:w-1/2 flex flex-col items-center transition-all duration-500 md:hover:scale-[1.02]">
            <a href={channel === 0 ? FCLink : ExtraLink} target="_blank">
              <img
                alt="logo"
                className={`w-28 rounded-full shadow-xl border border-4 transition-transform duration-500 ease-in-out ${
                  channel === 0 ? "border-red-600" : "border-indigo-600"
                } md:hover:scale-110`}
                src={channel === 0 ? UscFCLogo : UscExtraLogo}
              />
            </a>
            <div className="bg-gray-100 p-4 rounded-xl w-full mt-4 mb-6 transition-all duration-500 ease-in-out md:hover:scale-[1.02]">
              <pre className="font-poppins font-medium break-words whitespace-pre-wrap text-center text-lg text-gray-700">
                {channel === 0 ? UscFCText : UscExtraText}
              </pre>
            </div>

            <div className="flex gap-4">
              <PrevButton
                design={`relative ${
                  channel === 0
                    ? "bg-red-700 hover:bg-indigo-600"
                    : "bg-indigo-700 hover:bg-red-600"
                } transition-all duration-500 ease-in-out text-white px-6 py-2 rounded-lg`}
                onClick={() => {
                  setChannel(channel + 1);
                  if (channel >= 1) {
                    setChannel(0);
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
