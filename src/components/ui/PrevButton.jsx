const PrevButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md flex items-center"
    >
      Next
    </button>
  );
};

export default PrevButton;
