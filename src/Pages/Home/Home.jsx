import { useEffect, useState } from "react";
import AddCard from "./AddCard";
import Banner from "./Banner";
import Community from "./Community";
import ConnectMeet from "./ConnectMeet";
import Testimonial from "./Testimonial";
import { IoIosArrowUp } from "react-icons/io";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 220) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="relative">
      <div className="fixed bottom-5 right-5 z-50">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="group p-2 md:p-3 rounded-full text-lg text-white border border-gray-300 hover:bg-[#8064A2] shadow-xl cursor-pointer bg-white "
          >
            <IoIosArrowUp className="text-[#939CA3] group-hover:text-white text-2xl md:text-3xl font-bold transition" />
          </button>
        )}
      </div>

      <Banner />
      <ConnectMeet />
      <AddCard />
      <Testimonial />
      <Community />
    </div>
  );
};

export default Home;
