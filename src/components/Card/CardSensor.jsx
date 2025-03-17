import React from "react";

const CardSensor = ({ img, title }) => {
  return (
    <div className="w-full h-full my-[20px]">
      <img
        className="object-cover w-[360px] h-[300px]   pv:max-md:w-[80%] pv:max-md:mx-auto md:max-xl:w-[100%] mx-auto "
        src={img}
        alt=""
      ></img>
      <p className=" text-[18px]  mt-4 object-cover w-[360px]  pv:max-md:w-[80%] pv:max-md:mx-auto md:max-lg:w-[100%] mx-auto ">
        {title}
      </p>
    </div>
  );
};

export default CardSensor;
