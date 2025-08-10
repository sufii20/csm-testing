import React from "react";
import { Share2 } from "lucide-react";
import bannerImg from "../assets/CarrerBanner.png"; // replace with your banner image

const JobPosting: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Banner */}
      <div className="relative">
        <img
          src={bannerImg}
          alt="We are hiring"
          className="w-full h-60 object-cover"
        />
        <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
          WE ARE HIRING
        </div>
      </div>

      {/* Job Details Section */}
      <div className="relative p-6">
        {/* Share Icon on Top Right */}
        <button className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full">
          <Share2 size={20} />
        </button>

        {/* All Text Left Aligned */}
        <p className="text-sm text-gray-500">23-06-2025</p>
        <h1 className="text-xl font-semibold">Executive - Parts</h1>
        <p className="text-sm text-gray-500 mt-1">
          Lhr &nbsp;|&nbsp; 3-5 Years Experience &nbsp;|&nbsp; Deadline: Aug 1, 2025
        </p>

        <ul className="mt-4 text-left space-y-2 text-sm leading-relaxed">
          <li>
            Manage Daily Issuance And Return Of Parts And Consumables, Ensure Accurate EPIP
            Entries, Bin Maintenance, And Labeling Of EV Parts. Monitor Stock Levels Of
            High-Demand Items Like Battery Packs And Connectors.
          </li>
          <li>
            Coordinate With Service Advisors For Part Reservations And Availability.
          </li>
          <li>
            Conduct Regular Stock Reconciliations And Maintain Safety Compliance.
          </li>
          <li>
            Support HQ In Stock Forecasting And Part Usage Reporting.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobPosting;