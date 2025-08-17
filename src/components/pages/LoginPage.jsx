import { useState } from "react";

const LoginPage = () => {
  const [role, setRole] = useState("user"); // toggle between User and Surveyor

  return (
    <main className="min-h-screen bg-[#F5F3ED] flex flex-col justify-between">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#7ED957] text-center mb-6">
            লগইন (Login)
          </h2>

          {/* Role toggle */}
          <div className="flex justify-center mb-8 space-x-4">
            <button
              type="button"
              onClick={() => setRole("user")}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
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
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                role === "surveyor"
                  ? "bg-[#7ED957] text-white shadow-md"
                  : "bg-[#7ED957]/10 text-[#7ED957] hover:bg-[#7ED957]/15"
              }`}
            >
              সার্ভেয়ার লগইন
            </button>
          </div>

          {/* Login Form */}
          <form>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#7ED957] mb-1">
                ইমেইল ঠিকানা / মোবাইল নম্বর
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                placeholder="আপনার ইমেইল / মোবাইল নম্বর লিখুন"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#7ED957] mb-1">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7ED957] border-gray-300"
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#7ED957] hover:bg-[#7ED957]/90 transition-colors text-white py-3 rounded-md font-semibold"
            >
              {role === "user"
                ? "লগইন করুন (ব্যবহারকারী হিসেবে)"
                : "লগইন করুন (সার্ভেয়ার হিসেবে)"}
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

export default LoginPage;
