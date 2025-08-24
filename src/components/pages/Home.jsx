import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";

import heroImage2 from "../../assets/images/hero-02.png";
import Cart from "../cart/Cart";


import Navbar from ".././Navbar/Navbar";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden bg-white">
      {/*  Navbar  */}
      <Navbar />

     
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
        <h2 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-[#151515] mb-8">
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
      <Cart />
    </div>
  );
};

export default Home;
