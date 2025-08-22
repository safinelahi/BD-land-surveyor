import { FiSearch } from "react-icons/fi";
import logoImage from "../../assets/icons/জমি জগ 1.jpg";
import heroImage from "../../assets/images/hero page.jpg";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* nav bar section */}
      <div className="flex items-center justify-between px-4 sm:px-[8%] mt-6 flex-wrap gap-4">
        {/* logo section */}
        <div>
          <img
            className="w-28 sm:w-36 md:w-44"
            src={logoImage}
            alt="Logo"
          />
        </div>

        {/* nav items section */}
        <div className="flex flex-wrap justify-center gap-4 text-[#151515] text-sm sm:text-base md:text-xl font-medium">
          <a href="">হোম</a>
          <a href="">সার্ভেয়ার</a>
          <a href="">আমাদের সম্পর্কে</a>
          <a href="">জ্ঞাতব্য</a>
        </div>

        {/* search section */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="flex items-center w-full sm:w-64 bg-[#f5f5eb] rounded-md px-3 py-2">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="সার্চ করুন"
              className="bg-transparent focus:outline-none text-gray-700 w-full text-sm sm:text-base"
            />
          </div>
          <button className="text-white font-semibold text-sm sm:text-lg bg-[#7ED957] px-5 py-2 sm:px-[28px] sm:py-[14px] rounded-lg">
            লগইন
          </button>
        </div>
      </div>

      {/* hero section image */}
      <div className="mt-6">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={heroImage}
          alt="Hero"
        />
      </div>

      {/* Divisions-BD section */}
      <div className="px-4 sm:px-[8%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10 mb-12">
        <button className="text-[#303030] text-base sm:text-xl md:text-2xl border-black border-[2px] rounded-xl px-4 py-2">
          ঢাকা
        </button>
        <button className="text-[#303030] text-base sm:text-xl md:text-2xl border-black border-[2px] rounded-xl px-4 py-2">
          সিলেট
        </button>
        <button className="text-[#303030] text-base sm:text-xl md:text-2xl border-black border-[2px] rounded-xl px-4 py-2">
          রাজশাহী
        </button>
        <button className="text-[#303030] text-base sm:text-xl md:text-2xl border-black border-[2px] rounded-xl px-4 py-2">
          বরিশাল
        </button>
        <button className="text-[#303030] text-base sm:text-xl md:text-2xl border-black border-[2px] rounded-xl px-4 py-2">
          চট্টগ্রাম
        </button>
        <button className="text-[#303030] text-base sm:text-xl md:text-2xl border-black border-[2px] rounded-xl px-4 py-2">
          রংপুর
        </button>
        <button className="text-[#303030] text-base sm:text-xl md:text-2xl border-black border-[2px] rounded-xl px-4 py-2">
          পাবনা
        </button>
        <button className="text-[#303030] text-base sm:text-xl md:text-2xl border-black border-[2px] rounded-xl px-4 py-2">
          দিনাজপুর
        </button>
      </div>
    </div>
  );
};

export default Home;
