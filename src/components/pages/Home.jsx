import { FiSearch } from "react-icons/fi";
import logoImage from "../../assets/icons/জমি জগ 1.jpg";
import heroImage from "../../assets/images/hero page.jpg";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* ===== Navbar ===== */}
      <header className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-4 gap-4 border-b border-gray-200">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logoImage}
            alt="Logo"
            className="w-28 sm:w-36 md:w-44"
          />
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 text-[#151515] text-sm sm:text-base md:text-lg font-medium">
          <a href="#" className="hover:text-[#7ED957] transition">হোম</a>
          <a href="#" className="hover:text-[#7ED957] transition">সার্ভেয়ার</a>
          <a href="#" className="hover:text-[#7ED957] transition">আমাদের সম্পর্কে</a>
          <a href="#" className="hover:text-[#7ED957] transition">জ্ঞাতব্য</a>
        </nav>

        {/* Search + Login */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center w-full sm:w-64 bg-[#f5f5eb] rounded-lg px-3 py-2 border border-gray-200">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="সার্চ করুন"
              className="bg-transparent focus:outline-none text-gray-700 w-full text-sm sm:text-base"
            />
          </div>
          <button className="text-white font-semibold text-sm sm:text-base bg-[#7ED957] px-6 py-3 rounded-lg hover:opacity-90 transition">
            লগইন
          </button>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="mt-6 px-4 sm:px-8">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-auto rounded-2xl shadow-md object-cover"
        />
      </section>

      {/* ===== Divisions Section ===== */}
      <section className="px-4 sm:px-8 mt-10 mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-[#151515] mb-6">
          বিভাগসমূহ
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {["ঢাকা", "সিলেট", "রাজশাহী", "বরিশাল", "চট্টগ্রাম", "রংপুর", "পাবনা", "দিনাজপুর"].map(
            (division) => (
              <button
                key={division}
                className="text-[#303030] text-sm sm:text-base md:text-lg border-2 border-black rounded-xl px-4 py-3 hover:bg-[#f5f5eb] transition"
              >
                {division}
              </button>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
