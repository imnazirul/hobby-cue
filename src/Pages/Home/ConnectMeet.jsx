import People from "../../assets/people.png";
import Location from "../../assets/location.png";
import Product from "../../assets/bag.png";
import Program from "../../assets/calender.png";
const ConnectMeet = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-24 mx-5 lg:mx-20 gap-6">
      <div className="space-y-6 border rounded-lg lg:p-10 p-6">
        <div className="flex gap-3 items-center max-lg:justify-center">
          <img src={People} alt="image" />
          <h3 className="text-2xl font-semibold">People</h3>
        </div>
        <p className=" text-sm lg:text-lg font-light max-lg:text-center">
          Find a teacher, coach, or expert for your hobby interest in your
          locality. Find a partner, teammate, accompanist or collaborator.
        </p>
        <button className="px-5 py-2 bg-transparent text-[#8064A2] font-medium border rounded-lg max-lg:w-full max-lg:text-center border-[#8064A2]">
          Connect
        </button>
      </div>
      <div className="space-y-6 border rounded-lg lg:p-10 p-6">
        <div className="flex gap-3 items-center max-lg:justify-center">
          <img src={Location} alt="image" />
          <h3 className="text-2xl font-semibold">Place</h3>
        </div>
        <p className="text-sm lg:text-lg font-light max-lg:text-center">
          Find a class, school, playground, auditorium, studio, shop or an event
          venue. Book a slot at venues that allow booking through hobbycue.
        </p>
        <button className="px-5 py-2 bg-transparent text-[#8064A2] font-medium border rounded-lg max-lg:w-full max-lg:text-center border-[#8064A2]">
          Connect
        </button>
      </div>
      <div className="space-y-6 border rounded-lg lg:p-10 p-6">
        <div className="flex gap-3 items-center max-lg:justify-center">
          <img src={Product} alt="image" />
          <h3 className="text-2xl font-semibold">Product</h3>
        </div>
        <p className="text-sm lg:text-lg font-light max-lg:text-center">
          Find equipment or supplies required for your hobby. Buy, rent or
          borrow from shops, online stores or from community members.
        </p>
        <button className="px-5 py-2 bg-transparent text-[#8064A2] font-medium border rounded-lg max-lg:w-full max-lg:text-center border-[#8064A2]">
          Connect
        </button>
      </div>

      <div className="space-y-6 border rounded-lg lg:p-10 p-6">
        <div className="flex gap-3 items-center max-lg:justify-center">
          <img src={Program} alt="image" />
          <h3 className="text-2xl font-semibold">Program</h3>
        </div>
        <p className="text-sm lg:text-lg font-light max-lg:text-center">
          Find a teacher, coach, or expert for your hobby interest in your
          locality. Find a partner, teammate, accompanist or collaborator.
        </p>
        <button className="px-5 py-2 bg-transparent text-[#8064A2] font-medium border rounded-lg max-lg:w-full max-lg:text-center border-[#8064A2]">
          Connect
        </button>
      </div>
    </div>
  );
};

export default ConnectMeet;
