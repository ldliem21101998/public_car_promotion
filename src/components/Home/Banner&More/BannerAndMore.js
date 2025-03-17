import LeftCar from "../../../assests/BannerAndMore/BannerAndMore_leftcar.webp";
import LeftBg from "../../../assests/BannerAndMore/BannerAndMore_leftbg.webp";
import Shadow from "../../../assests/BannerAndMore/BannerAndMore_shadow.webp";
import RightCar from "../../../assests/BannerAndMore/BannerAndMore_rightcar.webp";
import RightBg from "../../../assests/BannerAndMore/BannerAndMore_rightbg.webp";
import BannerBg from "../../../assests/BannerAndMore/banner.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "../../../utils/common/animation";
const BannerAndMore = () => {
  const leftBgRef = useRef(null);
  const leftCarRef = useRef(null);
  const rightBgRef = useRef(null);
  const rightCarRef = useRef(null);
  const textRef = useRef(null);

  const isLeftBgInView = useInView(leftBgRef, { once: true });
  const isLeftCarInView = useInView(leftCarRef, { once: true });
  const isRightBgInView = useInView(rightBgRef, { once: true });
  const isRightCarInView = useInView(rightCarRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });

  // Tạo ref và kiểm tra trạng thái inView
  const text1Ref = useRef(null);
  const isText1InView = useInView(text1Ref, { once: true, threshold: 0.1 });

  const text2Ref = useRef(null);
  const isText2InView = useInView(text2Ref, { once: true, threshold: 0.1 });

  const text3Ref = useRef(null);
  const isText3InView = useInView(text2Ref, { once: true, threshold: 0.1 });

  const text4Ref = useRef(null);
  const isText4InView = useInView(text2Ref, { once: true, threshold: 0.1 });

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="overflow-hidden h-[190px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[900px] w-full relative">
        <img
          src={BannerBg}
          className="object-cover w-full absolute top-0 2xl:top-[0px] left-0"
        />
      </div>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0 }}
        animate={isTextInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="ani_fadeIn font-BioSan uppercase text-[15px] bg-black flex flex-col items-center justify-center text-white w-[98%] xl:w-full p-10 pv:max-md:px-0 pv:max-xl:py-10 md:text-[15px] xl:text-[15px] pv:max-xl:w-[95%] pv:max-md:mx-auto"
      >
        <div className="w-auto text-center">
          THIẾT KẾ SANG TRỌNG, ĐẲNG CẤP đầy khí chất.
        </div>
        <div className="w-auto text-center">
          KHẢ NĂNG VẬN HÀNH MẠNH MẼ LINH HOẠT, CHINH PHỤC MỌI ĐỊA HÌNH.
        </div>
        <div className="w-auto text-center">
          JAECOO J7 HOÀN TOÀN MỚI SẼ CÙNG BẠN ĐỒNG HÀNH TRONG MỌI CHUYẾN ĐI.
        </div>
        <div className="w-auto text-center">
          TẠO NÊN NHỮNG TRẢI NGHIỆM KHÓ QUÊN
        </div>
      </motion.div>
      <div className="bg-black w-full flex pv:max-xl:gap-3 flex-col xl:flex-row items-center justify-center pb-20">
        {/* Phần tử bên trái */}
        <div className="w-[90%] pv:max-xl:w-[90%] pv:max-md:mx-auto xl:w-[45%] aspect-square relative overflow-hidden">
          <motion.img
            ref={leftBgRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isLeftBgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            src={LeftBg}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <img src={Shadow} className="absolute bottom-[2%] left-[40px]" />
          <motion.img
            ref={leftCarRef}
            initial={{ opacity: 1, x: -40 }}
            animate={
              isLeftCarInView
                ? { opacity: 1, x: [-40, 60, 0], scale: [1, 1.1, 1] }
                : {}
            }
            transition={{ duration: 2 }}
            src={LeftCar}
            className="absolute bottom-[10%] left-0"
            alt=""
          />
          <div className="overflow-hidden pv:max-md:py-1 pv:max-md:w-[50%] w-[80%] md:w-[60%] xl:w-[50%] absolute p-2 md:p-4 xl:p-10 py-4 md:py-6 xl:py-2 text-center text-white text-xs md:text-md xl:text-2xl bottom-[10px] xl:bottom-[30px] left-[50%] absolute-horizontal-center border-[2px] rounded-2xl border-white uppercase font-semibold cursor-pointer">
            <div className="bg-black w-full h-full absolute top-0 left-0 opacity-[0.5] z-[-1]"></div>
            Tìm hiểu thêm
          </div>
          <div
            className="overflow-hidden italic flex flex-col gap-4 w-full absolute p-10 py-2 text-center text-white text-sm md:text-[30px] xl:text-[30px] top-[20px] md:top-[35px] xl:top-[50px] left-[50%] absolute-horizontal-center uppercase font-HemiHead font-bold"
            style={{ lineHeight: 1.4 }}
          >
            <AnimatedText
              ref={text1Ref}
              text="J7 Flagship"
              isInView={isText1InView}
            />
            <AnimatedText
              ref={text2Ref}
              text="Động cơ đốt trong"
              isInView={isText2InView}
            />
          </div>
        </div>
        {/* Phần tử bên phải */}
        <div className="w-[60%] pv:max-xl:w-[90%] pv:max-md:mx-auto xl:w-[45%] aspect-square relative overflow-hidden">
          <motion.img
            ref={rightBgRef}
            initial={{ opacity: 0, y: -40 }}
            animate={isRightBgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            src={RightBg}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <img src={Shadow} className="absolute bottom-[2%] left-[40px]" />
          <motion.img
            ref={rightCarRef}
            initial={{ opacity: 1, x: 100 }}
            animate={
              isRightCarInView
                ? { opacity: 1, x: [100, -40, 0], scale: [1, 1.1, 1] }
                : {}
            }
            transition={{ duration: 2 }}
            src={RightCar}
            className="absolute bottom-[10%] left-0 scale-125"
          />
          <div className="overflow-hidden pv:max-md:py-1 pv:max-md:w-[50%] w-[80%] md:w-[60%] xl:w-[50%] absolute p-2 md:p-4 xl:p-10 py-4 md:py-6 xl:py-2 text-center text-white text-xs md:text-md xl:text-2xl bottom-[10px] xl:bottom-[30px] left-[50%] absolute-horizontal-center border-[2px] rounded-2xl border-white uppercase font-semibold cursor-pointer">
            <div className="bg-green-600 w-full h-full absolute top-0 left-0 opacity-[0.7] z-[-1]"></div>
            Tìm hiểu thêm
          </div>
          <div
            className="overflow-hidden italic flex flex-col gap-4 w-full absolute p-10 py-2 text-center text-white text-sm md:text-[30px] xl:text-[30px] top-[20px] md:top-[35px] xl:top-[50px] left-[50%] absolute-horizontal-center uppercase font-HemiHead font-semibold"
            style={{ lineHeight: 1.4 }}
          >
            <AnimatedText
              ref={text3Ref}
              text="J7 PHEV Flagship"
              isInView={isText3InView}
            />
            <AnimatedText
              ref={text4Ref}
              text="Động cơ Plug-in Hybrid"
              isInView={isText4InView}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAndMore;
