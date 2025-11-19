import Banner from "../Components/Banner";
import StateSection from "../Components/StateSection";
import TrendingApp from "../Components/TrendingApp";

const trendingAppsPromise = fetch("/trendingAppData.json").then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <StateSection></StateSection>
      <TrendingApp trendingAppsPromise={trendingAppsPromise}></TrendingApp>
    </div>
  );
};

export default Home;
