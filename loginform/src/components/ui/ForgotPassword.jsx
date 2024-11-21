import { Link } from "react-router-dom";

const ForgotPassword = ({ link, text }) => {
  return (
    <p className="mt-4 mb-4 ml-0.5 flex">
      <Link to={link} className="text-purple-600 font-bold hover:underline">
        {text}
      </Link>
    </p>
  );
};

export default ForgotPassword;
