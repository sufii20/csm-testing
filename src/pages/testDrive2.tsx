import React, { useState, useRef, useEffect } from "react";
import {
  X,
  MessageSquare,
  Phone,
  Hash,
  Upload,
  ChevronLeft,
  Download,
} from "lucide-react";

// Mock image URLs - replace with your actual images
import testDrive from "../assets/testDrive.png";
// FORTHING Images - Add these to your assets folder
import forthingCar1 from "../assets/Forthing/exterior/carBlack.png";
import forthingCar2 from "../assets/Forthing/exterior/carBlue.png";
import forthingCar3 from "../assets/Forthing/exterior/cargrey.png";

// FORTHING Exterior
import forthingExterior1 from "../assets/Forthing/exterior/carBlack.png";
import forthingExterior2 from "../assets/Forthing/exterior/carBlue.png";
import forthingExterior3 from "../assets/Forthing/exterior/carGreen.png";
import forthingExterior4 from "../assets/Forthing/exterior/carGrey.png";
import forthingExterior5 from "../assets/Forthing/exterior/carWhite.png";
// FORTHING Interior
import forthingInteriorBlack from "../assets/Forthing/interior/forthing_int_black.png";
import forthingInteriorBrown from "../assets/Forthing/interior/forthing-int.jpg";
import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";

const bannerImage = testDrive;

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

interface OrderData {
  selectedCar: string;
  selectedExteriorColor: string;
  selectedInteriorColor: string;
  selectedBrand: string;
  formData: {
    firstName: string;
    lastName: string;
    fatherHusbandName: string;
    gender: string;
    dateOfBirth: string;
    primaryPhone: string;
    secondaryPhone: string;
    state: string;
    city: string;
    addressCNIC: string;
    individualCorporate: string;
    cnic: string;
    cnicFrontImage: File | null;
    cnicBackImage: File | null;
    statusFilter: string;
    salesTaxRegistration: string;
    ntnNumber: string;
    advancePayment: string;
    comments: string;
    termsAccepted: boolean;
  };
}

