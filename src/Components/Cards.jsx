import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300   ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={single}
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold ">$99</p>
          <div className="text-center font-medium">
            <p className="py-2  mx-8 mt-8">500 GB Storage</p>
            <p className="py-2  mx-8 ">1 Granted User</p>
            <p className="py-2  mx-8 ">Send files upto 2 GB</p>
          </div>
          <button className=" bg-[#00df98] rounded-md mx-auto w-[200px]  text-black p-2 font-semibold mt-3 ">
            Start Trail
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col py-4 rounded-lg hover:scale-105 duration-300 my-0 bg-gray-100 ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={double}
          />
          <h2 className="text-2xl font-bold text-center py-8">Patnership</h2>
          <p className="text-center text-4xl font-bold ">$169</p>
          <div className="text-center font-medium">
            <p className="py-2  mx-8 mt-8">900 GB Storage</p>
            <p className="py-2  mx-8 ">2 Granted Users</p>
            <p className="py-2  mx-8 ">Send files upto 10 GB</p>
          </div>
          <button className=" bg-[black] rounded-md mx-auto w-[200px]  text-[#00df98] p-2 font-semibold mt-3 ">
            Start Trail
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300   ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={triple}
          />
          <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
          <p className="text-center text-4xl font-bold ">$299</p>
          <div className="text-center font-medium">
            <p className="py-2  mx-8 mt-8">2 TB Storage</p>
            <p className="py-2  mx-8 ">5 Granted Users</p>
            <p className="py-2  mx-8 ">Send files upto 50 GB</p>
          </div>
          <button className=" bg-[#00df98] rounded-md mx-auto w-[200px]  text-black p-2 font-semibold mt-3">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
