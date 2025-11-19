import { useEffect, useState } from "react";
import SingleApp from "./SingleApp";
import { FaSadTear } from "react-icons/fa";
import Spinner from "./Spinner";

const ResultApps = ({ resultApps }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setShowSpinner(true);
    const timer = setTimeout(() => setShowSpinner(false), 300); // 0.5s spinner
    return () => clearTimeout(timer);
  }, [resultApps]);

  if (showSpinner) {
    return (
      <div className=" text-center md:col-span-2 lg:col-span-4 h-60">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {resultApps.length ? (
        resultApps.map((app) => <SingleApp key={app.id} app={app}></SingleApp>)
      ) : (
        <div className="text-center md:col-span-2 lg:col-span-4 text-2xl md:text-4xl text-gray-500 font-black py-8 md:py-20">
          <div className="flex justify-center pb-5">
            <FaSadTear className="text-9xl text-yellow-400" />
          </div>
          No App Found...!
          <div className="pt-8 md:pt-20">
            <a href="/apps">
              <button className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
                <span className="text-md font-bold text-white">Show All</span>
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultApps;
