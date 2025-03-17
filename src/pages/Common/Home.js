import {
  BannerAndMore,
  Booking,
  KeyFeatures,
  Safety,
  SensorGrid,
  Technology,
} from "../../components";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <BannerAndMore />
      <KeyFeatures />
      <Technology />
      <Safety />
      <SensorGrid />
      <Booking />
    </div>
  );
};

export default Home;
