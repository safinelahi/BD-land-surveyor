import { FaStar } from "react-icons/fa";
import experienceIcon from "../../assets/icons/Experience.jpg";
import priceIcon from "../../assets/icons/Price.jpg";
import image from "../../assets/images/image.png";

const Cart = () => {

  // Sample card 
  const SurveyorCard = () => (
    <div className="bg-white rounded-2xl border border-[#7ed95659] overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="relative">
        <img src={image} alt="Surveyor" className="w-full h-auto object-cover" />
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
          মোহাম্মদ জাহাঙ্গীর আলম
        </h2>

        {/* Location, Age, Price */}
        <div className="flex flex-wrap items-center my-4 gap-3 text-gray-600 text-xs sm:text-sm">
          <div className="flex items-center">
            {/* Location Icon */}
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
            <span className="ml-1">রেলগেট, রাজশাহী</span>
          </div>

          <div className="flex items-center">
            <img src={experienceIcon} alt="" className="w-4 h-4" />
            <span className="ml-1">৩৬+ বছর</span>
          </div>

          <div className="flex items-center">
            <img src={priceIcon} alt="" className="w-4 h-4" />
            <span className="ml-1">৪০০০/-</span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-[#7ED957] text-white py-2 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition">
          বুক দিন
        </button>
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
          {/* multiple cards */}
          <SurveyorCard />
          <SurveyorCard />
          <SurveyorCard />
          <SurveyorCard />
          <SurveyorCard />
          <SurveyorCard />
          <SurveyorCard />
          <SurveyorCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
