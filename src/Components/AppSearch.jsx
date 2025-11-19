import React from "react";
import { CiSearch } from "react-icons/ci";

const AppSearch = ({ searchValue, searchHandler, allApps, resultApps }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between py-5 md:py-10 ">
      <div className="text-lg font-bold">
        ({searchValue ? resultApps.length : allApps.length}) Apps Found
      </div>
      <div className=" relative">
        <input
          onChange={searchHandler}
          className="border-1 border-gray-400 rounded-md pl-10 pr3 py-1"
          type="text"
          name="search"
          id="search"
          placeholder="Search App"
        />
        <CiSearch className="pl-2 text-3xl absolute top-1" />
      </div>
    </div>
  );
};

export default AppSearch;
