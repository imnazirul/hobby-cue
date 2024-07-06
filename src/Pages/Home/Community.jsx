import Image from "../../assets/Group 99.png";

const Community = () => {
  return (
    <div className="p-24 mt-20  bg-[#F7FDFF] ">
      <h1 className="text-4xl font-medium italic">
        Your <span className="text-[#8064A2]">Hobby</span>, Your{" "}
        <span className="text-[#0096C8]">Community...</span>
      </h1>
      <button className="bg-[#8064A2] px-4 py-2 rounded-lg text-white text-lg font-semibold mt-8">
        Get Started
      </button>
      <img src={Image} className="w-full mt-24" alt="" />
    </div>
  );
};

export default Community;
