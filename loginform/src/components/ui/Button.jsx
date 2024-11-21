const Button = ({ type, text, }) => {
    return (
      <button
      type={type}
      className="btn bg-purple-600 text-white hover:bg-purple-700"
    >
      {text}
    </button>
    );
  };
  
  export default Button;