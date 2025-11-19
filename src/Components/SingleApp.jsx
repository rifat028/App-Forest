import React from "react";
import { FaDownload } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router";

const SingleApp = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  let download = 0;
  {
    download = downloads / 1000000000;
  }
  return (
    <Link to={`/aboutApp/${app.id}`}>
      <div className="h-110 p-2 md:p-4 bg-white rounded-sm hover:bg-blue-50">
        <div className="h-80 bg-[#D9D9D9] flex items-center justify-center bg-cover rounded-md">
          <div className="h-50 rounded-full flex justify-center items-center">
            <img className="h-70 rounded-full" src={image} />
          </div>
        </div>
        <h1 className="font-semibold py-2 md:py-4">{title}</h1>
        <div className="flex justify-between">
          <div className="flex items-center bg-[#F1F5E8] text-[#00D390] px-2 md:px-3 py-1 rounded-sm gap-1">
            <FaDownload className="text-[#00D390]" />
            {download.toFixed(1)}M
          </div>
          <div className="flex items-center bg-[#F1F5E8] text-[#FF8811] px-2 md:px-3 py-1 rounded-sm gap-1">
            <IoStar className="text-[#FF8811]" />
            {ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
