import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import logoImage from "../../assets/icons/জমি জগ 1.jpg";
// import heroImage from "../../assets/images/hero page.jpg";
import heroImage2 from "../../assets/images/hero-02.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden bg-white">
      {/*  Navbar  */}
      <header className="flex items-center justify-between px-4 sm:px-[8%] py-4 border-b border-gray-200">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logoImage}
            alt="Logo"
            className="w-24 sm:w-32 md:w-40 lg:w-44 h-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-[#151515] text-sm sm:text-base md:text-lg font-medium">
          <a href="#" className="hover:text-[#7ED957] transition">হোম</a>
          <a href="#" className="hover:text-[#7ED957] transition">সার্ভেয়ার</a>
          <a href="#" className="hover:text-[#7ED957] transition">আমাদের সম্পর্কে</a>
          <a href="#" className="hover:text-[#7ED957] transition">জ্ঞাতব্য</a>
        </nav>

        {/* Search + Login (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center w-64 bg-[#f5f5eb] rounded-lg px-3 py-2 border border-gray-200">
            <FiSearch className="text-gray-500 mr-2 text-lg" />
            <input
              type="text"
              placeholder="সার্চ করুন"
              className="bg-transparent focus:outline-none text-gray-700 w-full text-base"
            />
          </div>
          <button className="text-white font-semibold text-base bg-[#7ED957] px-6 py-3 rounded-lg hover:opacity-90 transition">
            লগইন
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/*  Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-b border-gray-200 space-y-4">
          <nav className="flex flex-col gap-3 text-[#151515] text-base font-medium">
            <a href="#" className="hover:text-[#7ED957] transition">হোম</a>
            <a href="#" className="hover:text-[#7ED957] transition">সার্ভেয়ার</a>
            <a href="#" className="hover:text-[#7ED957] transition">আমাদের সম্পর্কে</a>
            <a href="#" className="hover:text-[#7ED957] transition">জ্ঞাতব্য</a>
          </nav>
          <div className="flex flex-col gap-3">
            <div className="flex items-center w-full bg-[#f5f5eb] rounded-lg px-3 py-2 border border-gray-200">
              <FiSearch className="text-gray-500 mr-2 text-lg" />
              <input
                type="text"
                placeholder="সার্চ করুন"
                className="bg-transparent focus:outline-none text-gray-700 w-full text-sm"
              />
            </div>
            <button className="text-white font-semibold text-sm bg-[#7ED957] px-4 py-2 rounded-lg hover:opacity-90 transition shadow-md">
              লগইন
            </button>
          </div>
        </div>
      )}

      {/*  Hero Section  */}
      <section className="mt-6 px-4 sm:px-8">
        <img
          src={heroImage2}
          alt="Hero"
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
        />
      </section>

      {/*  Divisions Section  */}
      <section className="px-4 sm:px-8 mt-10 mb-16">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#151515] mb-6">
          বিভাগসমূহ
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            "ঢাকা",
            "সিলেট",
            "রাজশাহী",
            "বরিশাল",
            "চট্টগ্রাম",
            "রংপুর",
            "পাবনা",
            "দিনাজপুর",
          ].map((division) => (
            <button
              key={division}
              className="text-[#303030] text-sm sm:text-base md:text-lg border-2 border-black rounded-xl px-3 sm:px-4 py-2 sm:py-3 hover:bg-[#f5f5eb] transition shadow-sm hover:shadow-md"
            >
              {division}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
