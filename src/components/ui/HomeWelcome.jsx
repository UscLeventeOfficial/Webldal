const HomeWelcome = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 mx-4">
      <h1 className="text-shadow text-4xl font-extrabold text-white animate-fade-in text-center font-poppins shadow-lg bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 px-6 py-4 rounded-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
        {text}
      </h1>
    </div>
  );
};

export default HomeWelcome;
