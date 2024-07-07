import { CiSearch } from "react-icons/ci";
import Logo from "../../assets/HobbyCue Logo.png";
import { MdBookmark, MdExplore, MdNotifications } from "react-icons/md";
import {
  IoIosArrowDown,
  IoIosEye,
  IoIosEyeOff,
  IoIosSearch,
} from "react-icons/io";
import HImage from "../../assets/Hobbies.png";
import Facebook from "../../assets/Facebook.png";
import Hicon from "../../assets/HobbyCue Logo2.png";

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      {" "}
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
            <div className="flex gap-1 items-center">
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
            </div>
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
                <button
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                  className="text-center block font-medium"
                >
                  Login
                </button>
              </li>
              <li className="border-b border-[#CED4DA] py-1">
                <a className="flex gap-1 items-center">
                  <MdExplore className="text-2xl text-[#8064A2]" />{" "}
                  <span className="font-medium">Explore</span>{" "}
                  <IoIosArrowDown />
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
                  <span className="font-medium">Hobbies</span>{" "}
                  <IoIosArrowDown />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex">
          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="btn  bg-transparent text-[#8064A2] border-[#8064A2]"
          >
            Sign In
          </button>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal ">
        <div className="max-md:absolute top-0 md:relative   max-w-4xl">
          <div className="flex lg:hidden py-3 bg-white px-5 shadow-2xl justify-between items-center">
            <img src={Hicon} alt="" />
            <button
              onClick={() => document.getElementById("my_modal_4").close()}
            >
              <RxCross1 className="text-2xl cursor-pointer text-[#6D747A] "></RxCross1>
            </button>
          </div>
          <div className="bg-white lg:w-[500px] p-6 lg:p-10 max-lg:h-screen lg:rounded-lg">
            <button
              onClick={() => document.getElementById("my_modal_4").close()}
              className="hidden lg:flex absolute top-3 right-4"
            >
              <RxCross1 className="text-2xl cursor-pointer text-[#6D747A] "></RxCross1>
            </button>
            <div className="flex gap-10 lg:gap-8 max-lg:justify-center mb-8">
              <span
                onClick={() => setIsSignIn(true)}
                className={`${
                  isSignIn ? "text-[#8064A2] border-b-2 border-[#8064A2]" : ""
                } text-xl font-semibold cursor-pointer`}
              >
                Sign In
              </span>
              <span
                onClick={() => setIsSignIn(false)}
                className={`${
                  !isSignIn ? "text-[#8064A2] border-b-2 border-[#8064A2]" : ""
                } text-xl font-semibold cursor-pointer`}
              >
                Join In
              </span>
            </div>
            {/* login  */}
            <form className={`w-full ${isSignIn ? "" : "hidden"} space-y-4`}>
              <input
                type="email"
                className=" w-full h-12 rounded-lg mb outline-none border border-[#EBEDF0]  placeholder:text-[#939CA3] placeholder:text-sm bg-white px-4"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className=" w-full h-12 rounded-lg mb outline-none border border-[#EBEDF0] placeholder:text-[#939CA3] placeholder:text-sm bg-white px-4"
                  placeholder="Password"
                />
                <span
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="text-2xl absolute right-4 top-[25%]"
                >
                  {showPassword ? (
                    <IoIosEye></IoIosEye>
                  ) : (
                    <IoIosEyeOff></IoIosEyeOff>
                  )}
                </span>
              </div>
              <div className="flex gap-[60px] justify-between items-center">
                <label className="cursor-pointer label">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <span className="label-text text-sm ml-1">Remember me</span>
                </label>
                <a href="#" className="text-sm">
                  Forgot Password?
                </a>
              </div>

              <button className="font-semibold w-full border border-black py-3 rounded-lg text-black">
                Continue
              </button>
            </form>
            {/* sign up */}
            <form className={`w-full ${!isSignIn ? "" : "hidden"} space-y-4`}>
              <input
                type="email"
                className=" w-full h-12 rounded-lg mb outline-none
            border border-[#EBEDF0] placeholder:text-[#939CA3]
            placeholder:text-sm bg-white px-4"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className=" w-full h-12 rounded-lg mb outline-none border border-[#EBEDF0] placeholder:text-[#939CA3] placeholder:text-sm bg-white px-4"
                  placeholder="Password"
                />
                <span
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="text-2xl absolute right-4 top-[25%]"
                >
                  {showPassword ? (
                    <IoIosEye></IoIosEye>
                  ) : (
                    <IoIosEyeOff></IoIosEyeOff>
                  )}
                </span>
              </div>
              <p className="text-xs text-center text-[#6D747A]">
                By continuing, you agree to our{" "}
                <span className="text-[#08090A]">Terms of Service</span> and{" "}
                <span className="text-[#08090A]">Privacy Policy.</span>
              </p>
              <button className="font-semibold w-full border border-black py-3 rounded-lg text-black">
                Agree and Continue
              </button>
            </form>
            <div className="divider my-7 font-semibold">Or connect with</div>
            <div>
              <button className="disabled:cursor-not-allowed w-full flex  items-center  jus border mb-4 md:px-8  px-1 py-2 hover:shadow-xl border-[#8064A2] rounded-lg font-semibold cursor-pointer">
                <FcGoogle size={20} />

                <p className="text-center w-full">Continue with Google</p>
              </button>
              <button className="disabled:cursor-not-allowed w-full flex  items-center  border  lg:px-8 md:px-2 px-1 py-2 hover:shadow-xl border-[#8064A2] rounded-lg  font-semibold cursor-pointer">
                <img src={Facebook} alt="" />
                <p className="text-center w-full">Continue with Google</p>
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Navbar;
