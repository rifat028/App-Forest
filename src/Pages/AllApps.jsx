import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import SingleApp from "../Components/SingleApp";
import AppSearch from "../Components/AppSearch";
import ResultApps from "../Components/ResultApps";
import Spinner from "../Components/Spinner";

const AllApps = () => {
  // const navigation = useNavigation();

  const allApps = useLoaderData();

  // const now = new Date();
  // console.log("Apps page", navigation.state, now.toLocaleTimeString());

  const [searchValue, setSearchValue] = useState("");
  const [resultApps, setResultApp] = useState([]);

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 300); // 0.5s spinner
    return () => clearTimeout(timer);
  }, []);

  if (showSpinner) {
    return (
      <div className="h-screen">
        <Spinner />
      </div>
    );
  }

  // if (!allApps || navigation.state === "loading") {
  //   return <Spinner></Spinner>;
  // }

  const searchHandler = (e) => {
    const searching = e.target.value;
    setSearchValue(searching);
    const resultApps = allApps.filter((app) =>
      app.title.toLowerCase().startsWith(searching.toLowerCase())
    );
    setResultApp(resultApps);
  };

  return (
    <div className="p-5 md:p-20">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          {searchValue
            ? "Apps Matching From Your Search"
            : "Our All Applications"}
        </h1>
        <p className="text-gray-500 text-center py-2 md:py-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <AppSearch
        searchValue={searchValue}
        searchHandler={searchHandler}
        allApps={allApps}
        resultApps={resultApps}
      ></AppSearch>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2 md:gap-4">
        {searchValue ? (
          <ResultApps resultApps={resultApps}></ResultApps>
        ) : (
          allApps.map((app) => <SingleApp key={app.id} app={app}></SingleApp>)
        )}
      </div>
    </div>
  );
};

export default AllApps;
