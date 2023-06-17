import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img src={laptop} alt="" className="w-[500px] mx-auto my-4 " />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df98] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="text-black md:text-4xl sm:text-3xl  font-bold text-2xl py-2">
              Manage Data Analytics Centrally
            </h1>
            <p className="font-md  mx-auto">
              Unlock the power of data with our cutting-edge analytics
              solutions. Transform raw info into actionable insights, drive
              data-driven decisions, and stay ahead of the competition. Our
              expert team leverages advanced algorithms and visualizations to
              help you make sense of your data. Start harnessing the potential
              of data today.
            </p>
            <button className="bg-[black] w-[200px] rounded-md my-6 mx-auto p-3 text-[#00df9a] md:mx-[0px] ">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
