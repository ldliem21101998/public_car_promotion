import { CardSensor } from "../../../components";
import { dataSensor } from "../../../models/mockdata";
const SensorGrid = () => {
  return (
    <div className="w-full  bg-black text-white ">
      <div className="w-[65%]   mx-auto grid grid-cols-3 gap-10  mt-[40px] mb-[40px] pv:max-md:w-[95%] pv:max-md:grid-cols-1 md:max-xl:grid-cols-1">
        {dataSensor.map((item, index) => {
          return (
            <CardSensor img={item.img} title={item.title} key={item.key} />
          );
        })}
      </div>
    </div>
  );
};

export default SensorGrid;
