import React, { useState } from "react";
import { Twitter, Facebook, Linkedin, Mail } from "lucide-react";

interface FormData {
  name: string;
  emailPhone: string;
  invoiceNo: string;
  city: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    emailPhone: "",
    invoiceNo: "",
    city: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Contact Info */}
      <div className="w-1/2 bg-white relative">
        {/* GET IN TOUCH WITH US strip - positioned at the right edge */}
        <div className="absolute top-24 right-0 bg-black text-white py-2 px-16 z-10">
          <div className="text-xs font-light tracking-wider whitespace-nowrap">
            GET IN TOUCH WITH US • GET IN TOUCH WITH US • GET IN TOUCH WITH US •
            GET IN TOUCH WITH US • GET IN TOUCH WITH US • GET IN TOUCH WITH US •
          </div>
        </div>

        {/* Contact Information - positioned much lower */}
        <div className="pt-19 pl-12 pr-8" style={{ marginTop: "180px" }}>
          {/* First Row - Email and Phone */}
          <div className="grid grid-cols-2 gap-20 mb-16">
            <div>
              <h3 className="text-lg font-bold mb-1 uppercase flex items-center">
                <Mail size={16} className="mr-2" />
                EMAIL
              </h3>
              <p className="text-gray-600 text-sm">info@hri-csm.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 uppercase">PHONE</h3>
              <p className="text-gray-600 text-sm">111-457-276</p>
            </div>
          </div>

          {/* Second Row - Address and Social */}
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h3 className="text-lg font-bold mb-1 uppercase">ADDRESS</h3>
              <p className="text-gray-600 text-sm">
                Main Bedian road near DHA Ph#VI, Lahore, Pakistan
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 uppercase">
                WE ARE SOCIAL
              </h3>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="w-6 h-6 border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Twitter size={12} className="text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-6 h-6 border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Facebook size={12} className="text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-6 h-6 border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Linkedin size={12} className="text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-1/2 bg-gray-200 p-12">
        <div className="max-w-md pt-8">
          <h2 className="text-2xl font-bold text-black mb-1">WE'D LOVE TO</h2>
          <h2 className="text-2xl font-bold text-black mb-8">HEAR FROM YOU.</h2>

          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-black mb-2 italic">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-black pb-1 text-black placeholder-gray-500 focus:outline-none focus:border-gray-600"
              />
            </div>

            {/* Email / Phone No. */}
            <div>
              <label className="block text-sm font-medium text-black mb-2 italic">
                Email / Phone No. *
              </label>
              <input
                type="text"
                name="emailPhone"
                value={formData.emailPhone}
                onChange={handleInputChange}
                placeholder="Enter your email or phone number"
                className="w-full bg-transparent border-b border-black pb-1 text-black focus:outline-none focus:border-gray-600"
              />
            </div>

            {/* Invoice No. */}
            <div>
              <label className="block text-sm font-medium text-black mb-2 italic">
                Invoice No. *
              </label>
              <input
                type="text"
                name="invoiceNo"
                value={formData.invoiceNo}
                onChange={handleInputChange}
                placeholder="Enter your invoice number"
                className="w-full bg-transparent border-b border-black pb-1 text-black focus:outline-none focus:border-gray-600"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-black mb-2 italic">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter your city"
                className="w-full bg-transparent border-b border-black pb-1 text-black focus:outline-none focus:border-gray-600"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-black mb-2 italic">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Explain your query in detail"
                rows={3}
                className="w-full bg-transparent border-b border-black pb-1 text-black resize-none focus:outline-none focus:border-gray-600"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8 flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-transparent border border-black px-6 py-2 text-black font-medium hover:bg-black hover:text-white transition-colors duration-300 flex items-center text-sm"
              >
                SUBMIT
                <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
