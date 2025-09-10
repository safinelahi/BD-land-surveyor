import { useState } from "react";


const faqs = [
  {
    question: "জমিযোগ কী?",
    answer:
      "জমিযোগ একটি ডিজিটাল প্ল্যাটফর্ম যেখানে আপনি জমি সংক্রান্ত বিস্তৃত জ্ঞান পাবেন এবং ভেরিফাইড সার্ভেয়ার খুঁজে বুকিং করতে পারবেন। জমির যেকোনো সমস্যার জন্য আমরা সহজ সমাধান দিই।",
  },
  {
    question: "জমিযোগ কী কী সার্ভিস পাব?",
    answer:
      "✅ জমির সাধারণ জ্ঞান: জমি, দলিল, মাপঝোক সম্পর্কিত সহজ গাইড।\n✅ সার্ভেয়ার বুকিং: জমি মাপার জন্য সরাসরি একজন দক্ষ সার্ভেয়ার ডাকুন।\n✅ বিশেষজ্ঞ পরামর্শ: জমি কেনার সময় ডকুমেন্ট ভেরিফাই করার জন্য বিশেষজ্ঞের পরামর্শ নিন (অনলাইন ও অফলাইন)।",
  },
  {
    question: "সার্ভেয়ার বুকিং কিভাবে করব?",
    answer:
      "👉 জমিযোগ-এ আপনার এলাকা সিলেক্ট করুন।\n👉 সার্ভেয়ারদের প্রোফাইল ও রেটিং দেখুন।\n👉 পছন্দের সার্ভেয়ার বেছে নিয়ে তারিখ ও সময় বুক করুন।",
  },
  {
    question: "সার্ভেয়ারদের কিভাবে বিশ্বাস করব?",
    answer:
      "জমিযোগ-এর সকল সার্ভেয়ারের প্রোফাইল ম্যানুয়ালি ভেরিফাইড। এছাড়াও, আগের ক্লায়েন্টদের রিভিউ পড়তে পারবেন।",
  },
  {
    question: "সমস্যা হলে কী করব?",
    answer:
      "আমাদের একটি সাপোর্ট টিম রয়েছে। জমিযোগ-এ যোগাযোগ অপশনে আপনার মেসেজ পাঠান। আমরা দ্রুত সাহায্য করার চেষ্টা করব।",
  },
  {
    question: "সার্ভেয়ার হিসেবে যুক্ত হতে চান?",
    answer:
      "জমিযোগ-এ 'Surveyor Register'-এ ক্লিক করে আপনার বিস্তারিত তথ্য সাবমিট করুন।",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F5F3ED] ">

      {/* Hero Section */}
      <div className="text-center px-4 sm:px-8 py-12 bg-[#F5F3ED]">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#2F2C2C]">
          প্রায় জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          আপনার সাধারণ প্রশ্নের উত্তর এখানে পাবেন। যদি প্রশ্ন থেকে যায়, আমাদের
          সাপোর্ট টিমের সাথে যোগাযোগ করুন।
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6  ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border border-gray-200 rounded-xl shadow-sm bg-white"
          >
            {/* Question */}
            <button
              className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-medium text-gray-800 hover:text-green-600"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="ml-4">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-4 sm:px-5 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
