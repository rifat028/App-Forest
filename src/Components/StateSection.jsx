import React from "react";

const StateSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-700 to-indigo-500 py-16 sm:py-24 md:px-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
          Trusted By Millions, Built For You
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
              Total Downloads
            </p>
            <p className="text-5xl sm:text-6xl font-extrabold mb-1">29.6M</p>
            <p className="text-sm opacity-90">21% More Than Last Month</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
              Total Reviews
            </p>
            <p className="text-5xl sm:text-6xl font-extrabold mb-1">906K</p>
            <p className="text-sm opacity-90">46% More Than Last Month</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
              Active Apps
            </p>
            <p className="text-5xl sm:text-6xl font-extrabold mb-1">132+</p>
            <p className="text-sm opacity-90">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateSection;
