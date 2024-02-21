import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <motion.div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2">
          <motion.h1
            className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            Want tips and tricks to optimise your flow?
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            Subscribe to our newsletter & stay up to date
          </motion.p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <motion.input
              type="email"
              placeholder="Enter your Email"
              className="w-[400px] rounded-md p-2 text-black"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            />
            <motion.button
              className="bg-[#00df98] text-black p-2 rounded-md font-semibold m-4 w-[150px]"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              Notify Me
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
