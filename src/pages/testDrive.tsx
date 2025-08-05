import React, { useState } from 'react';
import { X, MessageSquare, Phone, Hash } from 'lucide-react';
import bannerImage from '../assets/testDrive.png';
import car1 from '../assets/SelectModel.png';
import car2 from '../assets/SelectModel.png';
import car3 from '../assets/SelectModel.png';

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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    zipCode: '',
    city: '',
    state: '',
    additionalInfo: '',
    individualCompany: 'Individual',
    cngTestDrive: '',
    existingCustomer: '',
    atnNumber: '',
    comments: '',
    termsAccepted: false
  });

  const cars = [
    { id: 'RQS-2000-Air', name: 'RQS 2WD Air', subtitle: 'Body Type - Truck', image: car1 },
    { id: 'RQS-6000-Pro', name: 'RQS AWD Pro', subtitle: 'Body Type - Truck', image: car2 },
    { id: 'RQS-6000-Ultra', name: 'RQS AWD Ultra', subtitle: 'Body Type - Truck', image: car3 }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleTestDriveClick = () => {
    console.log('Test drive requested');
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
              REQUEST A TEST DRIVE
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed mb-12 opacity-90 drop-shadow-md max-w-lg mx-auto">
              Pick your favorite EV and schedule a test drive at a time and place that's convenient for you.
            </p>
          </div>
        </div>

        {/* Model badge */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white/10 border border-white/20 rounded-full px-6 py-2 backdrop-blur-sm">
            <span className="text-white font-semibold text-lg tracking-widest">TX</span>
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
                <span className="text-gray-300/40 text-2xl font-bold tracking-widest mr-2">STEP</span>
                <span className="text-gray-300/40 text-8xl font-bold">1</span>
              </div>
            </div>
            <div className="ml-28 flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">CHOOSE YOUR CAR</h2>
            </div>
            <div className="ml-28 flex justify-center">
              <button className="bg-black text-white px-8 py-3 text-sm font-semibold rounded-l-md">
                RIDQANA
              </button>
              <button className="bg-gray-300 text-gray-700 px-8 py-3 text-sm font-semibold hover:bg-gray-400 rounded-r-md">
                FORTHING
              </button>
            </div>
          </div>

          {/* Step 2: Select Variant */}
          <div className="bg-gray-200/50 p-8 rounded-lg mb-8 relative">
            {/* Step 2 watermark */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90">
              <div className="flex items-center">
                <span className="text-gray-300/40 text-2xl font-bold tracking-widest mr-2">STEP</span>
                <span className="text-gray-300/40 text-8xl font-bold">2</span>
              </div>
            </div>
            <div className="ml-28 flex items-center justify-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">SELECT VARIANT</h2>
            </div>
            <div className="ml-28 grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <h3 className="font-bold text-gray-800 text-center text-lg mb-2">{car.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{car.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Form */}
          <div className="bg-gray-200/50 p-8 rounded-lg relative">
            {/* Step 3 watermark */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90">
              <div className="flex items-center">
                <span className="text-gray-300/40 text-2xl font-bold tracking-widest mr-2">STEP</span>
                <span className="text-gray-300/40 text-8xl font-bold">3</span>
              </div>
            </div>
            <div className="ml-28">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* Primary Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Primary Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <select className="w-20 p-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                        <option>+92</option>
                      </select>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="flex-1 p-4 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
                      <select className="w-20 p-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                        <option>+92</option>
                      </select>
                      <input
                        type="tel"
                        className="flex-1 p-4 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* State/Province */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      State/Province <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option></option>
                      <option>Punjab</option>
                      <option>Sindh</option>
                      <option>KPK</option>
                      <option>Balochistan</option>
                    </select>
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
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                  </div>

                  {/* Address as per CNIC */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address as per CNIC <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option>Select Location</option>
                    </select>
                  </div>

                  {/* Individual/Corporate */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Individual/Corporate <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.individualCompany}
                      onChange={(e) => handleInputChange('individualCompany', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option value="Individual">Individual</option>
                      <option value="Corporate">Corporate</option>
                    </select>
                  </div>

                  {/* CNG */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CNG <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.cngTestDrive}
                      onChange={(e) => handleInputChange('cngTestDrive', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* CNG front Image */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CNG front Image <span className="text-red-500">*</span>
                    </label>
                    <button className="w-full p-4 border border-gray-300 rounded-md bg-gray-50 text-left text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm hover:bg-gray-100">
                      Upload/ Select
                    </button>
                  </div>

                  {/* CNG back Image */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CNG back Image <span className="text-red-500">*</span>
                    </label>
                    <button className="w-full p-4 border border-gray-300 rounded-md bg-gray-50 text-left text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm hover:bg-gray-100">
                      Upload/ Select
                    </button>
                  </div>

                  {/* Status (filter non-filter) */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Status (filter non-filter)
                    </label>
                    <select
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option>Yes or No</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>

                  {/* Sales Tax Registration */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sales Tax Registration <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* NTN Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      NTN Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.atnNumber}
                      onChange={(e) => handleInputChange('atnNumber', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder=""
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

                {/* Submit Button - Aligned to the left */}
                <div className="mt-8 flex justify-start">
                  <button
                    onClick={handleTestDriveClick}
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

export default EVTestDrive;