const EVTestDrive: React.FC<{ onSubmit: (data: OrderData) => void }> = ({
  onSubmit,
}) => {
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [selectedExteriorColor, setSelectedExteriorColor] = useState<string>("");
  const [selectedInteriorColor, setSelectedInteriorColor] = useState<string>("");
  const [selectedBrand] = useState<string>("RIDDARA");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherHusbandName: "",
    gender: "",
    dateOfBirth: "",
    primaryPhone: "",
    secondaryPhone: "",
    state: "",
    city: "",
    addressCNIC: "",
    individualCorporate: "",
    cnic: "",
    cnicFrontImage: null as File | null,
    cnicBackImage: null as File | null,
    statusFilter: "",
    salesTaxRegistration: "",
    ntnNumber: "",
    advancePayment: "",
    comments: "",
    termsAccepted: false,
  });

  // Color mapping based on your requirements
  const colorMapping = {
    'green': ['black'],
    'blue': ['black'],
    'white': ['brown'],
    'grey': ['black', 'brown'],
    'black': ['black', 'brown'],
  };

  // Reset interior color selection when exterior color changes
  useEffect(() => {
    if (selectedExteriorColor) {
      const availableInteriorColors = colorMapping[selectedExteriorColor as keyof typeof colorMapping] || [];
      
      // If current interior color is not available for the new exterior color, reset it
      if (!availableInteriorColors.includes(selectedInteriorColor)) {
        setSelectedInteriorColor('');
      }
    }
  }, [selectedExteriorColor, selectedInteriorColor]);

  // Get available interior colors based on selected exterior color
  const getAvailableInteriorColors = () => {
    if (!selectedExteriorColor) return ['black', 'brown']; // All colors available if no exterior selected
    return colorMapping[selectedExteriorColor as keyof typeof colorMapping] || ['black', 'brown'];
  };

  const cars = [
    {
      id: "RD6-2WD-Air",
      name: "RD6 2WD Air",
      subtitle: "Body Type : Truck",
      image: forthingCar1,
      price: "7500000",
    },
    {
      id: "RD6-AWD-Pro",
      name: "RD6 AWD Pro",
      subtitle: "Body Type : Truck",
      image: forthingCar2,
      price: "8250000",
    },
    {
      id: "RD6-AWD-Ultra",
      name: "RD6 AWD Ultra",
      subtitle: "Body Type : Truck",
      image: forthingCar3,
      price: "8990000",
    },
  ];

  const exteriorColors = [
    { id: "green", name: "Green", image: forthingExterior3 },
    { id: "blue", name: "Blue", image: forthingExterior2 },
    { id: "grey", name: "Grey", image: forthingExterior4 },
    { id: "black", name: "Black", image: forthingExterior1 },
    { id: "white", name: "White", image: forthingExterior5 },
  ];

  const interiorColors = [
    { id: "black", name: "Black", image: forthingInteriorBlack },
    { id: "brown", name: "Brown", image: forthingInteriorBrown },
  ];

  const handleInputChange = (
    field: string,
    value: string | boolean | File | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (
    field: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] || null;
    handleInputChange(field, file);
  };

  const handleSubmit = () => {
    console.log("Submit button clicked");

    // Basic validation
    if (!selectedCar || !selectedExteriorColor || !selectedInteriorColor) {
      alert("Please select a car, exterior color, and interior color.");
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.primaryPhone) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!formData.advancePayment) {
      alert("Please select an advance payment percentage.");
      return;
    }

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    console.log("Validation passed, calling onSubmit");

    // Navigate to review page with all selected data
    onSubmit({
      selectedCar,
      selectedExteriorColor,
      selectedInteriorColor,
      selectedBrand,
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
          style={{ backgroundImage: `url(${bannerImage})` }}
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
              BOOK YOUR DREAM CAR
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-12 opacity-90 drop-shadow-md max-w-lg mx-auto">
              Pick your favorite EV and make it yours with proper convenience
              and ease.
            </p>
          </div>
        </div>

        {/* Model badge */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white/10 border border-white/20 rounded-full px-6 py-2 backdrop-blur-sm">
            {/* <span className="text-white font-semibold text-lg tracking-widest">TX</span> */}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Step 1: Choose Your Car */}
          <div className="bg-gray-200/50 p-8 rounded-lg mb-8 relative">
            {/* Step 1 watermark */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90">
              <div className="flex items-center">
                <span className="text-gray-500/40 text-2xl font-bold tracking-widest mr-2">
                  STEP
                </span>
                <span className="text-gray-500/40 text-5xl font-bold">1</span>
              </div>
            </div>
            <div className="ml-28 flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                CHOOSE YOUR CAR
              </h2>
            </div>
            <div className="ml-28 flex justify-center">
              <button className="px-8 py-3 text-sm font-semibold rounded-md bg-black text-white cursor-default">
                FORTHING
              </button>
            </div>

            {/* Select Variant */}
            <div className="ml-28 mt-12">
              <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
                SELECT VARIANT <span className="text-red-500">*</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cars.map((car) => (
                  <div
                    key={car.id}
                    className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                      selectedCar === car.id
                        ? "ring-2 ring-blue-500 bg-blue-50"
                        : "hover:shadow-lg"
                    }`}
                    onClick={() => setSelectedCar(car.id)}
                  >
                    <div className="mb-4">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-24 object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-800 text-center text-lg mb-2">
                      {car.name}
                    </h4>
                    <p className="text-gray-600 text-sm text-center">
                      {car.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2: Exterior Color */}
          <div className="bg-gray-200/50 p-8 rounded-lg mb-8 relative">
            {/* Step 2 watermark */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90">
              <div className="flex items-center">
                <span className="text-gray-500/40 text-2xl font-bold tracking-widest mr-2">
                  STEP
                </span>
                <span className="text-gray-500/40 text-5xl font-bold">2</span>
              </div>
            </div>
            <div className="ml-28">
              <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
                EXTERIOR COLOR <span className="text-red-500">*</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {exteriorColors.map((color) => (
                  <div
                    key={color.id}
                    className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                      selectedExteriorColor === color.id
                        ? "ring-2 ring-blue-500 bg-blue-50"
                        : "hover:shadow-lg"
                    }`}
                    onClick={() => setSelectedExteriorColor(color.id)}
                  >
                    <div className="mb-4">
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-full h-20 object-cover rounded"
                      />
                    </div>
                    <p className="text-gray-800 text-center font-semibold">
                      {color.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Color Restriction Info */}
              {selectedExteriorColor && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Available Interior Colors for {exteriorColors.find(c => c.id === selectedExteriorColor)?.name}:</strong>{" "}
                    {getAvailableInteriorColors().map(color => 
                      color.charAt(0).toUpperCase() + color.slice(1)
                    ).join(', ')}
                  </p>
                </div>
              )}

              {/* Interior Color */}
              <h3 className="text-xl font-bold text-gray-800 text-center mb-6 mt-12">
                INTERIOR COLOR <span className="text-red-500">*</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {interiorColors.map((color) => {
                  const isAvailable = getAvailableInteriorColors().includes(color.id);
                  return (
                    <div
                      key={color.id}
                      className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ${
                        !isAvailable 
                          ? "opacity-50 cursor-not-allowed bg-gray-100" 
                          : selectedInteriorColor === color.id
                          ? "ring-2 ring-blue-500 bg-blue-50 cursor-pointer"
                          : "hover:shadow-lg cursor-pointer"
                      }`}
                      onClick={() => isAvailable && setSelectedInteriorColor(color.id)}
                    >
                      <div className="mb-4 overflow-hidden rounded">
                        <img
                          src={color.image}
                          alt={color.name}
                          className="w-full h-32 object-contain"
                        />
                      </div>
                      <p className={`text-center font-semibold ${
                        !isAvailable ? "text-gray-400" : "text-gray-800"
                      }`}>
                        {color.name}
                        {!isAvailable && (
                          <span className="block text-xs text-gray-400 mt-1">
                            Not available for selected exterior color
                          </span>
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step 3: Complete Form */}
          <div className="bg-gray-200/50 p-8 rounded-lg relative">
            {/* Step 3 watermark */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90">
              <div className="flex items-center">
                <span className="text-gray-500/40 text-2xl font-bold tracking-widest mr-2">
                  STEP
                </span>
                <span className="text-gray-500/40 text-5xl font-bold">3</span>
              </div>
            </div>
            <div className="ml-28">
              <div className="bg-white p-6 rounded-lg shadow-md">
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
                      Father/Husband Name{" "}
                      <span className="text-red-500">*</span>
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
                      onChange={(e) =>
                        handleInputChange("gender", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange("dateOfBirth", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
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
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                  </div>

                  {/* Address as per CNIC */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address as per CNIC{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.addressCNIC}
                      onChange={(e) =>
                        handleInputChange("addressCNIC", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="">Select Location</option>
                      <option value="current">Current Address</option>
                      <option value="permanent">Permanent Address</option>
                    </select>
                  </div>

                  {/* Individual/Corporate */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Individual/Corporate{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.individualCorporate}
                      onChange={(e) =>
                        handleInputChange("individualCorporate", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option value="Individual">Individual</option>
                      <option value="Corporate">Corporate</option>
                    </select>
                  </div>

                  {/* CNIC */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CNIC <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.cnic}
                      onChange={(e) =>
                        handleInputChange("cnic", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="e.g. 12345-1234567-1"
                      required
                    />
                  </div>

                  {/* CNIC Front Image */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CNIC Front Image <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("cnicFrontImage", e)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="cnicFrontImage"
                      />
                      <label
                        htmlFor="cnicFrontImage"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-500 focus-within:ring-2 focus-within:ring-blue-500 text-sm hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                      >
                        <span>
                          {formData.cnicFrontImage
                            ? formData.cnicFrontImage.name
                            : "Upload/ Select"}
                        </span>
                        <Upload className="w-4 h-4" />
                      </label>
                    </div>
                  </div>

                  {/* CNIC Back Image */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CNIC Back Image <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("cnicBackImage", e)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="cnicBackImage"
                      />
                      <label
                        htmlFor="cnicBackImage"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-500 focus-within:ring-2 focus-within:ring-blue-500 text-sm hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                      >
                        <span>
                          {formData.cnicBackImage
                            ? formData.cnicBackImage.name
                            : "Upload/ Select"}
                        </span>
                        <Upload className="w-4 h-4" />
                      </label>
                    </div>
                  </div>

                  {/* Status (filter non-filter) */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Status (filter non-filter)
                    </label>
                    <select
                      value={formData.statusFilter}
                      onChange={(e) =>
                        handleInputChange("statusFilter", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="">Yes or No</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* Sales Tax Registration */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sales Tax Registration
                    </label>
                    <input
                      type="text"
                      value={formData.salesTaxRegistration}
                      onChange={(e) =>
                        handleInputChange(
                          "salesTaxRegistration",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* NTN Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      NTN Number
                    </label>
                    <input
                      type="text"
                      value={formData.ntnNumber}
                      onChange={(e) =>
                        handleInputChange("ntnNumber", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* Advance Payment */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Advance Payment <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.advancePayment}
                      onChange={(e) =>
                        handleInputChange("advancePayment", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option value="10">10%</option>
                      <option value="20">20%</option>
                      <option value="30">30%</option>
                      <option value="40">40%</option>
                      <option value="50">50%</option>
                      <option value="60">60%</option>
                    </select>
                  </div>
                </div>

                {/* Comments */}
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Comments
                  </label>
                  <textarea
                    value={formData.comments}
                    onChange={(e) =>
                      handleInputChange("comments", e.target.value)
                    }
                    rows={4}
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
                    className="bg-black text-white px-12 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderReview: React.FC<{
  orderData: OrderData;
  onBackToVehicle: () => void;
}> = ({ orderData, onBackToVehicle }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFile(event.target.files[0]);
    }
  };

  // Get selected car details
  const cars = [
    {
      id: "RD6-2WD-Air",
      name: "RD6 2WD Air",
      subtitle: "Body Type : Truck",
      image: forthingCar1,
      price: "7500000",
    },
    {
      id: "RD6-AWD-Pro",
      name: "RD6 AWD Pro",
      subtitle: "Body Type : Truck",
      image: forthingCar2,
      price: "8250000",
    },
    {
      id: "RD6-AWD-Ultra",
      name: "RD6 AWD Ultra",
      subtitle: "Body Type : Truck",
      image: forthingCar3,
      price: "8990000",
    },
  ];

  const exteriorColors = [
    { id: "green", name: "Green", image: forthingExterior3 },
    { id: "blue", name: "Blue", image: forthingExterior2 },
    { id: "grey", name: "Grey", image: forthingExterior4 },
    { id: "black", name: "Black", image: forthingExterior1 },
    { id: "white", name: "White", image: forthingExterior5 },
  ];

  const interiorColors = [
    { id: "black", name: "Black", image: forthingInteriorBlack },
    { id: "brown", name: "Brown", image: forthingInteriorBrown },
    { id: "green", name: "Green", image: forthingInteriorBlack },
  ];

  const selectedCarDetails = cars.find(
    (car) => car.id === orderData.selectedCar
  );
  const selectedExteriorColorDetails = exteriorColors.find(
    (color) => color.id === orderData.selectedExteriorColor
  );
  const selectedInteriorColorDetails = interiorColors.find(
    (color) => color.id === orderData.selectedInteriorColor
  );

  // Calculate prices based on selected car and advance payment percentage
  const basePrice = selectedCarDetails?.price
    ? parseInt(selectedCarDetails.price)
    : 8990000;

  const advancePaymentPercentage = orderData.formData.advancePayment
    ? parseInt(orderData.formData.advancePayment)
    : 20; // Default to 20%

  const advancePayment = Math.floor(
    basePrice * (advancePaymentPercentage / 100)
  );
  const remainingAmount = basePrice - advancePayment;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back to Vehicle */}
        <button
          onClick={onBackToVehicle}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Vehicle
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="p-8">
            <h1 className="text-3xl font-light text-gray-800 mb-8">
              Review Your Order
            </h1>

            {/* Vehicle Info and Image */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <h2 className="text-xl text-gray-700 mb-6">
                  {orderData.selectedBrand}{" "}
                  {selectedCarDetails?.name || "Selected Vehicle"}
                </h2>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-8 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">UP TO</div>
                    <div className="text-xl font-semibold text-gray-800">
                      1100 km*
                    </div>
                    <div className="text-gray-500">Driving Range</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">AS FAST AS</div>
                    <div className="text-xl font-semibold text-gray-800">
                      10.9 Sec*
                    </div>
                    <div className="text-gray-500">To Reach 100</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">UP TO</div>
                    <div className="text-xl font-semibold text-gray-800">
                     31.94 KWh*
                    </div>
                    <div className="text-gray-500"> Capacity</div>
                  </div>
                </div>
              </div>

              {/* Car Image */}
              <div className="lg:w-1/2 flex justify-center">
                <img
                  src={selectedCarDetails?.image || forthingCar1}
                  alt={selectedCarDetails?.name || "Selected Vehicle"}
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
            </div>

            {/* Download Specs Button */}
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Download Specs
            </button>
          </div>

          {/* Order Details */}
          <div className="border-t border-gray-200 p-8">
            <h3 className="text-xl text-gray-700 mb-6">Order Details</h3>

            <div className="space-y-6">
              {/* Variant */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Variant</span>
                <div className="flex items-center">
                  <span className="text-gray-800 mr-4">
                    {selectedCarDetails?.name || "Selected Variant"}
                  </span>
                  <span className="text-gray-800 font-semibold">
                    {basePrice.toLocaleString()} PKR
                  </span>
                </div>
              </div>

              {/* Exterior Color */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Exterior color</span>
                <div className="flex items-center">
                  <span className="text-gray-800 mr-4 capitalize">
                    {selectedExteriorColorDetails?.name || "Selected Color"}
                  </span>
                  <div className="w-12 h-8 rounded">
                    <img
                      src={selectedExteriorColorDetails?.image || forthingExterior3}
                      alt={
                        selectedExteriorColorDetails?.name ||
                        "Selected exterior color"
                      }
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Interior Color */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Interior color</span>
                <div className="flex items-center">
                  <span className="text-gray-800 mr-4 capitalize">
                    {selectedInteriorColorDetails?.name || "Selected Color"}
                  </span>
                  <div className="w-12 h-8 rounded">
                    <img
                      src={selectedInteriorColorDetails?.image || forthingInteriorBlack}
                      alt={
                        selectedInteriorColorDetails?.name ||
                        "Selected interior color"
                      }
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Customer Name</span>
                <span className="text-gray-800">
                  {orderData.formData.firstName} {orderData.formData.lastName}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Father/Husband Name</span>
                <span className="text-gray-800">
                  {orderData.formData.fatherHusbandName || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Gender</span>
                <span className="text-gray-800">
                  {orderData.formData.gender || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Date of Birth</span>
                <span className="text-gray-800">
                  {orderData.formData.dateOfBirth || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Primary Phone</span>
                <span className="text-gray-800">
                  +92 {orderData.formData.primaryPhone}
                </span>
              </div>

              {orderData.formData.secondaryPhone && (
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <span className="text-gray-600">Secondary Phone</span>
                  <span className="text-gray-800">
                    +92 {orderData.formData.secondaryPhone}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Location</span>
                <span className="text-gray-800">
                  {orderData.formData.city}, {orderData.formData.state}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Address as per CNIC</span>
                <span className="text-gray-800">
                  {orderData.formData.addressCNIC || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Individual/Corporate</span>
                <span className="text-gray-800">
                  {orderData.formData.individualCorporate || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">CNIC</span>
                <span className="text-gray-800">
                  {orderData.formData.cnic || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">CNIC Images</span>
                <span className="text-gray-800">
                  {orderData.formData.cnicFrontImage ? "Front: ✓" : "Front: ✗"}
                  {" | "}
                  {orderData.formData.cnicBackImage ? "Back: ✓" : "Back: ✗"}
                </span>
              </div>

              {orderData.formData.statusFilter && (
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <span className="text-gray-600">Status Filter</span>
                  <span className="text-gray-800">
                    {orderData.formData.statusFilter}
                  </span>
                </div>
              )}

              {orderData.formData.salesTaxRegistration && (
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <span className="text-gray-600">Sales Tax Registration</span>
                  <span className="text-gray-800">
                    {orderData.formData.salesTaxRegistration}
                  </span>
                </div>
              )}

              {orderData.formData.ntnNumber && (
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <span className="text-gray-600">NTN Number</span>
                  <span className="text-gray-800">
                    {orderData.formData.ntnNumber}
                  </span>
                </div>
              )}

              {/* Advance Payment Percentage */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Selected Advance Payment</span>
                <span className="text-gray-800 font-semibold">
                  {advancePaymentPercentage}%
                </span>
              </div>

              {orderData.formData.comments && (
                <div className="flex flex-col py-4 border-b border-gray-100">
                  <span className="text-gray-600 mb-2">Comments</span>
                  <span className="text-gray-800 text-sm bg-gray-50 p-3 rounded">
                    {orderData.formData.comments}
                  </span>
                </div>
              )}
            </div>

            {/* Pricing */}
            <div className="mt-8 space-y-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Company Price</span>
                <span className="text-gray-800">
                  {basePrice.toLocaleString()} PKR
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-600">
                  Freight / Insurance Charges
                </span>
                <span className="text-gray-800">0 PKR</span>
              </div>

              <div className="flex justify-between py-2 border-t border-gray-200 pt-4">
                <span className="text-gray-700 font-medium">Gross Price</span>
                <span className="text-gray-800 font-semibold">
                  {basePrice.toLocaleString()} PKR
                </span>
              </div>

              <div className="flex justify-between py-2 bg-blue-50 px-4 rounded">
                <span className="text-gray-700 font-medium">
                  Advance Payment ({advancePaymentPercentage}%)
                </span>
                <span className="text-blue-600 font-semibold text-lg">
                  {advancePayment.toLocaleString()} PKR
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">
                  Remaining Amount
                </span>
                <span className="text-gray-800 font-semibold">
                  {remainingAmount.toLocaleString()} PKR
                </span>
              </div>
            </div>

            {/* Footer Notes */}
            <div className="mt-6 text-xs text-gray-500 space-y-2">
              <p>
                *Performance related metrics are based on controlled conditions.
                Actual performance will vary depending on driving behaviour,
                environment and other influencing factors.
              </p>
              <p>
                <strong>Note:</strong> Bank charges may apply. The remaining
                amount of {remainingAmount.toLocaleString()} PKR will be due
                upon delivery.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-8 border-t border-gray-200 pt-6 gap-4">
              {/* Upload Button */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleUploadClick}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Pay order Slip
                </button>
                {uploadedFile && (
                  <span className="text-sm text-gray-600">
                    {uploadedFile.name}
                  </span>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </div>

              {/* Save & Submit */}
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    alert(
                      `Order submitted successfully!\n\nOrder Summary:\n- Vehicle: ${
                        orderData.selectedBrand
                      } ${
                        selectedCarDetails?.name
                      }\n- Total Price: ${basePrice.toLocaleString()} PKR\n- Advance Payment (${advancePaymentPercentage}%): ${advancePayment.toLocaleString()} PKR\n- Remaining: ${remainingAmount.toLocaleString()} PKR\n\nYou will receive a confirmation email shortly.`
                    )
                  }
                  className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                  Save & Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<"testdrive" | "review">(
    "testdrive"
  );
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  const handleTestDriveSubmit = (data: OrderData) => {
    console.log("Received order data:", data);
    setOrderData(data);
    setCurrentView("review");
  };

  const handleBackToVehicle = () => {
    setCurrentView("testdrive");
  };

  return (
    <div>
      {currentView === "testdrive" && (
        <EVTestDrive onSubmit={handleTestDriveSubmit} />
      )}
      {currentView === "review" && orderData && (
        <OrderReview
          orderData={orderData}
          onBackToVehicle={handleBackToVehicle}
        />
      )}
      {/* Newsletter Section */}
      <Newsletter />
      <div className="border-t border-gray-300" />
      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainApp;