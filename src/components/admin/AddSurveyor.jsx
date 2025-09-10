import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddSurveyor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editingSurveyor = location.state?.surveyor || null;

  const [formData, setFormData] = useState({
    name: editingSurveyor?.name || "",
    address: editingSurveyor?.address || "",
    phone: editingSurveyor?.phone || "",
    image: editingSurveyor?.image || "",
    halfDay: editingSurveyor?.halfDay || "",
    fullDay: editingSurveyor?.fullDay || "",
    skill: editingSurveyor?.skill || "",
    degree: editingSurveyor?.degree || "",
    institute: editingSurveyor?.institute || "",
    training: editingSurveyor?.training || "",
    experience: editingSurveyor?.experience || "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Surveyor Saved:", formData);
    navigate("/surveyors");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F3ED] px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center">
          {editingSurveyor ? "Edit Surveyor" : "Add Surveyor"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="নাম"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="ঠিকানা"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="মোবাইল নাম্বার"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="halfDay"
            placeholder="অর্ধেক বেলা"
            value={formData.halfDay}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="fullDay"
            placeholder="সম্পূর্ণ বেলা"
            value={formData.fullDay}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="skill"
            placeholder="দক্ষতা"
            value={formData.skill}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="degree"
            placeholder="ডিগ্রি"
            value={formData.degree}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="institute"
            placeholder="Institute"
            value={formData.institute}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="training"
            placeholder="ট্রেনিং"
            value={formData.training}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="w-full h-40 object-cover rounded mt-2"
            />
          )}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            {editingSurveyor ? "Update Surveyor" : "Add Surveyor"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSurveyor;
