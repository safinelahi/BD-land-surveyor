import { FaStar } from "react-icons/fa";
import experienceIcon from "../../assets/icons/Experience.jpg";
import priceIcon from "../../assets/icons/Price.jpg";
import Surveyor_02 from "../../assets/images/surveyor02.png";
import Surveyor_04 from "../../assets/images/surveyor04.png";
import Surveyor_05 from "../../assets/images/surveyor05.png";
import Surveyor_06 from "../../assets/images/surveyor06.png";
import Surveyor_07 from "../../assets/images/surveyor07.png";
import Surveyor_08 from "../../assets/images/surveyor08.png";
import Surveyor_09 from "../../assets/images/surveyor09.png";
import Surveyor_10 from "../../assets/images/surveyor10.jpg";

const Cart = () => {
  // Surveyor data
  const surveyors = [
    {
      id: 1,
      name: "আব্দুল্লাহ আল রুম্মান",
      age: 26,
      experience: "৮ বছর",
      price: "৫০০০",
      img: Surveyor_10,
    },
    {
      id: 2,
      name: " আমিনুল ইসলাি লাফু ",
      age: 40,
      experience: "২৫ বছর",
      price: "৪০০০",
      img: Surveyor_02,
    },
    {
      id: 3,
      name: "মনোয়ার হোসাইন",
      age: 40,
      experience: "১৫ বছর",
      price: "৮০০০",
      img: Surveyor_09,
    },
    {
      id: 4,
      name: "আবু রায়হান বুলবুল",
      age: 45,
      experience: "২০ বছর",
      price: "৭০০০",
      img: Surveyor_04,
    },
    {
      id: 5,
      name: "কবির আহমিদ অপু",
      age: 32,
      experience: "৮ বছর",
      price: "৭০০০",
      img: Surveyor_05,
    },
    {
      id: 6,
      name: "মমিনুল ইসলাম",
      age: 34,
      experience: "১০ বছর",
      price: "৮০০০",
      img: Surveyor_06,
    },
    {
      id: 7,
      name: "মাজদার আলী",
      age: 45,
      experience: "২০ বছর",
      price: "৭০০০",
      img: Surveyor_07,
    },
    {
      id: 8,
      name: "গাউসুল আজম জুম্মা",
      age: 30,
      experience: "৭ বছর",
      price: "৫০০০",
      img: Surveyor_08,
    },
  ];

  // Reusable card
  const SurveyorCard = ({ name, img, experience, price }) => (
    <div className="bg-white rounded-2xl border border-[#7ed95659] overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="relative w-full h-64 flex items-center justify-center bg-white rounded-t-2xl overflow-hidden">
        <img
          src={img}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Info Section */}
      <div className="p-4">
        {/* Stars */}
        <div className="flex items-center text-[#7ED957] text-sm">
          {Array(5)
            .fill()
            .map((_, i) => (
              <FaStar key={i} className="mr-1" />
            ))}
        </div>

        {/* Name */}
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mt-2">
          {name}
        </h2>

        {/* Location, experience, Price */}
        <div className="flex flex-wrap items-center my-4 gap-3 text-gray-600 text-xs sm:text-sm">
          {/* Location */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              viewBox="0 0 11 14"
              fill="none"
            >
              <path
                d="M9.73214 10.3492C9.07473 10.0862 8.18313 9.88887 7.19167 9.78426C8.47439 8.05187 9.89441 5.84337 9.89441 4.39898C9.89441 1.97322 7.92308 -0.000488281 5.5 -0.000488281C3.07662 -0.000488281 1.10529 1.97322 1.10529 4.39898C1.10529 5.2888 1.66432 6.59559 2.76664 8.2828C3.10456 8.80022 3.46507 9.30992 3.81398 9.78366C2.82103 9.88798 1.92764 10.0853 1.26905 10.3483C0.220226 10.7677 0 11.2486 0 11.5785C0 12.8 2.83351 13.4591 5.5 13.4591C8.16619 13.4591 11 12.8 11 11.5785C11 11.2489 10.7801 10.768 9.73214 10.3492Z"
                fill="#7ED957"
              />
            </svg>
            <span className="ml-1">রাজশাহী</span>
          </div>

          {/* Experience */}
          <div className="flex items-center">
            <img src={experienceIcon} alt="" className="w-4 h-4" />
            <span className="ml-1">{experience}</span>
          </div>

          {/* Price */}
          <div className="flex items-center">
            <img src={priceIcon} alt="" className="w-4 h-4" />
            <span className="ml-1">{price}/-</span>
          </div>
        </div>
        {/* button section */}
        <div className="flex gap-2.5">
          {/* Button */}
          <button className="w-full bg-[#7ED957] text-white py-2 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition">
            বিস্তারিত
          </button>
          {/* Button */}
          <button className="w-full bg-[#7ED957] text-white py-2 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition">
            বুক দিন
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#F5F3ED]">
      <h1 className="pt-16 pb-10 text-[#151515] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center">
        আমাদের সার্ভেয়ার সমূহ
      </h1>

      {/* Cards Grid */}
      <div className="px-4 sm:px-8 pb-16">
        <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {surveyors.map((surveyor) => (
            <SurveyorCard
              key={surveyor.id}
              name={surveyor.name}
              img={surveyor.img}
              experience={surveyor.experience}
              price={surveyor.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
