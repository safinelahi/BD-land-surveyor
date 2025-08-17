import { Mail, MapPin, Phone } from "lucide-react";
import landImage from "../../assets/images/land-image.webp";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${landImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-white z-10">
          আমাদের সাথে যোগাযোগ করুন
        </h1>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#7ED957] mb-6">
            যোগাযোগের তথ্য
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            জমিযোগ প্ল্যাটফর্মের মাধ্যমে সহজেই আপনার প্রয়োজনীয় সার্ভেয়ার
            বুকিং করুন। যেকোন প্রশ্ন, অভিযোগ বা সহায়তার জন্য নিচের মাধ্যমে
            আমাদের সাথে যোগাযোগ করুন।
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#7ED957]" />
              <span className="text-lg text-gray-800">+৮৮০ ১২৩৪৫৬৭৮৯০</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#7ED957]" />
              <span className="text-lg text-gray-800">support@jomiJog.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-[#7ED957]" />
              <span className="text-lg text-gray-800">
                রাজশাহী, বাংলাদেশ
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#7ED957] mb-6">
            মেসেজ পাঠান
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2">পুরো নাম</label>
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="w-full p-3 border-2 border-[#7ED957] rounded-lg outline-none focus:ring-1 focus:ring-[#7ED957]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">ইমেইল</label>
              <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="w-full p-3 border-2 border-[#7ED957] rounded-lg outline-none focus:ring-1 focus:ring-[#7ED957]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">বিষয়</label>
              <input
                type="text"
                placeholder="মেসেজের বিষয় লিখুন"
                className="w-full p-3 border-2 border-[#7ED957] rounded-lg outline-none focus:ring-1 focus:ring-[#7ED957]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">মেসেজ</label>
              <textarea
                rows="5"
                placeholder="আপনার মেসেজ লিখুন"
                className="w-full p-3 border-2 border-[#7ED957] rounded-lg outline-none focus:ring-1 focus:ring-[#7ED957]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#7ED957] text-white font-semibold rounded-lg "
            >
              মেসেজ পাঠান
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
    </div>
  );
}
