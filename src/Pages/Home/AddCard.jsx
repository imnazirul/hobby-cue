import { IoIosAddCircle } from "react-icons/io";

const AddCard = () => {
  return (
    <div className="container mt-24 mx-auto bg-[#F7FDFF] rounded-lg p-24">
      <div className="p-10 space-y-8 bg-white border rounded-lg border-[#CED4DA]">
        <div className="flex gap-4 items-center">
          <IoIosAddCircle className="text-[#0096C8] text-3xl" />{" "}
          <p className="text-2xl font-semibold">Add your own</p>
        </div>
        <p className="text-lg font-light">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        <button className=" px-5 py-2 bg-transparent text-[#8064A2] font-medium border rounded-lg border-[#8064A2]">
          Add new
        </button>
      </div>
    </div>
  );
};

export default AddCard;
