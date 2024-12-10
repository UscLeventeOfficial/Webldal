import { Link } from "react-router-dom";
import Channels from "../../Csatornak";

const Header = () => {
  const UscFCLogo = Channels[0].logo;
  const UscExtraLogo = Channels[1].logo;
  return (
    <div className="navbar bg-base-100 px-4 md:px-8">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-2xl md:text-3xl font-bold">
          UscLevente
        </a>
      </div>
      <div className="flex items-center gap-2">
        <div className="md:flex items-center gap-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 md:w-16 rounded-full">
              <Link to="/">
                <img alt="Usc Extra" src={UscExtraLogo} />
              </Link>
            </div>
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 md:w-16 rounded-full">
              <Link to="/">
                <img alt="Usc FC" src={UscFCLogo} />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button className="font-bold btn btn-ghost text-xl md:text-2xl">
            <Link to="/login">Log in</Link>
          </button>
          <button className="font-bold btn btn-ghost text-xl md:text-2xl">
            <Link to="/signup">Sign up</Link>
          </button>
        </div>
        <div className="md:hidden dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu gap-2 menu-compact font-poppins font-semibold dropdown-content my-3 p-2 shadow bg-base-100 rounded-lg w-32"
          >
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
