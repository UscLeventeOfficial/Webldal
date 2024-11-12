import "./App.css";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-indigo-700">
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
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
