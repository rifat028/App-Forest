import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";
import { UnistallApps } from "../Utility/UninstallApp";
import { toast } from "react-toastify";

const InstalledApp = ({ app, installedApps, setInstalledApps }) => {
  const UninstallHandler = () => {
    toast("App Uninstall Successful...!");
    UnistallApps(app.id);
    const newData = installedApps.filter((CurrApp) => CurrApp.id != app.id);
    setInstalledApps(newData);
  };
  return (
    <div className="flex items-center justify-between w-full bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-2 md:mb-4">
      <div className="flex items-center gap-4 w-full">
        <div className="w-12 h-12 bg-gray-200 rounded-md p-2">
          <img src={app.image} alt="" className="h-full rounded-full" />
        </div>
        <div className="w-full">
          <h3 className="text-gray-900 font-semibold">{app.title}</h3>
          <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
            <div className="flex items-center gap-1 text-emerald-500">
              <FaDownload className="text-xs" />
              <span>{(app.downloads / 1000000000).toFixed(1)}M</span>
            </div>
            <div className="flex items-center gap-1 text-orange-400">
              <FaStar className="text-xs" />
              <span>{app.ratingAvg}</span>
            </div>
            <span>{app.size} MB</span>
          </div>
        </div>
      </div>
      <button
        className="bg-emerald-500 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-emerald-600 transition"
        onClick={() => {
          UninstallHandler();
        }}
        value={"default"}
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApp;
