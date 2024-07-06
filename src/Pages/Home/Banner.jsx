import { FcGoogle } from "react-icons/fc";
import BannerImg from "../../assets/Group 27.png";
import Facebook from "../../assets/Facebook.png";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Banner = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex justify-between gap-24 pt-24 items-center px-16 bg-[#F7F5F9]">
      <div className="lg:w-[60%]">
        <h1 className="text-4xl italic font-semibold mb-8">
          Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
          <span className="text-[#8064A2]">passion</span>
        </h1>
        <p className="text-sm leading-6">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </p>
        <p className="text-sm mt-4 mb-24 leading-6">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
        <img className="w-full " src={BannerImg} alt="image" />
      </div>
      <div className="lg:w-[40%]">
        <div className="flex gap-5 mb-8">
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
        <div className="h-[450px] ">
          <button className="disabled:cursor-not-allowed w-full flex  items-center  border mb-4 md:px-8  px-1 py-2 hover:shadow-xl border-[#8064A2] rounded-lg font-semibold cursor-pointer">
            <FcGoogle size={20} />

            <p className="text-center w-full">Continue with Google</p>
          </button>
          <button className="disabled:cursor-not-allowed w-full flex  items-center  border  lg:px-8 md:px-2 px-1 py-2 hover:shadow-xl border-[#8064A2] rounded-lg  font-semibold cursor-pointer">
            <img src={Facebook} alt="" />
            <p className="text-center w-full">Continue with Google</p>
          </button>

          <div className="divider my-7 font-semibold">Or connect with</div>
          {/* login form */}
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
            <div className="flex justify-between items-center">
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

          {/* sign up form */}
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
