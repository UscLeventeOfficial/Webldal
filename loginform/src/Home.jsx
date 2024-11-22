import "./App.css";
import React from "react";
import Header from "./components/ui/Header";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-indigo-700 flex flex-col justify-center">
      <Header />
      <h1 className="flex justify-center font-bold text-3xl text-white mt-4 animate-fade-in">
        Üdvözöllek az Usc weboldalon!
      </h1>
      <div className="flex justify-center mt-4">
        <iframe
          className="border-4"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-rqnSoa_42w?si=8arbW5Rr6ja0tIRL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md h-1/2 mt-auto mx-4 mb-10"></div>
    </div>
  );
};

export default HomePage;
