import logoImage from "../../assets/icons/জমি জগ 1.jpg";

const NavBar = () => {
  return (
    <div>
      {/* nav bar section */}
      <div className=" flex items-center justify-between pl-[8%] pr-[8%] mt-9 ">
        {/* logo section */}
        <div>
          <img className=" items-center " src={logoImage} alt="" />
        </div>

        {/* nav items section */}
        <div className=" flex items-center gap-7  text-[#151515] text-xl font-medium ">
          <a href="">হোম</a>
          <a href="">সার্ভেয়ার</a>
          <a href="">আমাদের সম্পর্কে</a>
          <a href="">জ্ঞাতব্য</a>
        </div>

        {/* search section */}
        <div className="flex gap-6">
          <div className="flex items-center w-64 bg-[#f5f5eb] rounded-md px-3 py-2">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="সার্চ করুন"
              className="bg-transparent focus:outline-none text-gray-700 w-full"
            />
          </div>
          <button className=" text-white font-semibold text-lg bg-[#7ED957] px-[28px] py-[14px] rounded-lg ">
            লগইন
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
