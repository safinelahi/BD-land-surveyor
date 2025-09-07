import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Demo API data
const demoUsers = [
  {
    id: 1,
    name: "রহিম উদ্দিন",
    address: "ঢাকা",
    profession: "সার্ভেয়ার",
    phone: "017XXXXXXXX",
    image: "/assets/images/user1.jpg",
  },
  {
    id: 2,
    name: "করিম মিয়া",
    address: "চট্টগ্রাম",
    profession: "সার্ভেয়ার",
    phone: "018XXXXXXXX",
    image: "/assets/images/user2.jpg",
  },
  {
    id: 3,
    name: "সোহেল আহমেদ",
    address: "খুলনা",
    profession: "ইঞ্জিনিয়ার",
    phone: "019XXXXXXXX",
    image: "/assets/images/user3.jpg",
  },
  {
    id: 4,
    name: "জাহিদ হাসান",
    address: "রাজশাহী",
    profession: "সার্ভেয়ার",
    phone: "016XXXXXXXX",
    image: "/assets/images/user4.jpg",
  },
  {
    id: 5,
    name: "শাহিনুর রহমান",
    address: "সিলেট",
    profession: "সার্ভেয়ার",
    phone: "017XXXXXXXX",
    image: "/assets/images/user5.jpg",
  },
  {
    id: 6,
    name: "হাসান মাহমুদ",
    address: "বরিশাল",
    profession: "কনসালট্যান্ট",
    phone: "015XXXXXXXX",
    image: "/assets/images/user6.jpg",
  },
  {
    id: 7,
    name: "আরিফুল ইসলাম",
    address: "কুমিল্লা",
    profession: "সার্ভেয়ার",
    phone: "017XXXXXXXX",
    image: "/assets/images/user7.jpg",
  },
  {
    id: 8,
    name: "মোস্তাফিজুর রহমান",
    address: "রংপুর",
    profession: "টেকনিশিয়ান",
    phone: "013XXXXXXXX",
    image: "/assets/images/user8.jpg",
  },
  {
    id: 9,
    name: "ইমরান হোসেন",
    address: "কুষ্টিয়া",
    profession: "সার্ভেয়ার",
    phone: "014XXXXXXXX",
    image: "/assets/images/user9.jpg",
  },
  {
    id: 10,
    name: "আলমগীর কবির",
    address: "গাজীপুর",
    profession: "সার্ভেয়ার",
    phone: "019XXXXXXXX",
    image: "/assets/images/user10.jpg",
  },
  {
    id: 11,
    name: "ইমরান হোসেন",
    address: "কুষ্টিয়া",
    profession: "সার্ভেয়ার",
    phone: "014XXXXXXXX",
    image: "/assets/images/user9.jpg",
  },
  {
    id: 12,
    name: "আলমগীর কবির",
    address: "গাজীপুর",
    profession: "সার্ভেয়ার",
    phone: "019XXXXXXXX",
    image: "/assets/images/user10.jpg",
  },
];

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  //API call
  useEffect(() => {
    setTimeout(() => {
      setUsers(demoUsers);
    }, 500);
  }, []);

  const visibleUsers = showAll ? users : users.slice(0, 8);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Navigation buttons */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-wrap bg-[#69DB7C] rounded-2xl px-6 sm:px-12 lg:px-20 py-3 sm:py-5 gap-3 sm:gap-6">
          <Link
            to="/"
            className="px-4 py-2 text-base sm:text-lg lg:text-2xl rounded-full bg-white font-semibold"
          >
            User
          </Link>
          <Link
            to="/transactions"
            className="px-4 py-2 text-base sm:text-lg lg:text-2xl rounded-full transition duration-200 hover:bg-white"
          >
            Transaction
          </Link>
        </div>
      </div>

      {/* Total Users */}
      <div className="flex justify-center mb-6">
        <div className="px-4 sm:px-6 py-2 bg-green-100 rounded text-sm sm:text-base lg:text-lg font-medium">
          Total Users : {users.length}
        </div>
      </div>

      {/* User Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {visibleUsers.map((user) => (
          <div
            key={user.id}
            className="border border-green-200 rounded-lg shadow hover:shadow-lg transition duration-300 p-3"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded"
            />
            <div className="mt-2 text-sm sm:text-base">
              <p>
                <b>নাম:</b> {user.name}
              </p>
              <p>
                <b>ঠিকানা:</b> {user.address}
              </p>
              <p>
                <b>পেশা:</b> {user.profession}
              </p>
              <p>
                <b>মোবাইল নাম্বার:</b> {user.phone}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center">
        {users.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-green-200 hover:bg-green-300 rounded text-sm sm:text-base lg:text-lg transition duration-200"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default UserPage;
