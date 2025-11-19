import { use } from "react";
import SingleApp from "./SingleApp";
import { Link } from "react-router";

const TrendingApp = ({ trendingAppsPromise }) => {
  const trendingApps = use(trendingAppsPromise);
  return (
    <div className="p-5 md:p-20">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Trending Apps
        </h1>
        <p className="text-gray-500 text-center py-2 md:py-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2 md:gap-4">
        {trendingApps.map((app) => (
          <SingleApp key={app.id} app={app}></SingleApp>
        ))}
      </div>
      <div className="flex justify-center pt-10 md:pt-20">
        <a href="/apps">
          <button className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
            <span className="text-md font-bold text-white">Show All</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default TrendingApp;
