import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import twitterIcon from "../../assets/icons/twitter.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import logoImage from "../../assets/icons/জমি জগ 2.png";

const Footer = () => {
  return (
    <div className="bg-[#2F2C2C] px-6 sm:px-[8%]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row py-10 md:py-[8%] justify-between gap-10 md:gap-0">
        {/* Left Column */}
        <div className="text-white md:w-[47%]">
          <img
            src={logoImage}
            alt="Logo"
            className="w-32 sm:w-40 md:w-48 lg:w-56"
          />
          <p className="mt-6 sm:mt-10 text-sm sm:text-base leading-relaxed">
            ল্যান্ড ম্যানেজমেন্ট সিস্টেম। সর্বস্বত্ব সংরক্ষিত। আধুনিক প্রযুক্তির
            মাধ্যমে ভূমি পরিচালনা সহজতর করা। যেকোনো জিজ্ঞাসার জন্য আমাদের সাথে
            যোগাযোগ করুন [ইমেইল/ফোন]। গোপনীয়তা নীতি | পরিষেবার শর্তাবলী
          </p>
          <div className="flex mt-6 gap-6 sm:gap-8">
            <img src={twitterIcon} alt="Twitter" className="w-6 sm:w-7" />
            <img src={facebookIcon} alt="Facebook" className="w-6 sm:w-7" />
            <img src={instagramIcon} alt="Instagram" className="w-6 sm:w-7" />
            <img src={whatsappIcon} alt="WhatsApp" className="w-6 sm:w-7" />
          </div>
        </div>

        {/* Middle Column */}
        <div className="text-white">
          <h1 className="font-bold mb-4 text-base sm:text-lg">
            গুরুত্বপূর্ণ লিঙ্ক
          </h1>
          <div className="space-y-2 text-sm sm:text-base">
            <p>হোম</p>
            <p>সার্ভেয়ার</p>
            <p>পূর্বের সার্ভেয়ার</p>
            <p>আমাদের সম্পর্কে</p>
            <p>জ্ঞাতব্য</p>
            <p>লগইন</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="text-white">
          <h1 className="font-bold mb-4 text-base sm:text-lg">
            যোগাযোগের তথ্য
          </h1>
          <div className="space-y-2 text-sm sm:text-base">
            <p>+8801885447306</p>
            <p>offical.jomijog@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-0.5 bg-[#ffffff40] mb-6 sm:mb-[45px]"></div>

      {/* Bottom Bar */}
      <div className="text-white flex flex-col sm:flex-row justify-between items-center gap-3 pb-6 sm:pb-[3%] text-sm sm:text-base">
        <h1>
          কপিরাইট
          <span className="mx-1.5">©২০২৫</span>
          জমিযোগ।
        </h1>
        <h1>Build by Team Map Mentors</h1>
      </div>
    </div>
  );
};

export default Footer;
