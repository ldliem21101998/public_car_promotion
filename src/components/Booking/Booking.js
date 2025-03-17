import { useEffect, useState } from "react";
import bg from "../../assets/booking_bg.png";
import { Steps } from "antd";
import StepOne from "../Steps/StepOne";
import { useLocation, useNavigate } from "react-router";
import StepTwo from "../Steps/StepTwo";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../../components/Steps/style.css";
import StepThree from "../Steps/StepThree";
import StepFour from "../Steps/StepFour";
import StepFive from "../Steps/StepFive";
const { Step } = Steps;

const Booking = () => {
  const location = useLocation();
  const { name } = location.state || {};
  const [formData, setFormData] = useState({
    cusName: "",
    cusPhone: "",
    cusDob: "",
    cusIdNumber: "",
    cusIdRegDate: "",
    cusIdRegLocation: "",
    cusEmail: "",
    cusAddress: "",
    cusCity: "",
    showroomAddress: "",
    prodExColor: "",
    prodInColor: "",
    prodVersion: "",
    cusExpectedDate: "",
    currentDay: String(new Date().getDate()).padStart(2, "0"),
    currentMonth: String(new Date().getMonth() + 1).padStart(2, "0"),
    currentYear: new Date().getFullYear(),
  });
  const [fileName, setFileName] = useState("");
  const [direction, setdirection] = useState("vertical");
  const [currentForm, setCurrentForm] = useState("");
  const [isStepBack, setIsBackStep] = useState(false);
  const currentStep = (() => {
    if (currentForm === "StepOne") return 1;
    if (currentForm === "StepTwo") return 2;
    if (currentForm === "StepThree") return 3;
    if (currentForm === "StepFour") return 4;
    if (currentForm === "StepFive") return 5;
    return -1;
  })();

  const navigate = useNavigate();

  const handleStepOneNext = (e) => {
    setCurrentForm("StepTwo");
    setFormData({
      ...formData,
      ...e,
    });
  };

  const handleStepTwoNext = (e) => {
    setCurrentForm("StepThree");
    setFormData({
      ...formData,
      ...e,
    });
  };
  const handleStepTwoBack = () => {
    setCurrentForm("StepOne");
    setIsBackStep(true);
  };

  const handleStepThreeNext = () => {
    setCurrentForm("StepFour");
  };
  const handleStepThreeBack = () => {
    setCurrentForm("StepTwo");
  };

  const handleStepFourNext = (e) => {
    setCurrentForm("StepFive");
    setFileName(e);
  };

  const handleStepFourBack = () => {
    setCurrentForm("StepThree");
  };

  useEffect(() => {
    setCurrentForm("StepOne");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setdirection("vertical"); // Set isBack to false if the screen width is less than 1024px
      } else {
        setdirection("horizontal"); // Set isBack to true if the screen width is 1024px or more
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the size on initial load

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full relative grid-cols-2 grid pv:max-lg:grid-cols-1 lg:max-2xl:grid-cols-3 ">
      <img
        src={bg}
        alt="Background"
        className="object-cover w-full h-full pv:max-xl:h-full absolute top-0 left-0"
      />
      <div className=""></div>

      <div
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%)",
        }}
        className="col-span-1 lg:max-2xl:col-span-2 bg-black/80 shadow-lg my-20 w-[80%] mx-auto py-10 pv:max-xl:w-[95%] "
      >
        {/* Start Steps */}
        <div className=" flex flex-col justify-center items-center gap-4 text-center h-fit w-[80%] mx-auto">
          <h1 className="text-xl font-bold text-center">ĐẶT CỌC</h1>
          <p className="text-sm text-center text-gray-400">
            Điền vào tất cả các trường biểu mẫu để chuyển sang bước tiếp theo
          </p>
          <div className="w-full flex justify-between mb-[20px]">
            <Steps
              current={currentStep}
              size="small"
              labelPlacement="vertical"
              className="w-full step-custom"
              direction={direction}
            >
              <Step
                title={
                  <span
                    className={` ${
                      currentStep === 1 ? "text-[#518AC2]" : "text-[#979797]"
                    }`}
                  >
                    Lựa chọn
                  </span>
                }
                icon={
                  <div
                    className={`relative flex items-center justify-center   py-3 px-4 rounded-md ${
                      currentStep >= 1 ? "bg-[#20648e]" : "bg-white"
                    }`}
                  >
                    <Icon
                      icon="fluent-mdl2:car"
                      className={`w-7 h-7 ${
                        currentStep >= 1 ? "text-white" : "text-[#20648e]"
                      }`}
                    />
                  </div>
                }
              />
              <Step
                title={
                  <span
                    className={`block ${
                      currentStep === 2 ? "text-[#518AC2]" : "text-[#979797]"
                    }`}
                  >
                    Người mua
                  </span>
                }
                icon={
                  <div
                    className={`relative flex items-center justify-center  py-3 px-4 rounded-md ${
                      currentStep >= 2 ? "bg-[#20648e]" : "bg-white"
                    }`}
                  >
                    <Icon
                      icon="stash:person-duotone"
                      className={`w-7 h-7 ${
                        currentStep >= 2 ? "text-white" : "text-[#20648e]"
                      }`}
                    />
                  </div>
                }
              />
              <Step
                title={
                  <span
                    className={`block ${
                      currentStep === 3 ? "text-[#518AC2]" : "text-[#979797]"
                    }`}
                  >
                    Thỏa thuận
                  </span>
                }
                icon={
                  <div
                    className={`relative flex items-center justify-center  py-3 px-4 rounded-md ${
                      currentStep >= 3 ? "bg-[#20648e]" : "bg-white"
                    }`}
                  >
                    <Icon
                      icon="mdi:note-text-outline"
                      className={`w-7 h-7 ${
                        currentStep >= 3 ? "text-white" : "text-[#20648e]"
                      }`}
                    />
                  </div>
                }
              />
              <Step
                title={
                  <span
                    className={`block ${
                      currentStep === 4 ? "text-[#518AC2]" : "text-[#979797]"
                    }`}
                  >
                    Chuyển khoản
                  </span>
                }
                icon={
                  <div
                    className={`relative flex items-center justify-center py-3 px-4 rounded-md ${
                      currentStep >= 4 ? "bg-[#20648e]" : "bg-white"
                    }`}
                  >
                    <Icon
                      icon="ion:logo-usd"
                      className={`w-7 h-7 ${
                        currentStep >= 4 ? "text-white" : "text-[#20648e]"
                      }`}
                    />
                  </div>
                }
              />
              <Step
                title={
                  <span
                    className={` ${
                      currentStep === 5 ? "text-[#518AC2]" : "text-[#979797]"
                    }`}
                  >
                    Hoàn tất
                  </span>
                }
                icon={
                  <div
                    className={`relative flex items-center justify-center  py-3 px-4 rounded-md  ${
                      currentStep === 5 ? "bg-[#20648e]" : "bg-white"
                    }`}
                  >
                    <Icon
                      icon="icon-park-outline:down-c"
                      className={`w-7 h-7 ${
                        currentStep === 5 ? "text-white" : "text-[#20648e]"
                      }`}
                    />
                  </div>
                }
              />
            </Steps>
          </div>
          {/* End Steps */}
        </div>

        {currentForm === "StepOne" && (
          <StepOne onNext={handleStepOneNext} isStepBack={isStepBack} />
        )}
        {currentForm === "StepTwo" && (
          <StepTwo onNext={handleStepTwoNext} onBack={handleStepTwoBack} />
        )}
        {currentForm === "StepThree" && (
          <StepThree
            onNext={handleStepThreeNext}
            onBack={handleStepThreeBack}
            formData={formData}
          />
        )}
        {currentForm === "StepFour" && (
          <StepFour
            onNext={handleStepFourNext}
            onBack={handleStepFourBack}
            formData={formData}
          />
        )}
        {currentForm === "StepFive" && (
          <StepFive formData={formData} fileName={fileName} />
        )}
      </div>
    </div>
  );
};

export default Booking;
