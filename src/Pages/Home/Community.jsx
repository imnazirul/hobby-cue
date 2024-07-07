import Image from "../../assets/Group 99.png";

const Community = () => {
  return (
    <div className="lg:p-24 p-6 lg:mt-24 mt-12  bg-[#F7FDFF] ">
      <h1 className="text-xl lg:text-4xl font-medium italic max-lg:mb-7">
        Your <span className="text-[#8064A2]">Hobby</span>, Your{" "}
        <span className="text-[#0096C8]">Community...</span>
      </h1>
      <button className="bg-[#8064A2] max-lg:mb-10  px-3 lg:px-4 lg:py-2 py-1 rounded-lg text-white lg:text-lg lg:font-semibold lg:mt-8">
        Get Started
      </button>
      <img src={Image} className="w-full mt-24" alt="" />
    </div>
  );
};

export default Community;
