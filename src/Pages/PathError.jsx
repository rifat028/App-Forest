import React from "react";
import { useNavigate } from "react-router";
import pathError from "../assets/error-404.png";

const PathError = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center p-5 md:p-20">
      <div>
        <img src={pathError} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-black pt-5 md:pt-10 pb-5">
          Oops, page not found!
        </h1>
        <h4 className="text-gray-500 font-semibold">
          The page you are looking for is not available.
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

export default PathError;
