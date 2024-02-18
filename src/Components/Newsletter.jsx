import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <motion.div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips and tricks to optimise your flow?
          </h1>
          <p>Subscribe to our newsletter & stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-[400px] rounded-md p-2 text-black    "
            />
            <button className="bg-[#00df98] text-black p-2 rounded-md font-semibold m-4 w-[150px] ">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
