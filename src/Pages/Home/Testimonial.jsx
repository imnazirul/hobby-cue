import Quote from "../../assets/quote.png";
import Audio from "../../assets/Audio Track.png";
import Avatar from "../../assets/avatar.png";

const Testimonial = () => {
  return (
    <div className="container mx-auto  mt-20 px-20">
      <div className="bg-[#F7F5F9] rounded-lg space-y-8 p-10">
        <div className="flex gap-4 items-center">
          <img src={Quote} alt="quote" />{" "}
          <h3 className="text-2xl font-semibold">Testimonials</h3>
        </div>
        <p className="font-light">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="flex flex-1  gap-2">
          <div className="lg:w-[70%]">
            <img src={Audio} alt="audio" />
          </div>
          <div className="flex gap-2 lg:w-[30%] items-center">
            <img className="h-24 w-24" src={Avatar} alt="avatar" />
            <div>
              <h5 className="font-semibold text-[#8064A2]">Shubha Hemsworth</h5>
              <p className="text-[#0096C8] text-sm">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
