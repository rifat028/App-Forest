import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full text-center md:col-span-2 lg:col-span-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600"></div>
    </div>
  );
};

export default Spinner;
