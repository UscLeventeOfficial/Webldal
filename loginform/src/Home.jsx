import "./App.css";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-indigo-700 flex flex-col">
      <div className="navbar bg-base-100">
        <div className="flex-1 ">
          <a href="/home" className="btn btn-ghost text-3xl">
            UscLevente
          </a>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar mr-4"
          >
            <div className="w-16 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://yt3.ggpht.com/3EyMlZgovI8Qio6ySokEJW33fqINJGuZJs3jcoaQtQwxu6cJJM9tIFBV3C4hVZR3dEtzbla5LY4=s176-c-k-c0x00ffffff-no-rj-mo"
              />
            </div>
          </div>
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-16 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://yt3.googleusercontent.com/YwSr7lrlXsmq98T_SgXt64e9GfKa2z7xr8joKdflrfKZNb9xCfwd4nxDNal05VgpSM6YC4MU=s160-c-k-c0x00ffffff-no-rj"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow">
        <div
          id="box"
          className="relative bg-white p-8 m-8 w-[950px] h-auto rounded-lg shadow-lg text-center inner-outline"
        >
          <div className="flex space-x-4 items-start h-full">
            <div id="szoveg" className="text-left w-1/2">
              kajysuiasi
              <br />
              sjahj
              <br />
              kjashcaghsuaj
              <br />
              kjashcaghsuaj
            </div>
            <div id="video" className="w-1/2 relative">
              <div className="relative pb-[56.25%] w-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/yvpyf76eNHk?si=xYgCOapatMxnpWhE"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
