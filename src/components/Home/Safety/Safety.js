import React from "react";
import imgSafety_1 from "../../../assets/Safety/safety_1.webp";
import imgSafety_2 from "../../../assets/Safety/safety_2.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Safety = () => {
  // Hook cho các phần tử của trang
  const { ref: img1Ref, inView: img1InView } = useInView({
    threshold: 0.1, // Kích hoạt khi 10% phần tử vào viewport
  });

  const { ref: img2Ref, inView: img2InView } = useInView({
    threshold: 0.1,
  });

  // Định nghĩa hiệu ứng fade-in-up
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 }, // Ẩn phần tử ở dưới, với độ mờ là 0
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Phần tử rõ dần và di chuyển lên
  };
  return (
    <div className="w-full flex flex-col bg-black text-white items-center justify-center">
      <div className="my-[10px]">
        <p className="text-[42px] italic">An toàn vượt trội</p>
      </div>

      {/* Phần đầu */}
      <motion.div
        ref={img1Ref}
        className="w-[60%] mx-auto grid grid-cols-12 gap-8 my-[20px] pv:max-md:w-[95%] md:max-lg:w-[80%]"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={img1InView ? "visible" : "hidden"} // Điều khiển khi phần tử vào viewport
      >
        <div className="col-span-7 pv:max-md:col-span-12 md:max-lg:col-span-12">
          <img
            className="h-[350px] w-full object-cover"
            alt=""
            src={imgSafety_1}
          ></img>
        </div>
        <div className="col-span-5 pv:max-md:col-span-12 md:max-lg:col-span-12 flex flex-col justify-center pv:max-lg:items-center">
          <p className="text-[28px]">An toàn vượt trội</p>
          <ul className="list-disc text-start ml-10 text-[18px]">
            <li className="">Xe được thiết kế theo tiêu chuẩn an toàn 5 sao</li>
            <li className="">
              Trang bị 6 túi khí, được bố trí xung quanh ca bin
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Phần tiếp theo */}
      <motion.div
        ref={img2Ref}
        className="w-[60%] mx-auto grid grid-cols-12 gap-8 my-[20px] pv:max-md:w-[95%] md:max-lg:w-[80%]"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={img2InView ? "visible" : "hidden"}
      >
        <div className="col-span-7 pv:max-md:col-span-12 md:max-lg:col-span-12">
          <img
            className="h-[350px] w-full object-cover"
            alt=""
            src={imgSafety_2}
          ></img>
        </div>
        <div className="col-span-5 pv:max-md:col-span-12 md:max-lg:col-span-12 flex flex-col justify-center pv:max-lg:items-center">
          <p className="text-[28px]">Hệ thống khung gầm chắc chắn</p>
          <ul className="list-disc text-start ml-10 text-[18px]">
            <li className="">Chống vặn xoắn 23.000 Nm/độ</li>
            <li className="">
              Cho cảm giác lái chắc chắn, đặc biệt là các cung đường off-road
            </li>
            <li className="">Bảo vệ an toàn tối đa trong mọi tình huống</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Safety;
