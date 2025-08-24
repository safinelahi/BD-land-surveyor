import { useState } from "react";
import LandBuyingMistakes from "../GeneralKnowledgePages/LandBuyingMistakes";
import LandDocumentGuide from "../GeneralKnowledgePages/LandDocumentGuide";
import LandSurveyGuide from "../GeneralKnowledgePages/LandSurveyGuide";
import Navbar from "../Navbar/Navbar";


const GeneralKnowledge = () => {
  const [activePage, setActivePage] = useState(null);

  const pages = {
    "জমি ক্রয়ে ভুল সমূহ": <LandBuyingMistakes />,
    "ভূমি জরিপ ও খতিয়ান": <LandSurveyGuide />,
    "দলিল সংক্রান্ত প্রয়োজনীয় তথ্য": <LandDocumentGuide/>,
  };

  return (
    <div className="px-4 sm:px-8 mt-10 mb-16">
      <nav className="mb-12">
        <Navbar/>
      </nav>
      
      {/* Title */}
      <h2 className="text-lg sm:text-2xl md:text-3xl text-center font-bold text-[#7ED957] mb-12">
        সাধারণ জ্ঞান
      </h2>

      {/* Button Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {[
          "জমি ক্রয়ে ভুল সমূহ",
          "ভূমি জরিপ ও খতিয়ান",
          "দলিল সংক্রান্ত প্রয়োজনীয় তথ্য",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
        ].map((division) => (
          <button
            key={division}
            onClick={() => setActivePage(division)}
            className={`text-[#303030] text-sm sm:text-base md:text-lg border-2 border-[#7ED957] rounded-xl px-3 sm:px-4 py-2 sm:py-3 transition shadow-sm hover:shadow-md
              ${
                activePage === division
                  ? "bg-[#7ED957] text-white"
                  : "hover:bg-[#f5f5eb]"
              }`}
          >
            {division}
          </button>
        ))}
      </div>

      {/* Page Showing Section */}
      <div className="mt-10 px-2 sm:px-4 md:px-0">
        {activePage && pages[activePage] ? (
          <div className="w-full">{pages[activePage]}</div>
        ) : (
          <p className="text-center text-[#7ED957] text-sm sm:text-base md:text-lg">
            একটি বিষয় নির্বাচন করুন
          </p>
        )}
      </div>
    </div>
  );
};

export default GeneralKnowledge;
