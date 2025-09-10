import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Demo Data (replace with API later)
const demoSurveyors = [
  { id: 1, name: "রহিম উদ্দিন", address: "ঢাকা", phone: "017XXXXXXXX", image: "/assets/images/user1.jpg" },
  { id: 2, name: "করিম মিয়া", address: "চট্টগ্রাম", phone: "018XXXXXXXX", image: "/assets/images/user2.jpg" },
  { id: 3, name: "সোহেল আহমেদ", address: "খুলনা", phone: "019XXXXXXXX", image: "/assets/images/user3.jpg" },
  { id: 4, name: "জাহিদ হাসান", address: "রাজশাহী", phone: "016XXXXXXXX", image: "/assets/images/user4.jpg" },
  { id: 5, name: "শাহিনুর রহমান", address: "সিলেট", phone: "017XXXXXXXX", image: "/assets/images/user5.jpg" },
  { id: 6, name: "হাসান মাহমুদ", address: "বরিশাল", phone: "015XXXXXXXX", image: "/assets/images/user6.jpg" },
  { id: 7, name: "আরিফুল ইসলাম", address: "কুমিল্লা", phone: "017XXXXXXXX", image: "/assets/images/user7.jpg" },
  { id: 8, name: "মোস্তাফিজুর রহমান", address: "রংপুর", phone: "013XXXXXXXX", image: "/assets/images/user8.jpg" },
];

const AdminSurveyor = () => {
  const [surveyors, setSurveyors] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  // Load data
  useEffect(() => {
    setSurveyors(demoSurveyors);
  }, []);

  // Slice for "See More"
  const visibleSurveyors = showAll ? surveyors : surveyors.slice(0, 6);

  // ✅ Delete function
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("আপনি কি নিশ্চিতভাবে এই সার্ভেয়ারকে মুছে ফেলতে চান?");
    if (confirmDelete) {
      setSurveyors((prev) => prev.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="p-4">
      {/* Navigation buttons */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-[#69DB7C] rounded-2xl px-20 py-5 gap-4">
          <button
            onClick={() => navigate("/users")}
            className="px-4 py-2 text-2xl rounded-full transition duration-200 hover:bg-white"
          >
            User
          </button>
          <button
            onClick={() => navigate("/surveyors")}
            className="px-4 py-2 text-2xl rounded-full bg-white"
          >
            Surveyor
          </button>
          <button
            onClick={() => navigate("/transactions")}
            className="px-4 py-2 text-2xl rounded-full transition duration-200 hover:bg-white"
          >
            Transaction
          </button>
        </div>
      </div>

      {/* Top Info */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="px-6 py-2 bg-green-100 rounded">
          Total Surveyor : {surveyors.length}
        </div>
        <button
          onClick={() => navigate("/add-surveyor")}
          className="px-6 py-2 bg-green-200 rounded hover:bg-green-300 transition"
        >
          Add Surveyor
        </button>
      </div>

      {/* Surveyor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {visibleSurveyors.map((s) => (
          <div
            key={s.id}
            className="border border-green-200 rounded-lg shadow p-3"
          >
            <img
              src={s.image}
              alt={s.name}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-2 text-sm">
              <p><b>নাম:</b> {s.name}</p>
              <p><b>ঠিকানা:</b> {s.address}</p>
              <p><b>মোবাইল নাম্বার:</b> {s.phone}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleDelete(s.id)}
                className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => navigate("/add-surveyor", { state: { surveyor: s } })}
                className="flex-1 bg-green-500 text-white py-1 rounded hover:bg-green-600"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center">
        {surveyors.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-green-200 rounded"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminSurveyor;
