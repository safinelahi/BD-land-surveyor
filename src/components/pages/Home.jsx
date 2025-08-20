import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import logoImage from "../../assets/icons/জমি জগ 1.jpg";
import heroImage from "../../assets/images/hero page.jpg";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* nav bar section */}
      <div className="flex items-center justify-between px-[8%] mt-6 max-sm:px-4">
        {/* logo */}
        <div>
          <img className="h-12 w-auto max-sm:h-10" src={logoImage} alt="Logo" />
        </div>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-[#151515] text-lg font-medium">
          <a href="">হোম</a>
          <a href="">সার্ভেয়ার</a>
          <a href="">আমাদের সম্পর্কে</a>
          <a href="">জ্ঞাতব্য</a>
        </div>

        {/* search + login (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center w-64 bg-[#f5f5eb] rounded-md px-3 py-2">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="সার্চ করুন"
              className="bg-transparent focus:outline-none text-gray-700 w-full"
            />
          </div>
          <button className="text-white font-semibold bg-[#7ED957] px-6 py-2 rounded-lg hover:bg-[#6cc94a] transition">
            লগইন
          </button>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-[#151515]"
        >
          <FiMenu />
        </button>
      </div>

      {/* mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 px-4 mt-3">
          <a className="text-[#151515]" href="">
            হোম
          </a>
          <a className="text-[#151515]" href="">
            সার্ভেয়ার
          </a>
          <a className="text-[#151515]" href="">
            আমাদের সম্পর্কে
          </a>
          <a className="text-[#151515]" href="">
            জ্ঞাতব্য
          </a>
          <div className="flex items-center w-full bg-[#f5f5eb] rounded-md px-3 py-2">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="সার্চ করুন"
              className="bg-transparent focus:outline-none text-gray-700 w-full"
            />
          </div>
          <button className="text-white font-semibold bg-[#7ED957] py-2 rounded-lg">
            লগইন
          </button>
        </div>
      )}

      {/* hero section */}
      <div className="mt-9 max-sm:mt-6 px-[8%] max-sm:px-4">
        <img
          className="w-full rounded-xl object-cover"
          src={heroImage}
          alt="Hero"
        />
      </div>

      {/* Divisions-BD section */}
      <div className="px-[8%] mt-12 mb-12 max-sm:px-4 max-sm:mt-6 max-sm:mb-6 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-4">
        {["ঢাকা", "সিলেট", "রাজশাহী", "বরিশাল", "চট্টগ্রাম", "রংপুর", "পাবনা", "দিনাজপুর"].map(
          (division, idx) => (
            <button
              key={idx}
              className="text-[#303030] text-xl sm:text-2xl border-black border rounded-xl px-4 py-2 sm:px-6 sm:py-3 hover:bg-[#f5f5eb] transition"
            >
              {division}
            </button>
          )
        )}
      </div>

      {/* Footer section (placeholder) */}
      <footer className="bg-[#151515] text-white text-center py-6 mt-12">
        <p>© 2025 BD Land Surveyor. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
