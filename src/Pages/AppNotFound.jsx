import React from "react";
import appError from "../assets/App-Error.png";
import { useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center p-5 md:p-20">
      <div>
        <img src={appError} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-black pt-5 md:pt-10 pb-5">
          OPPS! APP NOT FOUND
        </h1>
        <h4 className="text-gray-500 font-semibold">
          The App you are requesting is not found on our system. please try
          another apps
        </h4>
      </div>
      <div className="pt-5">
        <button
          onClick={() => navigate(-1)}
          className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-bold"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default AppNotFound;
