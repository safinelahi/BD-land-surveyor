import { useEffect, useState } from "react";
import LandBuyingMistakes from "../GeneralKnowledgePages/LandBuyingMistakes";
import LandDocumentGuide from "../GeneralKnowledgePages/LandDocumentGuide";
import LandSurveyGuide from "../GeneralKnowledgePages/LandSurveyGuide";
import Navbar from "../Navbar/Navbar";

const GeneralKnowledge = () => {
  const [activePage, setActivePage] = useState(null);

  const pages = {
    "জমি ক্রয়ে ভুল সমূহ": <LandBuyingMistakes />,
    "ভূমি জরিপ ও খতিয়ান": <LandSurveyGuide />,
    "দলিল সংক্রান্ত প্রয়োজনীয় তথ্য": <LandDocumentGuide />,
  };

  const topics = [
    {
      title: "জমি ক্রয়ে ভুল সমূহ",
      icon: "📉",
      desc: "জমি কেনার সময় সাধারণ ভুলগুলো এড়াতে নির্দেশনা।",
    },
    {
      title: "ভূমি জরিপ ও খতিয়ান",
      icon: "📑",
      desc: "জমির জরিপ ও খতিয়ান সম্পর্কিত প্রয়োজনীয় তথ্য।",
    },
    {
      title: "দলিল সংক্রান্ত প্রয়োজনীয় তথ্য",
      icon: "📝",
      desc: "জমির দলিল সঠিকভাবে যাচাই করার নির্দেশনা।",
    },
  ];

  // ✅ Show first topic by default
  useEffect(() => {
    setActivePage(topics[0].title);
  }, []);

  return (
    <div className=" min-h-screen">
      {/* Navbar */}
      <nav className="mb-12 bg-white">
        <Navbar />
      </nav>

      {/* Hero Section */}
      <div className="text-center px-4 sm:px-8 mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F2C2C]">
          সাধারণ জ্ঞান
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          জমি কেনা-বেচা ও পরিচালনার গুরুত্বপূর্ণ তথ্য, নির্দেশনা এবং গাইডলাইন। 
          আপনার সঠিক সিদ্ধান্ত নেওয়ার জন্য এখানে সবকিছু সহজভাবে উপস্থাপন করা হয়েছে।
        </p>
      </div>

      {/* Topic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-12 md:px-20">
        {topics.map((topic) => (
          <button
            key={topic.title}
            onClick={() => setActivePage(topic.title)}
            className={`flex flex-col items-center text-center p-6 rounded-2xl border-2 transition-all shadow-sm hover:shadow-lg
              ${
                activePage === topic.title
                  ? "bg-[#7ED957] text-white border-[#7ED957] scale-105"
                  : "bg-white text-[#303030] border-gray-200 hover:border-[#7ED957] hover:bg-green-50"
              }`}
          >
            <span className="text-4xl mb-3">{topic.icon}</span>
            <h2 className="text-lg sm:text-xl font-semibold">{topic.title}</h2>
            <p
              className={`mt-2 text-sm sm:text-base ${
                activePage === topic.title ? "text-green-50" : "text-gray-500"
              }`}
            >
              {topic.desc}
            </p>
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-12 px-6 sm:px-12 md:px-20">
        <div className="p-6 sm:p-10 bg-white rounded-2xl  transition-all duration-300">
          {pages[activePage]}
        </div>
      </div>
    </div>
  );
};

export default GeneralKnowledge;
