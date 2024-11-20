const Button = ({ type, text, }) => {
    return (
      <button
      type={type}
      class="btn mt-5 bg-purple-600 text-white hover:bg-purple-700"
    >
      {text}
    </button>
    );
  };
  
  export default Button;