import { Link } from "react-router-dom";
const NoAccount = ({ link, text}) => {
        return (
        <Link to={link}>
        <p className="mt-4 hover:scale-110 hover:tracking-wider text-purple-600 font-bold hover:underline transition-transform transition-all duration-500 ease-in-out">
        {text}
        </p>
        </Link>
    );
  };
  
  export default NoAccount;