import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-3xl  font-bold">
          UscLevente
        </a>
        <div className="ml-6 flex gap-6">
          <button className="font-bold btn btn-ghost text-2xl">
            <Link to="/login">Log in</Link>
          </button>
          <button className="font-bold btn btn-ghost text-2xl">
            <Link to="/signup">Sign up</Link>
          </button>
        </div>
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
              src="https://yt3.ggpht.com/YwSr7lrlXsmq98T_SgXt64e9GfKa2z7xr8joKdflrfKZNb9xCfwd4nxDNal05VgpSM6YC4MU=s176-c-k-c0x00ffffff-no-rj-mo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
