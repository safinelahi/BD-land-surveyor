import { useState } from "react";
import  { Link} from 'react-router-dom'
import Navbar from "../Navbar/Navbar";

const LoginPage = () => {
  const [role, setRole] = useState("user"); // toggle between User and Surveyor

  return (
    <main className="min-h-screen bg-[#F5F3ED] flex flex-col justify-between">
      {/* Main Content */}
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#7ED957] text-center mb-6">
            লগইন (Login)
          </h2>

          {/* Role toggle */}
          <div className="flex justify-center mb-8 space-x-3 sm:space-x-4">
            <button
              type="button"
              onClick={() => setRole("user")}
              className={`px-4 sm:px-6 py-2 rounded-md font-semibold transition-colors ${
                role === "user"
                  ? "bg-[#7ED957] text-white shadow-md"
                  : "bg-[#7ED957]/10 text-[#7ED957] hover:bg-[#7ED957]/15"
              }`}
            >
              ব্যবহারকারী লগইন
            </button>
            <button
              type="button"
              onClick={() => setRole("surveyor")}
              className={`px-4 sm:px-6 py-2 rounded-md font-semibold transition-colors ${
                role === "surveyor"
                  ? "bg-[#7ED957] text-white shadow-md"
                  : "bg-[#7ED957]/10 text-[#7ED957] hover:bg-[#7ED957]/15"
              }`}
            >
              সার্ভেয়ার লগইন
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#7ED957] mb-1">
                ইমেইল ঠিকানা / মোবাইল নম্বর
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300 text-base"
                placeholder="আপনার ইমেইল / মোবাইল নম্বর লিখুন"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#7ED957] mb-1">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300 text-base"
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#7ED957] hover:bg-[#7ED957]/90 transition-colors text-white py-3 rounded-md font-semibold 
              text-base sm:text-lg"
            >
              {role === "user"
                ? "লগইন করুন (ব্যবহারকারী হিসেবে)"
                : "লগইন করুন (সার্ভেয়ার হিসেবে)"}
            </button>
            
            <Link to="/signup">
            <button
              type="submit"
              className="w-full bg-[#7ED957] hover:bg-[#7ED957]/90 transition-colors text-white py-3 rounded-md font-semibold 
              text-base sm:text-lg"
            >সাইন আপ করুন</button>

            </Link>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-gray-600 text-xs sm:text-sm md:text-base">
          © ২০২৫ <span className="text-[#7ED957] font-bold">জমিযোগ</span> । সর্বস্বত্ব সংরক্ষিত
        </p>
      </footer>
    </main>
  );
};

export default LoginPage;
