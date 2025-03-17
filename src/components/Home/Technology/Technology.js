import imgTech_1 from "../../../assets/Technology/tech_1.webp";
import imgTech_2 from "../../../assets/Technology/tech_2.webp";
import imgTech_3 from "../../../assets/Technology/tech_3.webp";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
const Technology = () => {
  const ref = useRef(null);
  const { inView } = useInView({
    triggerOnce: true, // Hiệu ứng chỉ kích hoạt khi phần tử lần đầu tiên vào viewport
    threshold: 0.1, // Kích hoạt khi 10% phần tử vào viewport
  });

  return (
    <div className="flex flex-col items-center justify-center bg-black py-10 gap-10">
      <div className="relative w-full h-full">
        {/* Phần chữ với overlay */}
        <img
          className="object-cover object-bottom dvmax:object-center w-full h-[800px]"
          src={imgTech_1}
          alt=""
        ></img>
        <div className=" z-10  h-full text-white text-center  pv:max-md:w-[95%] absolute top-10 left-1/2 transform -translate-x-1/2">
          <div className="ani_fadeIn  bg-black bg-opacity-60 py-6 px-14 ">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 italic font-HemiHead">
              <span> 3 Chế độ lái</span> <br className="md:hidden"></br>
              <span>linh hoạt</span>
            </h1>
            <p className="text-lg lg:text-2xl font-BioSan">
              ECO/ NORMAL/ SPORT
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full pv:max-md:h-screen">
        <img
          className="object-cover  h-full w-full "
          src={imgTech_2}
          alt=""
        ></img>
        <div className="absolute z-10 fadeIn  h-full text-white text-center pv:max-md:w-[95%] top-20  left-[20%] pv:max-md:top-10 pv:max-md:left-1/2 pv:max-md:transform pv:max-md:-translate-x-1/2">
          <div className="ani_fadeIn bg-black bg-opacity-60 py-6 px-14 ">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 italic font-HemiHead">
              Vượt mọi giới hạn
            </h1>
            <ul className="  list-disc uppercase text-start text-lg lg:text-2xl  font-BioSan ml-5 ">
              <li className="">80% khung sườn làm từ thép cường lực</li>
              <li className="">hạn chế xoắn-vặn: 23.000 Nm/độ</li>
              <li className="">Khả năng lội nước lên đến 600 mm</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full ">
        <img
          className="object-cover w-full h-[800px]"
          alt=""
          src={imgTech_3}
        ></img>
        <div className="absolute z-10  fadeIn h-full text-white text-center pv:max-md:w-[95%] pv:max-md:-bottom-12  pv:max-md:left-1/2 pv:max-md:transform pv:max-md:-translate-x-1/2  -bottom-96  left-[20%]">
          <div className="ani_fadeIn bg-black bg-opacity-60 py-6 px-14 rounded-md ">
            <h1 className=" text-4xl lg:text-6xl font-bold mb-4 italic font-HemiHead">
              6 Công nghệ thông minh
            </h1>
            <ul className="list-disc uppercase  text-lg lg:text-2xl  font-BioSan text-start ml-5">
              <li className="">màn hình điều khiển trung tâm 14.8 inch</li>
              <li className="">hạn chế xoắn-vặn: 23.000 Nm/độ</li>
              <li className="">Camera 540 HD, giả lập khung gầm trong suốt</li>
              <li className="">HEads up display thông minh</li>
              <li className="">sạc nhanh không dây 50w</li>
              <li className="">hệ thống loa sony âm thanh vòm, 8 loa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
