import { Link } from "react-router-dom";
const Text = ({ link, text, text2, design}) => {
        return (
        <p className={`mt-4 ${design}`}>
        {text}
        <Link
          to={link}
          className="text-purple-600 font-bold hover:underline"
        >
          {" "}
          {text2}
        </Link>
      </p>
    );
  };
  
  export default Text;