import React, { useState } from 'react';
import { X, MessageSquare, Phone, Hash, Upload } from 'lucide-react';
import testDrive from '../assets/testDrive.png'; 
import car1 from '../assets/SelectModel.png';
import car2 from '../assets/SelectModel.png';
import car3 from '../assets/SelectModel.png';
//Exterior
import img1 from '../assets/Exterior/img1.png';
import img2 from '../assets/Exterior/img2.png';
import img3 from '../assets/Exterior/img3.png';
import img4 from '../assets/Exterior/img4.png';
//Interior
import interiorblack from '../assets/interiorblack.png';
import interiorbrown from '../assets/interiorbrown.png';
import interiorgreen from '../assets/interiorgreen.png';
//banner image
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

const EVTestDrive: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<string>('');
  const [selectedExteriorColor, setSelectedExteriorColor] = useState<string>('');
  const [selectedInteriorColor, setSelectedInteriorColor] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('RIDDARA');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherHusbandName: '',
    gender: '',
    dateOfBirth: '',
    primaryPhone: '',
    secondaryPhone: '',
    state: '',
    city: '',
    addressCNIC: '',
    individualCorporate: '',
    cnic: '',
    cnicFrontImage: null as File | null,
    cnicBackImage: null as File | null,
    statusFilter: '',
    salesTaxRegistration: '',
    ntnNumber: '',
    comments: '',
    termsAccepted: false
  });

  const cars = [
    { id: 'RD6-2WD-Air', name: 'RD6 2WD Air', subtitle: 'Body Type : Truck', image: car1 },
    { id: 'RD6-AWD-Pro', name: 'RD6 AWD Pro', subtitle: 'Body Type : Truck', image: car2 },
    { id: 'RD6-AWD-Ultra', name: 'RD6 AWD Ultra', subtitle: 'Body Type :Truck', image: car3 }
  ];

  const exteriorColors = [
    { id: 'green', name: 'Green', image: img1 },
    { id: 'blue', name: 'Blue', image: img2 },
    { id: 'grey', name: 'Grey', image: img3 },
    { id: 'white', name: 'White', image: img4 }
  ];

  const interiorColors = [
    { id: 'black', name: 'Black', image: interiorblack },
    { id: 'brown', name: 'Brown', image: interiorbrown },
    { id: 'green', name: 'Green', image: interiorgreen }
  ];

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    handleInputChange(field, file);
  };
  
  const handleSubmit = () => {
    console.log('Form submitted', {
      selectedCar,
      selectedExteriorColor,
      selectedInteriorColor,
      formData
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
            onClick={() => handleIconClick('close')}
          />
          <TopIconButton 
            icon={<MessageSquare className="w-5 h-5 text-white" />} 
            onClick={() => handleIconClick('message')}
          />
          <TopIconButton 
            icon={<Phone className="w-5 h-5 text-white" />} 
            onClick={() => handleIconClick('phone')}
          />
          <TopIconButton 
            icon={<Hash className="w-5 h-5 text-white" />} 
            onClick={() => handleIconClick('hash')}
          />
        </div>

        {/* Main content */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-2xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-8 drop-shadow-lg">
              BOOK YOUR DREAM CAR
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed mb-12 opacity-90 drop-shadow-md max-w-lg mx-auto">
              Pick your favorite EV and make it yours with proper convenience and ease.
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
                <span className="text-gray-500/40 text-2xl font-bold tracking-widest mr-2">STEP</span>
                <span className="text-gray-500/40 text-8xl font-bold">1</span>
              </div>
            </div>
            <div className="ml-28 flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">CHOOSE YOUR CAR</h2>
            </div>
            <div className="ml-28 flex justify-center">
              <button 
                onClick={() => setSelectedBrand('ZEEKR')}
                className={`px-8 py-3 text-sm font-semibold rounded-l-md ${
                  selectedBrand === 'ZEEKR' ? 'bg-black text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
              >
                ZEEKR
              </button>
              <button 
                onClick={() => setSelectedBrand('RIDQANA')}
                className={`px-8 py-3 text-sm font-semibold ${
                  selectedBrand === 'RIDQANA' ? 'bg-black text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
              >
                RIDDARA
              </button>
              <button 
                onClick={() => setSelectedBrand('FORTHING')}
                className={`px-8 py-3 text-sm font-semibold ${
                  selectedBrand === 'FORTHING' ? 'bg-black text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
              >
                FORTHING
              </button>
              <button 
                onClick={() => setSelectedBrand('JAEV')}
                className={`px-8 py-3 text-sm font-semibold rounded-r-md ${
                  selectedBrand === 'JAEV' ? 'bg-black text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
              >
                JMEV
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
                      selectedCar === car.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'
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
                    <h4 className="font-bold text-gray-800 text-center text-lg mb-2">{car.name}</h4>
                    <p className="text-gray-600 text-sm text-center">{car.subtitle}</p>
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
                <span className="text-gray-500/40 text-2xl font-bold tracking-widest mr-2">STEP</span>
                <span className="text-gray-500/40 text-8xl font-bold">2</span>
              </div>
            </div>
            <div className="ml-28">
              <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
                EXTERIOR COLOR <span className="text-red-500">*</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {exteriorColors.map((color) => (
                  <div 
                    key={color.id}
                    className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                      selectedExteriorColor === color.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'
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
                    <p className="text-gray-800 text-center font-semibold">{color.name}</p>
                  </div>
                ))}
              </div>

              {/* Interior Color */}
              <h3 className="text-xl font-bold text-gray-800 text-center mb-6 mt-12">
                INTERIOR COLOR <span className="text-red-500">*</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {interiorColors.map((color) => (
                  <div 
                    key={color.id}
                    className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                      selectedInteriorColor === color.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'
                    }`}
                    onClick={() => setSelectedInteriorColor(color.id)}
                  >
                    <div className="mb-4">
                      <img 
                        src={color.image} 
                        alt={color.name}
                        className="w-full h-20 object-cover rounded"
                      />
                    </div>
                    <p className="text-gray-800 text-center font-semibold">{color.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Form */}
          <div className="bg-gray-200/50 p-8 rounded-lg relative">
            {/* Step 3 watermark */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90">
              <div className="flex items-center">
                <span className="text-gray-500/40 text-2xl font-bold tracking-widest mr-2">STEP</span>
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
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
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
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
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
                      onChange={(e) => handleInputChange('fatherHusbandName', e.target.value)}
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
                      onChange={(e) => handleInputChange('gender', e.target.value)}
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
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
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
                        onChange={(e) => handleInputChange('primaryPhone', e.target.value)}
                        className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Secondary Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Secondary Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <select className="w-20 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                        <option>+92</option>
                      </select>
                      <input
                        type="tel"
                        value={formData.secondaryPhone}
                        onChange={(e) => handleInputChange('secondaryPhone', e.target.value)}
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
                      onChange={(e) => handleInputChange('state', e.target.value)}
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
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                  </div>

                  {/* Address as per CNIC */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address as per CNIC <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.addressCNIC}
                      onChange={(e) => handleInputChange('addressCNIC', e.target.value)}
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
                      Individual/Corporate <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.individualCorporate}
                      onChange={(e) => handleInputChange('individualCorporate', e.target.value)}
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
                      onChange={(e) => handleInputChange('cnic', e.target.value)}
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
                        onChange={(e) => handleFileUpload('cnicFrontImage', e)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="cnicFrontImage"
                      />
                      <label
                        htmlFor="cnicFrontImage"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-500 focus-within:ring-2 focus-within:ring-blue-500 text-sm hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                      >
                        <span>{formData.cnicFrontImage ? formData.cnicFrontImage.name : 'Upload/ Select'}</span>
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
                        onChange={(e) => handleFileUpload('cnicBackImage', e)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="cnicBackImage"
                      />
                      <label
                        htmlFor="cnicBackImage"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-500 focus-within:ring-2 focus-within:ring-blue-500 text-sm hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                      >
                        <span>{formData.cnicBackImage ? formData.cnicBackImage.name : 'Upload/ Select'}</span>
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
                      onChange={(e) => handleInputChange('statusFilter', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="">Yes or No</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* NTN Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      NTN Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.ntnNumber}
                      onChange={(e) => handleInputChange('ntnNumber', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* Sales Tax Registration */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sales Tax Registration <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.salesTaxRegistration}
                      onChange={(e) => handleInputChange('salesTaxRegistration', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
                    onChange={(e) => handleInputChange('comments', e.target.value)}
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
                      onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                      className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I have read and accept <a href="#" className="text-blue-500 underline">Terms & Conditions</a>
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
  }
  export default EVTestDrive;