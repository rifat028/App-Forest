import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { toast } from "react-toastify";
import { setInstalledApps } from "../Utility/StoredInstalledApp";

const AppDetail = ({ app }) => {
  const appListString = localStorage.getItem("installedApps");
  const appList = appListString ? JSON.parse(appListString) : [];
  const stored = appList.includes(app.id);
  const [install, setInstall] = useState(stored);

  const installHandeller = () => {
    setInstalledApps(app.id);
    toast("App Installed");
  };
  return (
    <div className="flex flex-col md:flex-row w-full border-b-1 border-gray-300 pb-10 items-center">
      <div className="h-50 rounded-full flex justify-center items-center pr-10 my-10 md:my-0">
        <img className="h-60 rounded-full" src={app.image} />
      </div>
      <div className="w-full">
        <div className="pb-7">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <h3 className="text-gray-700">
            Developed by:{" "}
            <span className="text-blue-400 font-semibold">
              {app.companyName}
            </span>
          </h3>
        </div>
        <div className="border-t-1 border-gray-300 pt-7">
          <div className="flex items-center justify-start gap-24 flex-col md:flex-row">
            <div>
              <FaDownload className="text-green-700 text-4xl mb-1" />
              <p className="text-sm text-gray-500">Downloads</p>
              <h1 className="text-4xl font-bold">
                {(app.downloads / 1000000000).toFixed(1)}M
              </h1>
            </div>
            <div>
              <FaStar className="text-yellow-600 text-4xl mb-1" />
              <p className="text-sm text-gray-500">Average Rating</p>
              <h1 className="text-4xl font-bold">{app.ratingAvg}</h1>
            </div>
            <div>
              <MdRateReview className="text-blue-600 text-4xl mb-1" />
              <p className="text-sm text-gray-500">Total Review</p>
              <h1 className="text-4xl font-bold">{`${
                app.reviews / 1000
              }K+`}</h1>
            </div>
          </div>
          <div className="pt-7">
            <button
              disabled={install}
              onClick={() => {
                installHandeller();
                setInstall(true);
              }}
              className={`py-3 px-5 bg-[#00D390] text-white font-bold rounded-md`}
            >
              {install ? "Installed" : `Install Now (${app.size})MB`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
