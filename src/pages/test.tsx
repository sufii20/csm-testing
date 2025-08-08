import React, { useState } from "react";
import { X, MessageSquare, Phone, Hash } from "lucide-react";
import testDrive from "../assets/testDrive.png";

interface TopIconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const TopIconButton: React.FC<TopIconButtonProps> = ({ icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-11 h-11 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105 backdrop-blur-sm"
  >
    {icon}
  </button>
);

const TestDrive: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherHusbandName: "",
    gender: "",
    datePrefer: "",
    primaryPhone: "",
    secondaryPhone: "",
    state: "",
    city: "",
    comments: "",
    termsAccepted: false,
  });

  const cars = [
    { id: "riddara", name: "RIDDARA" },
    { id: "forthing", name: "FORTHING" },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted", {
      selectedCar,
      formData,
    });
  };

  const handleIconClick = (iconName: string) => {
    console.log(`${iconName} clicked`);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${testDrive})` }}
        />

        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Top right icons */}
        <div className="absolute top-5 right-5 z-20 flex flex-col gap-4">
          <TopIconButton
            icon={<X className="w-5 h-5 text-white" />}
            onClick={() => handleIconClick("close")}
          />
          <TopIconButton
            icon={<MessageSquare className="w-5 h-5 text-white" />}
            onClick={() => handleIconClick("message")}
          />
          <TopIconButton
            icon={<Phone className="w-5 h-5 text-white" />}
            onClick={() => handleIconClick("phone")}
          />
          <TopIconButton
            icon={<Hash className="w-5 h-5 text-white" />}
            onClick={() => handleIconClick("hash")}
          />
        </div>

        {/* Main content */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-2xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-8 drop-shadow-lg">
              REQUEST A TEST DRIVE
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-12 opacity-90 drop-shadow-md max-w-lg mx-auto">
              Pick your favorite EV and schedule a test drive at a time and
              place that's convenient for you.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Choose Your Car */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              CHOOSE YOUR CAR
            </h2>
            <div className="flex justify-center gap-0 mb-8">
              {cars.map((car) => (
                <button
                  key={car.id}
                  onClick={() => setSelectedCar(car.id)}
                  className={`px-8 py-3 font-semibold ${
                    selectedCar === car.id
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } ${car.id === "ridomba" ? "rounded-l-md" : "rounded-r-md"}`}
                >
                  {car.name}
                </button>
              ))}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              {/* Father/Husband Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Father/Husband Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fatherHusbandName}
                  onChange={(e) =>
                    handleInputChange("fatherHusbandName", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Date You Prefer */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date You Prefer <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.datePrefer}
                  onChange={(e) =>
                    handleInputChange("datePrefer", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              {/* Primary Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Primary Phone <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select className="w-20 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                    <option>+92</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.primaryPhone}
                    onChange={(e) =>
                      handleInputChange("primaryPhone", e.target.value)
                    }
                    className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Secondary Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Secondary Phone
                </label>
                <div className="flex">
                  <select className="w-20 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                    <option>+92</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.secondaryPhone}
                    onChange={(e) =>
                      handleInputChange("secondaryPhone", e.target.value)
                    }
                    className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* State/Province */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  State/Province <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
            </div>

            {/* Comments */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Comments
              </label>
              <textarea
                value={formData.comments}
                onChange={(e) => handleInputChange("comments", e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Enter your comments here..."
              />
            </div>

            {/* Terms and Conditions */}
            <div className="mt-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) =>
                    handleInputChange("termsAccepted", e.target.checked)
                  }
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <span className="text-sm text-gray-700">
                  I have read and accept{" "}
                  <a href="#" className="text-blue-500 underline">
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-start">
              <button
                onClick={handleSubmit}
                className="bg-black text-white px-12 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDrive;
