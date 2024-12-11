const PrevButton = ({ onClick, design }) => {
  return (
    <button
      onClick={onClick}
      class={`stext-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md flex items-center ${design}`}
    >
      Next
    </button>
  );
};

export default PrevButton;
