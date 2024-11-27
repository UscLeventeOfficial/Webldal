import Footer from "./Footer";

const UscFcText = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex flex-grow justify-center mt-4 gap-40">
        <div
          id="Bal oldali doboz"
          className="bg-white p-6 rounded-lg shadow-md h-1/2 w-full sd:w-3/4 mx-3 mb-6 lg:w-1/4"
        >
          <div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col gap-5">
                <h1 className="flex justify-center font-bold text-3xl">
                  Téma:
                </h1>
                <p className="flex font-semibold justify-center mt-4">
                  Foci, legfőképp EA FC 25
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="Jobb oldali doboz"
          className="bg-white p-6 rounded-lg shadow-md h-1/2 w-full sd:w-3/4 mx-3 mb-6 lg:w-1/4"
        >
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col gap-5">
              <h1 className="flex justify-center font-bold text-3xl">Téma:</h1>
              <p className="flex font-semibold justify-center mt-4">
                Foci, legfőképp EA FC 25
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UscFcText;
