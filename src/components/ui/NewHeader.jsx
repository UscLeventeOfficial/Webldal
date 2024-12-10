import { Link } from "react-router-dom";

const NewHeader = () => {
  const page = window.location.href;
  return (
    <div className="flex justify-between items-center navbar bg-gray-600 text-white px-4 py-2">
      <div className="flex items-center gap-2">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 md:w-16 rounded-full">
            <img
              alt="Usc Extra"
              src="https://yt3.googleusercontent.com/YwSr7lrlXsmq98T_SgXt64e9GfKa2z7xr8joKdflrfKZNb9xCfwd4nxDNal05VgpSM6YC4MU=s160-c-k-c0x00ffffff-no-rj"
            />
          </div>
        </div>
        <div role="button" className="btn btn-ghost">
          <Link to="/NewHome">
            <p className="s text-3xl md:text-3xl font-bold">Usc</p>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex flex-row justify-center gap-4">
        <p role="button" className="btn btn-ghost font-bold text-3xl">
          Home
        </p>
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="btn btn-ghost font-bold text-3xl cursor-pointer"
          >
            Csatornáim
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-gray-100 rounded-lg w-32 text-black font-semibold"
          >
            <li>
              <Link to="/usc-fc">Usc FC</Link>
            </li>
            <li>
              <Link to="/usc-extra">Usc Extra</Link>
            </li>
          </ul>
        </div>
        <p role="button" className="btn btn-ghost font-bold text-3xl">
          Rólam
        </p>
      </div>

      <div className="hidden md:flex gap-4 items-center">
        <Link
          to="/login"
          className="btn btn-outline btn-sm text-white border-white hover:bg-white hover:text-gray-600"
        >
          Log in
        </Link>
        <Link to="/signup" className="btn btn-primary btn-sm text-white">
          Sign up
        </Link>
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
            stroke="white"
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
          className="menu gap-2 menu-compact text-black font-poppins font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-lg w-32"
        >
          <li>
            <Link to={page}>Home</Link>
          </li>
          <li>
            <Link to={page}>Rólam</Link>
          </li>
          <li>
            <Link to={page}>Usc FC</Link>
          </li>
          <li>
            <Link to={page}>Usc Extra</Link>
          </li>

          <li className="text-indigo-400">
            <Link to="/login">Log in</Link>
          </li>
          <li className="text-indigo-800">
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewHeader;
