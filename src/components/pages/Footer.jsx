import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import twitterIcon from "../../assets/icons/twitter.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import logoImage from "../../assets/icons/জমি জগ 2.png";

const Footer = () => {
  return (
    <div className="bg-[#2F2C2C] pl-[8%] pr-[8%] ">
      <div className="flex py-[8%] justify-between">
        {/*left column */}
        <div className="text-white w-[47%]">
          <img src={logoImage} alt="Logo" />
          <p className="mt-10 text-[16px] leading-relaxed">
            ল্যান্ড ম্যানেজমেন্ট সিস্টেম। সর্বস্বত্ব সংরক্ষিত। আধুনিক প্রযুক্তির
            মাধ্যমে ভূমি পরিচালনা সহজতর করা। যেকোনো জিজ্ঞাসার জন্য আমাদের সাথে
            যোগাযোগ করুন [ইমেইল/ফোন]। গোপনীয়তা নীতি | পরিষেবার শর্তাবলী
          </p>
          <div className="flex mt-6 gap-8">
            <img src={twitterIcon} alt="Twitter" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={whatsappIcon} alt="WhatsApp" />
          </div>
        </div>

        {/*middle column*/}
        <div className="text-white ">
          <h1 className="font-bold mb-4">গুরুত্বপূর্ণ লিঙ্ক</h1>
          <p>হোম</p>
          <p>সার্ভেয়ার</p>
          <p>পূর্বের সার্ভেয়ার</p>
          <p>আমাদের সম্পর্কে</p>
          <p>জ্ঞাতব্য</p>
          <p>লগইন</p>
        </div>

        {/*right column*/}
        <div className="text-white ">
          <h1 className="font-bold mb-4">যোগাযোগের তথ্য</h1>
          <p>+8801885447306</p>
          <p>offical.jomijog@gmail.com</p>
        </div>
      </div>

      {/* bar */}
      <div className="h-0.5 bg-[#ffffff40]  mb-[45px] "></div>
      <div className=" text-white flex justify-between pb-[3%] ">
        <h1>
          কপিরাইট<samp className=" mx-1.5 text-center ">©২০২৫</samp>জমিযোগ।
        </h1>
        <h1>Build by Team Map Mentors</h1>
      </div>
    </div>
  );
};
export default Footer;
