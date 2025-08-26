//import { useState } from "react";

import heroImage2 from "../../assets/images/hero-02.png";
import Cart from "../cart/Cart";

import Navbar from ".././Navbar/Navbar";

const Home = () => {
  //const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden bg-white">
      {/*  Navbar  */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative mt-6 px-4 sm:px-8">
        {/* Background Image */}
        <div className="relative w-full h-[40vh] sm:h-[55vh] lg:h-[70vh] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={heroImage2}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 sm:px-12 md:px-20 text-white">
            {/* Logo */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7ED957] mb-4">
              জমিযোগ
            </h1>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-5xl font-bold leading-snug mb-4">
              যখনই প্রয়োজন, <br /> খুঁজুন বিশ্বস্ত সার্ভেয়ার
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl">
              বুকিং থেকে সার্ভে পর্যন্ত, জমিযোগ আনছে জমি সেবা অনলাইনে— নিরাপদ,
              দ্রুত ও বিশ্বস্ত।
            </p>

            {/* CTA Button */}
            <button className="bg-[#7ED957] hover:bg-[#6ac648] text-black font-semibold px-6 py-3 rounded-lg shadow-md transition">
              সার্ভেয়ার বুক করুন
            </button>
          </div>
        </div>
      </div>

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
