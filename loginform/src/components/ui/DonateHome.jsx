const DonateHome = ({ link, text }) => {
  return (
    <a
      href="https://www.buymeacoffee.com/UscLevente"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png"
        alt="Buy Me A Coffee"
        className="h-8 transition duration-300 hover:shadow-lg hover:shadow-yellow-500"
      />
    </a>
  );
};

export default DonateHome;
