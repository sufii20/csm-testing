import React from "react";
import { Check } from "lucide-react";

const SuccessPopup: React.FC = () => {
  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-gray-100 p-10 rounded-lg text-center shadow-lg max-w-md w-full">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="border border-gray-400 bg-gray-200 rounded-full p-2">
            <Check className="w-8 h-8 text-gray-700" strokeWidth={2} />
          </div>
        </div>

        {/* Message */}
        <p className="font-semibold bg-gray-200 text-lg text-gray-800 mb-2">
          Your Request Had Been Submitted Successfully,
          <br />
          Our Representative Will Get In Touch With You Soon!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-5 py-2 border border-gray-700 text-gray-700 rounded-sm text-sm hover:bg-gray-200 transition">
            FAQs
          </button>
          <button className="px-5 py-2 bg-black text-white rounded-sm text-sm hover:bg-gray-600 transition">
            NEW MODELS
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;