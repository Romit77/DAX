import Typed from "react-typed";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <motion.p
          className="text-gray-200"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          Growing your business is hard. Financing it shouldn<span>&#39;</span>t
          be.
        </motion.p>
        <motion.h1
          className="bg-gradient-to-r from-blue-600 via-green-500  text-transparent bg-clip-text md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 mb-3 "
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          Grow With Data
        </motion.h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-slate-500 mb-4">
            Fast , Flexible Financing for{" "}
            <Typed
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <motion.button
          className="bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto p-3 text-black"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Main;
