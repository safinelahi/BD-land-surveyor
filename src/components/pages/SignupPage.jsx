import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const SignUpPage = () => {
  const [role, setRole] = useState("user"); // toggle

  return (
    <main className="min-h-screen bg-[#F5F3ED] flex flex-col justify-between">
      {/* Main */}
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#7ED957] text-center mb-6">
            সাইন আপ (Sign Up)
          </h2>

          {/* Role toggle */}
          <div className="flex justify-center mb-8 space-x-4">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                role === "student"
                  ? "bg-[#7ED957] text-white shadow-md"
                  : "bg-[#7ED957]/10 text-[#7ED957] hover:bg-[#7ED957]/15"
              }`}
            >
              ব্যবহারকারী
            </button>
            <button
              type="button"
              onClick={() => setRole("recruiter")}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                role === "recruiter"
                  ? "bg-[#7ED957] text-white shadow-md"
                  : "bg-[#7ED957]/10 text-[#7ED957] hover:bg-[#7ED957]/15"
              }`}
            >
              সার্ভেয়ার
            </button>
          </div>

          {/* SignUp Form */}
          <form>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#7ED957] mb-1">
                পুরো নাম
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                placeholder="আপনার নাম লিখুন"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#7ED957] mb-1">
                ইমেইল ঠিকানা
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                placeholder="আপনার ইমেইল লিখুন"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#7ED957] mb-1">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                placeholder="কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড দিন"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#7ED957] mb-1">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                placeholder="আবার পাসওয়ার্ড লিখুন"
                required
              />
            </div>

            {/* Mobile */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#7ED957] mb-1">
                মোবাইল নম্বর
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                placeholder="আপনার মোবাইল নম্বর লিখুন"
                required
              />
            </div>

            {/* Conditional fields */}
            {role === "student" && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#7ED957] mb-1">
                  ঠিকানা
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                  placeholder="আপনার ঠিকানা লিখুন"
                  required
                />
              </div>
            )}

            {role === "recruiter" && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#7ED957] mb-1">
                    অফিস/কোম্পানির নাম
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                    placeholder="কোম্পানির নাম লিখুন"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#7ED957] mb-1">
                    অফিস/কাজের ঠিকানা
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                    placeholder="ঠিকানা লিখুন"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#7ED957] mb-1">
                    সার্ভেয়ার লাইসেন্স/রেজিস্ট্রেশন নম্বর
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                    placeholder="লাইসেন্স নম্বর লিখুন"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#7ED957] mb-1">
                    অভিজ্ঞতা (বছর)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                    placeholder="কত বছরের অভিজ্ঞতা আছে লিখুন"
                    required
                  />
                </div>
              </>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#7ED957] hover:bg-[#7ED957]/90 transition-colors text-white py-3 rounded-md font-semibold"
            >
              {role === "student"
                ? "রেজিস্ট্রেশন করুন (ব্যবহারকারী হিসেবে)"
                : "রেজিস্ট্রেশন করুন (সার্ভেয়ার হিসেবে)"}
            </button>
          </form>
        </div>
      </div>
      {/* Footer */}
      <div className="py-6 text-center ">
        <p className="text-gray-600 text-sm">
          © ২০২৫ <span className="text-[#7ED957] font-bold">জমিযোগ</span> ।
          সর্বস্বত্ব সংরক্ষিত
        </p>
      </div>
    </main>
  );
};

export default SignUpPage;
