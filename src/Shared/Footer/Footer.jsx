import facebook from "../../assets/facebookm.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import pinterest from "../../assets/pinterest.png";
import gplus from "../../assets/gplus.png";
import youtube from "../../assets/youtube.png";
import telegram from "../../assets/telegram.png";
import email from "../../assets/email.png";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="footer  text-base-content lg:py-14 lg:px-24 px-6 py-8">
        <nav className="max-lg:w-full">
          <h6 className="font-bold max-lg:flex max-lg:justify-between max-lg:items-center max-lg:w-full">
            Hobbycue <IoIosArrowUp className="lg:hidden font-bold text-lg" />
          </h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Services</a>
          <a className="link link-hover">Work with Us</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav className="max-lg:w-full">
          <h6 className="font-bold max-lg:flex max-lg:justify-between max-lg:items-center max-lg:w-full">
            How Do I <IoIosArrowUp className="lg:hidden font-bold text-lg" />
          </h6>{" "}
          <a className="link link-hover">Sign Up</a>
          <a className="link link-hover">Add a Listing</a>
          <a className="link link-hover">Claim Listing</a>
          <a className="link link-hover">Post a Query</a>
          <a className="link link-hover">Add a Blog Post</a>
          <a className="link link-hover">Other Queries</a>
        </nav>
        <nav className="max-lg:w-full">
          <h6 className="font-bold max-lg:flex max-lg:justify-between max-lg:items-center max-lg:w-full">
            Quick Links <IoIosArrowUp className="lg:hidden font-bold text-lg" />
          </h6>{" "}
          <a className="link link-hover">Listings</a>
          <a className="link link-hover">Blog Posts</a>
          <a className="link link-hover">Shop / Store</a>
          <a className="link link-hover">Shop / Store</a>
          <a className="link link-hover">Community</a>
        </nav>
        <div>
          <div>
            <h6 className="font-semibold text-black">Social Media</h6>
            <div className="flex gap-6 mt-2">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitter} alt="facebook" />
              </a>
              <a href="#">
                <img src={instagram} alt="facebook" />
              </a>
              <a href="#">
                <img src={pinterest} alt="facebook" />
              </a>
              <a href="#">
                <img src={gplus} alt="facebook" />
              </a>
              <a href="#">
                <img src={youtube} alt="facebook" />
              </a>
              <a href="#">
                <img src={telegram} alt="facebook" />
              </a>
              <a href="#">
                <img src={email} alt="facebook" />
              </a>
            </div>
          </div>
          <form>
            <fieldset className="form-control w-full">
              <label className="label">
                <span className="label-text">Invite Friends</span>
              </label>
              <div className="join w-full">
                <input
                  type="text"
                  placeholder="Email ID"
                  className="input w-full input-bordered outline-none border-[#8064A2] placeholder:text-sm join-item"
                />
                <button className="btn bg-[#8064A2] text-white border-[#8064A2] hover:bg-[#8064A2] join-item">
                  Invite
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
      <footer className="footer footer-center bg-[#F7F5F9] text-base-content p-4 lg:pt-7 lg:pb-6">
        <aside>
          <p className="font-medium">
            Copyright © {new Date().getFullYear()} - Purple Cues Private Limited
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
