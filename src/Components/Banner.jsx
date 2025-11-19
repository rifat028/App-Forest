import React from "react";
import googlePlay from "../assets/googleplay.png";
import appStore from "../assets/App_Store.png";
import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="px-5 md:px-20 pt-5 md:pt-20">
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl md:text-5xl font-bold text-center">
            We Build <br />
            <span className="text-blue-500">Productive</span> Apps
          </div>
          <div className="text-gray-500 text-center px-5 md:px-65 md:py-10 py-5">
            At AppForest, we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting.Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 justify-center pb-10">
          <a href="https://play.google.com/store/apps?hl=en" target="blank">
            <button className="md:px-6 py-3 rounded-sm border-1 border-[#D2D2D2] w-50 text-sm md:text-lg font-bold hover:bg-blue-50">
              <span className="flex gap-2 md:gap-4 justify-center items-center ">
                <img className="h-5 md:h-8" src={googlePlay} />
                Google Play
              </span>
            </button>
          </a>
          <a href="https://www.apple.com/app-store/" target="blank">
            <button className="md:px-6 py-3 rounded-sm border-1 border-[#D2D2D2] w-50 text-sm md:text-lg font-bold hover:bg-blue-50">
              <span className="flex gap-2 md:gap-4 justify-center items-center ">
                <img className="h-5 md:h-8" src={appStore} />
                App Store
              </span>
            </button>
          </a>
        </div>
        <div className="flex justify-center">
          <img src={hero} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
