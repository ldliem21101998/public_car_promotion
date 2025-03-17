import topBg from "../../../assests/KeyFeatures/top.webp";
import botBg from "../../../assests/KeyFeatures/bot.webp";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedText, AnimatedImage } from "../../../utils/common/animation";
const KeyFeatures = () => {
  // Tạo ref và kiểm tra trạng thái inView

  const text1Ref = useRef(null);
  const isText1InView = useInView(text1Ref, { threshold: 0.1 });
  const text2Ref = useRef(null);
  const isText2InView = useInView(text2Ref, { threshold: 0.1 });
  const text3Ref = useRef(null);
  const isText3InView = useInView(text3Ref, { threshold: 0.1 });
  const text4Ref = useRef(null);
  const isText4InView = useInView(text4Ref, { threshold: 0.1 });
  const img1ref = useRef(null);
  const img1isInView = useInView(img1ref, {
    threshold: 0.1, // Kích hoạt khi ít nhất 10% phần tử vào viewport
  });

  const img2ref = useRef(null);
  const img2isInView = useInView(img2ref, {
    threshold: 0.1, // Kích hoạt khi ít nhất 10% phần tử vào viewport
  });

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="h-[200px] md:h-[350px] xl:h-[500px] w-full overflow-hidden relative">
        <AnimatedImage
          src={topBg}
          className="scale-125 absolute top-[-50px] md:top-[-100px] xl:top-[-280px] left-[-20px] md:left-[-50px] xl:left-[-100px]"
          ref={img1ref}
          isInView={img1isInView} // Truyền `isInView` vào
        />

        <div className="text-white flex flex-col items-center justify-center gap-4 font-semibold italic text-xl md:text-3xl xl:text-5xl absolute top-[50%] right-[15%] absolute-vertical-center  font-HemiHead ">
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
      <div className="bg-black flex flex-col xl:flex-row items-center justify-center gap-[40px] xl:gap-[8%] text-white w-full p-10">
        <div className="flex items-center justify-center gap-[8%] w-full xl:hidden">
          <div className="w-auto flex flex-col gap-4 items-center text-white">
            <div className="uppercase text-2xl font-BioSan md:text-4xl font-semibold text-center">
              183 HP
            </div>
            <div className="text-xl text-center font-BioSan">
              Công suất tối đa
            </div>
          </div>
          <div className="w-auto flex flex-col gap-4 items-center text-white">
            <div className="uppercase font-BioSan font-semibold text-2xl md:text-4xl text-center">
              275 Nm
            </div>
            <div className="text-xl text-center font-BioSan">
              Mô men xoắn cực đại
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[8%] w-full xl:hidden">
          <div className="w-auto flex flex-col gap-4 items-center text-white">
            <div className="uppercase font-semibold font-BioSan text-2xl md:text-4xl text-center">
              7 Cấp
            </div>
            <div className="text-xl text-center font-BioSan ">
              Hộp số ly hợp kép
            </div>
          </div>
          <div className="w-auto flex flex-col gap-4 items-center text-white">
            <div className="uppercase font-semibold font-BioSan text-2xl md:text-4xl text-center">
              FWD
            </div>
            <div className="text-xl text-center font-BioSan">
              Hệ thống dẫn động
            </div>
          </div>
        </div>

        <div className="w-auto flex flex-col gap-4 items-center text-white hidden xl:block">
          <div className="uppercase  font-semibold text-center text-[40px] font-BioSan ">
            183 HP
          </div>
          <div className="text-center text-[14.5px] font-BioSan ">
            Công suất tối đa
          </div>
        </div>
        <div className="w-auto flex flex-col gap-4 items-center text-white hidden xl:block">
          <div className="uppercase  font-semibold text-center text-[40px] font-BioSan ">
            275 Nm
          </div>
          <div className="text-[14.5px] text-center">Mô men xoắn cực đại</div>
        </div>
        <div className="w-auto flex flex-col gap-4 items-center text-white hidden xl:block">
          <div className="uppercase  font-semibold text-center text-[40px] font-BioSan ">
            7 Cấp
          </div>
          <div className="text-[14.5px] text-center">Hộp số ly hợp kép</div>
        </div>
        <div className="w-auto flex flex-col gap-4 items-center text-white hidden xl:block">
          <div className="uppercase  font-semibold text-center text-[40px] font-BioSan ">
            FWD
          </div>
          <div className="text-[14.5px] text-center">Hệ thống dẫn động</div>
        </div>
      </div>
      <div className="h-[200px] md:h-[350px] xl:h-[500px] w-full overflow-hidden relative">
        <AnimatedImage
          src={botBg}
          className="w-full object-cover scale-125 absolute top-[-30px] md:top-[-70px] xl:top-[-230px] left-[-20px] md:left-[-50px] xl:left-[-100px]"
          ref={img2ref}
          isInView={img2isInView} // Truyền `isInView` vào
        />

        <div className="text-white flex flex-col items-center justify-center gap-4 font-semibold italic text-xl md:text-3xl xl:text-5xl absolute top-[50%] right-[15%] absolute-vertical-center font-HemiHead">
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
      <div className="bg-black flex flex-col xl:flex-row items-center justify-center gap-[40px] xl:gap-[8%] text-white w-full p-10">
        <div className="flex items-center justify-center gap-[8%] w-full xl:hidden">
          <div className="w-auto flex flex-col gap-4 items-center text-white">
            <div className="uppercase text-2xl md:text-[40px] font-BioSan font-semibold text-center ">
              342 HP
            </div>
            <div className=" text-center font-BioSan text-[14.5px]">
              Công suất tối đa
            </div>
          </div>
          <div className="w-auto flex flex-col gap-4 items-center text-white">
            <div className="uppercase text-2xl md:text-[40px] font-BioSan font-semibold text-center">
              525 Nm
            </div>
            <div className="font-BioSan text-[14.5px] text-center">
              Mô men xoắn cực đại
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[8%] w-full xl:hidden">
          <div className="w-auto flex flex-col gap-4 items-center text-white">
            <div className="uppercase text-2xlmd:text-[40px] font-BioSan font-semibold text-center">
              1.300+
            </div>
            <div className="font-BioSan text-[14.5px] text-center">
              Tầm hoạt động chuẩn NEDC (KM)
            </div>
          </div>
          <div className="w-auto flex flex-col gap-4 items-center text-white">
            <div className="uppercase text-2xl md:text-[40px] font-BioSan font-semibold text-center">
              FWD
            </div>
            <div className="font-BioSan text-[14.5px] text-center">
              Hệ thống dẫn động
            </div>
          </div>
        </div>

        <div className="w-auto flex flex-col gap-4 items-center text-white hidden xl:block">
          <div className="uppercase text-[40px] font-BioSan font-semibold text-center">
            342 HP
          </div>
          <div className="font-BioSan text-[14.5px] text-center">
            Công suất tối đa
          </div>
        </div>
        <div className="w-auto flex flex-col gap-4 items-center text-white hidden xl:block">
          <div className="uppercase text-[40px] font-BioSan font-semibold text-center">
            525 Nm
          </div>
          <div className="font-BioSan text-[14.5px] text-center">
            Mô men xoắn cực đại
          </div>
        </div>
        <div className="w-auto flex flex-col gap-4 items-center text-white hidden xl:block">
          <div className="uppercase text-[40px] font-BioSan font-semibold text-center">
            1.300+
          </div>
          <div className="font-BioSan text-[14.5px] text-center">
            Tầm hoạt động chuẩn NEDC (KM)
          </div>
        </div>
        <div className="w-auto flex flex-col gap-4 items-center text-white hidden xl:block">
          <div className="uppercase text-[40px] font-BioSan font-semibold text-center">
            FWD
          </div>
          <div className="font-BioSan text-[14.5px] text-center">
            Hệ thống dẫn động
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
