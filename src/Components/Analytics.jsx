import laptop from "../assets/laptop.jpg";
import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img src={laptop} alt="" className="w-[500px] mx-auto my-4 " />
          <div className="flex flex-col justify-center">
            <motion.p
              className="text-[#00df98] font-bold"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              DATA ANALYTICS DASHBOARD
            </motion.p>
            <motion.h1
              className="text-black md:text-4xl sm:text-3xl  font-bold text-2xl py-2"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              Manage Data Analytics Centrally
            </motion.h1>
            <motion.p
              className="font-md  mx-auto"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              Unlock the power of data with our cutting-edge analytics
              solutions. Transform raw info into actionable insights, drive
              data-driven decisions, and stay ahead of the competition. Our
              expert team leverages advanced algorithms and visualizations to
              help you make sense of your data. Start harnessing the potential
              of data today.
            </motion.p>
            <motion.button className="rounded-2xl border-2 border-dashed border-black bg-[#00df98] px-1 py-3 font-semibold  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none w-[150px] my-2 md:mx-[0px] mt-5">
              Get started
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
