import { Link } from "react-router-dom";

const Button = ({ type, text, design}) => {
    return (
      <button
      
      type={type}
      className={`btn bg-purple-600 text-white hover:bg-purple-700 ${design}`}
    >
      
      {text}
      
    </button>
    );
  };
  
  export default Button;