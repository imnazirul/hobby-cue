import { CiSearch } from "react-icons/ci";
import Logo from "../../assets/HobbyCue Logo.png";
import { MdBookmark, MdExplore, MdNotifications } from "react-icons/md";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import HImage from "../../assets/Hobbies.png";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between container mx-auto md:px-8 py-4 bg-base-100">
      <div className="flex gap-4">
        <div className="w-[150px] md:w-[250px]">
          <img src={Logo} alt="logo" />
        </div>
        <div className="h-10 hidden max-w-72 lg:flex">
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
        <div className="hidden md:flex gap-4">
          <a className="flex gap-1 items-center">
            <MdExplore className="text-2xl text-[#8064A2]" />{" "}
            <div className="dropdown">
              <div tabIndex={0} role="button" className=" m-1">
                Explore
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100  z-[1] w-52 p-2 -ml-6 shadow rounded-lg"
              >
                <li className="border-b border-[#CED4DA] py-1">
                  <a className="text-[#6D747A]">People - Community</a>
                </li>
                <li className="border-b border-[#CED4DA] py-1">
                  {" "}
                  <a className="text-[#6D747A]">Places - Venues</a>
                </li>
                <li className="border-b border-[#CED4DA] py-1">
                  {" "}
                  <a className="text-[#6D747A]">Programs - Events</a>
                </li>
                <li className="border-b border-[#CED4DA] py-1">
                  {" "}
                  <a className="text-[#6D747A]">Products - Store</a>
                </li>
                <li>
                  {" "}
                  <a className="text-[#6D747A]">Blogs</a>
                </li>
              </ul>
            </div>
            <IoIosArrowDown />
          </a>
          <a className="flex gap-1 items-center">
            <img src={HImage} alt="" />
            <span className="font-medium">Hobbies</span> <IoIosArrowDown />
          </a>
        </div>
        <div className="hidden lg:flex gap-2 md:gap-4 items-center">
          <a className="  gap-1 items-center">
            <MdBookmark className="text-3xl text-[#8064A2]" />{" "}
          </a>

          <a className="flex gap-1 items-center">
            <MdNotifications className="text-3xl text-[#8064A2]" />{" "}
          </a>
          <a className="gap-1 items-center">
            <PiShoppingCartSimpleFill className="text-3xl text-[#8064A2]" />{" "}
          </a>
        </div>
      </div>
      <div className="lg:hidden gap-3 flex justify-between items-center">
        <a>
          <IoIosSearch className="text-3xl text-[#8064A2]" />{" "}
        </a>
        <a>
          <MdNotifications className="text-3xl text-[#8064A2]" />{" "}
        </a>
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <IoMenuSharp className="text-4xl text-[#8064A2]" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 px-5 text-lg  -ml-32 p-2 shadow"
          >
            <li className="border-b border-[#CED4DA] py-1">
              <a className="text-center block font-medium">Login</a>
            </li>
            <li className="border-b border-[#CED4DA] py-1">
              <a className="flex gap-1 items-center">
                <MdExplore className="text-2xl text-[#8064A2]" />{" "}
                <span className="font-medium">Explore</span> <IoIosArrowDown />
              </a>{" "}
            </li>
            <li className="border-b border-[#CED4DA] py-1">
              <a className="flex gap-1 items-center">
                <PiShoppingCartSimpleFill className="text-2xl text-[#8064A2]" />{" "}
                <span className="font-medium">Cart</span>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="flex gap-1 items-center">
                <img src={HImage} alt="" />
                <span className="font-medium">Hobbies</span> <IoIosArrowDown />
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex">
        <a className="btn  bg-transparent text-[#8064A2] border-[#8064A2]">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
