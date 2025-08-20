import heroImage from "../../assets/images/hero page.jpg";
const Home = () => {
  return (
    <div>
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
