import React, { useEffect, useState } from "react";
import InstalledApp from "../Components/InstalledApp";
import { useLoaderData } from "react-router";
import Spinner from "../Components/Spinner";

const Installation = () => {
  const allApps = useLoaderData();

  // const navigation = useNavigation();

  // const now = new Date();
  // console.log("Installation page", navigation.state, now.toLocaleTimeString());

  const appListString = localStorage.getItem("installedApps");
  const appList = appListString ? JSON.parse(appListString) : [];
  const appListObj = allApps.filter((app) => appList.includes(app.id));
  const [installedApps, setInstalledApps] = useState(appListObj);

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
  //   return (
  //     <div className="h-screen">
  //       <Spinner />
  //     </div>
  //   );
  // }

  const SortHandller = (e) => {
    const sortType = e.target.value;
    if (sortType === "low") {
      const sortedApps = [...appListObj].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstalledApps(sortedApps);
    } else if (sortType === "high") {
      const sortedApps = [...appListObj].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstalledApps(sortedApps);
    } else {
      setInstalledApps(appListObj);
    }
  };

  return (
    <div className="p-5 md:p-20">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-center py-2 md:py-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between py-5 md:py-10 ">
        <div className="text-lg font-bold">({appList.length}) Apps Found</div>
        <div>
          <select
            className="border border-gray-300 rounded-md text-sm px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={SortHandller}
          >
            <option value="default">Sort By Downloads</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>
      <div>
        {installedApps.map((app) => (
          <InstalledApp
            key={app.id}
            app={app}
            installedApps={installedApps}
            setInstalledApps={setInstalledApps}
          ></InstalledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
