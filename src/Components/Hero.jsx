import Typed from "react-typed";

const Main = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] font-semibold p-2">
          Growing your business is hard. Financing it shouldn<span>&#39;</span>t
          be.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 mb-3">
          Grow With Data
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-slate-500 mb-4">
            Fast , Flexible , Financing for{" "}
            <Typed
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto p-3 text-black ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Main;
