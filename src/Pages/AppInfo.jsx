import React from "react";
import { useLoaderData, useParams } from "react-router";
import AppDetail from "../Components/AppDetail";
import RatingChart from "../Components/RatingChart";

const AppInfo = () => {
  const allApp = useLoaderData();
  const { id } = useParams();
  const app = allApp.find((app) => app.id == id);

  return (
    <div className="p-5 md:p-20 w-full">
      <AppDetail app={app}></AppDetail>
      <div className="pb-10 border-b-1 border-gray-300">
        <h1 className="text-2xl font-bold">Ratings</h1>
        <RatingChart ratingData={app.ratings}></RatingChart>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold">Description</h1>
        <div className="text-gray-500 text-justify">{app.description}</div>
      </div>
    </div>
  );
};

export default AppInfo;
