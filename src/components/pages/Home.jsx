import { FiSearch } from "react-icons/fi";
import logoImage from "../../assets/icons/জমি জগ 1.jpg";
import heroImage from "../../assets/images/hero page.jpg";

const Home = () => {
  return (
    <div>
      {/* nav bar section */}
      <div className="flex items-center justify-between pl-[8%] pr-[8%] mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4 max-sm:px-4 max-sm:mt-4">
        {/* logo section */}
        <div>
          <img
            className="items-center max-sm:h-10 max-sm:w-auto"
            src={logoImage}
            alt="BD Land Surveyor Logo"
          />
        </div>

        {/* nav items section */}
        <div className="flex items-center gap-7 text-[#151515] text-xl font-medium max-sm:w-full max-sm:justify-between max-sm:text-sm max-sm:gap-3">
          <a href="">হোম</a>
          <a href="">সার্ভেয়ার</a>
          <a href="">আমাদের সম্পর্কে</a>
          <a href="">জ্ঞাতব্য</a>
        </div>

        {/* search section */}
        <div className="flex gap-6 max-sm:w-full max-sm:flex-col max-sm:gap-3">
          <div className="flex items-center w-64 bg-[#f5f5eb] rounded-md px-3 py-2 max-sm:w-full">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="সার্চ করুন"
              className="bg-transparent focus:outline-none text-gray-700 w-full"
            />
          </div>
          <button className="text-white font-semibold text-lg bg-[#7ED957] px-[28px] py-[14px] rounded-lg max-sm:w-full max-sm:text-base max-sm:py-3">
            লগইন
          </button>
        </div>
      </div>

      {/* hero section image */}
      <div className="max-sm:px-4">
        <img
          className="mt-9 w-full h-auto object-cover max-sm:mt-4 max-sm:rounded-md"
          src={heroImage}
          alt="Hero"
        />
      </div>

      {/* Divisions-BD section */}
      <div className="pl-[8%] pr-[8%] flex justify-between mt-12 mb-12 max-sm:px-4 max-sm:mt-6 max-sm:mb-6 max-sm:grid max-sm:grid-cols-2 max-sm:gap-3">
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 max-sm:text-base max-sm:px-4 max-sm:py-2">
          ঢাকা
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 max-sm:text-base max-sm:px-4 max-sm:py-2">
          সিলেট
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 max-sm:text-base max-sm:px-4 max-sm:py-2">
          রাজশাহী
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 max-sm:text-base max-sm:px-4 max-sm:py-2">
          বরিশাল
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 max-sm:text-base max-sm:px-4 max-sm:py-2">
          চট্টগ্রাম
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 max-sm:text-base max-sm:px-4 max-sm:py-2">
          রংপুর
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 max-sm:text-base max-sm:px-4 max-sm:py-2">
          পাবনা
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 max-sm:text-base max-sm:px-4 max-sm:py-2">
          দিনাজপুর
        </button>
      </div>

      {/* Footer section */}
    </div>
  );
};

export default Home;
