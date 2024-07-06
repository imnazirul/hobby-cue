import { CiSearch } from "react-icons/ci";
import Logo from "../../assets/HobbyCue Logo.png";
import { MdBookmark, MdExplore, MdNotifications } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import HImage from "../../assets/Hobbies.png";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between container mx-auto px-8 py-4 bg-base-100">
      <div className="flex gap-4">
        <div className="w-[250px]">
          <img src={Logo} alt="logo" />
        </div>
        <div className="h-10 max-w-72 flex">
          <input
            type="search"
            className="flex-1 h-full border rounded-l-lg bg-[#F8F9FA] border-[#EBEDF0] w-full outline-none px-2"
          />{" "}
          <button className="bg-[#8064A2] px-3 rounded-r-lg">
            <CiSearch className=" text-2xl  h-full  text-white" />
          </button>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex gap-4">
          <a className="flex gap-1 items-center">
            <MdExplore className="text-2xl text-[#8064A2]" />{" "}
            <span className="font-medium">Explore</span> <IoIosArrowDown />
          </a>
          <a className="flex gap-1 items-center">
            <img src={HImage} alt="" />
            <span className="font-medium">Explore</span> <IoIosArrowDown />
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <a className="flex gap-1 items-center">
            <MdBookmark className="text-3xl text-[#8064A2]" />{" "}
          </a>
          <a className="flex gap-1 items-center">
            <MdNotifications className="text-3xl text-[#8064A2]" />{" "}
          </a>
          <a className="flex gap-1 items-center">
            <PiShoppingCartSimpleFill className="text-3xl text-[#8064A2]" />{" "}
          </a>
        </div>
      </div>
      <div className="">
        <a className="btn bg-transparent text-[#8064A2] border-[#8064A2]">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
