import React, { useState } from "react";
import Footer from "./Footer";
import HomeWelcome from "./HomeWelcome";
import NewHeader from "./NewHeader";
import channels from "../../Csatornak";
import PrevButton from "./PrevButton";

const NewHome = () => {
  const UscFCText = channels[0].text;
  const UscExtraText = channels[1].text;
  const UscFCLogo = channels[0].logo;
  const UscExtraLogo = channels[1].logo;
  const FCLink = channels[0].link;
  const ExtraLink = channels[1].link;
  const [channel, setChannel] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-600 to-indigo-800 text-white">
      <NewHeader />
      <div className="flex-grow flex flex-col items-center justify-center">
        <HomeWelcome text={"Üdvözöllek az Usc Weboldalon!"} />
        <div className="flex justify-center mt-6">
          <div className="bg-white p-8 rounded-2xl shadow-2xl mx-3 w-full sm:w-full md:w-2/3 lg:w-1/2 flex flex-col items-center transition-transform transform hover:scale-105 hover:duration-1000">
            <a
              href={channel === 0 ? FCLink : ExtraLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <img
                alt="logo"
                className={`w-28 h-28 rounded-full shadow-lg border-4 transition-transform duration-300 ease-in-out ${
                  channel === 0 ? "border-red-600" : "border-indigo-600"
                } group-hover:scale-110`}
                src={channel === 0 ? UscFCLogo : UscExtraLogo}
              />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <div className="bg-gray-100 p-4 rounded-xl w-full mt-6 mb-6 shadow-inner transition-transform transform hover:scale-105 duration-500">
              <pre className="font-poppins font-medium break-words whitespace-pre-wrap text-center text-lg text-gray-700 transition-transform">
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
