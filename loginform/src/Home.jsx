import "./App.css";
import React from "react";
import Header from "./components/ui/Header";
import HomeText from "./components/ui/HomeText";
import HomeVideo from "./components/ui/HomeVideo";
import HomeWelcome from "./components/ui/HomeWelcome";
import YoutubeIcon from "./components/icons/YoutubeIcon";
import DonateHome from "./components/ui/DonateHome";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-indigo-700 flex flex-col">
      <Header />
      <HomeWelcome />
      <HomeVideo />
      <div className="flex justify-center mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md h-1/2 w-1/2">
          <HomeText />
          <div className="flex justify-center mt-2 gap-14">
            <YoutubeIcon link={"https://www.youtube.com/@Usc_FC"} />
            <DonateHome />
            <YoutubeIcon
              link={"https://www.youtube.com/@Usc_official"}
              design={"text-blue-500"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
