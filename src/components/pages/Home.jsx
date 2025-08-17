import { FiSearch } from "react-icons/fi";
import logoImage from "../../assets/icons/জমি জগ 1.jpg";
import heroImage from "../../assets/images/hero page.jpg";
const Home = () => {
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

      {/* hero section image  */}

      <div>
        <img className=" mt-9  " src={heroImage} alt="" />
      </div>

      {/* Divisions-BD section  */}

      <div className=" pl-[8%] pr-[8%]  flex justify-between mt-12 mb-12">
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 ">
          ঢাকা
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 ">
          সিলেট
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 ">
          রাজশাহী
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 ">
          বরিশাল
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 ">
          চট্টগ্রাম
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 ">
          রংপুর
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 ">
          পাবনা
        </button>
        <button className="text-[#303030] text-3xl border-black border-[2px] rounded-xl px-5 py-3 ">
          দিনাজপুর
        </button>
      </div>
      

      {/* Footer section */}


    </div>
  );
};

export default Home;
