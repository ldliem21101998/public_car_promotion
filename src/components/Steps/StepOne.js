import { Form, Select, Button, DatePicker } from "antd";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { dateToStringDDMMYYYY } from "../../utils/common/dateHandle";
import dayjs from "dayjs";
import { Icon } from "@iconify/react/dist/iconify.js";

const { Option } = Select;

const StepOne = ({ onNext, isBackStep }) => {
  const [formData, setFormData] = useState({
    prodExColor: "Bạc Moonshine",
    prodInColor: "Đen",
    prodVersion: "JAECOO J7 FLAGSHIP",
    prodcolor: "turboPremium",
    cusExpectedDate: dateToStringDDMMYYYY(new Date()),
  });

  const [selectedInteriorColor, setSelectedInteriorColor] = useState("Đen");

  const exteriorColorsByVersion = {
    turboPremium: [
      {
        value: "bacMoonshine",
        name: "Bạc Moonshinen",
        color: "bg-gradient-to-t from-[#444a52] to-[#a6afb7] border",
      },
      {
        value: "blackQuartz",
        name: "Đen Carbon",
        color: "bg-gradient-to-t from-[#010101] to-[#707070] border",
      },
      {
        value: "whiteDiamond",
        name: "Trắng Diamond",
        color: "bg-white border",
      },
      {
        value: "redRuby",
        name: "Đỏ Ruby",
        color: "bg-gradient-to-t from-[#6a0a0f] to-[#ee7f9e] border",
      },
    ],
    turboFlagship: [
      {
        value: "whiteDiamond",
        name: "Trắng Diamond",
        color: "bg-white border",
      },
      {
        value: "blackQuartz",
        name: "Đen Carbon",
        color: "bg-gradient-to-t from-[#010101] to-[#707070] border",
      },
      {
        value: "bacMoonshine",
        name: "Bạc Moonshine",
        color: "bg-white border",
      },
      {
        value: "silverMetal",
        name: "Xám Olive",
        color: "bg-gradient-to-t from-[#bcbcbc] to-[#eaeaea] border",
      },
    ],
  };

  const productVersion = [
    {
      value: "turboPremium",
      name: "JAECOO J7 FLAGSHIP",
    },
    {
      value: "turboFlagship",
      name: "JAECOO J7 PHEV FLAGSHIP",
    },
  ];

  const [availableColors, setAvailableColors] = useState([]);

  useEffect(() => {
    const initialColors = exteriorColorsByVersion[formData.prodcolor] || [];
    setAvailableColors(initialColors);
  }, [formData.prodVersion, formData.prodcolor]);

  const handleVersionChange = (value) => {
    setFormData({
      ...formData,
      prodVersion: value,
      prodcolor: value,
    });
  };

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  // Set transition effect only when coming back from step 2
  const motionProps = isBackStep
    ? {
        initial: { opacity: 1, x: 0 },
        animate: { opacity: 1, x: 0 },
      }
    : {
        initial: { opacity: 1, x: 40 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, ease: "easeInOut" },
      };

  const handleOnNext = () => {
    onNext(formData);
  };

  return (
    <div className="">
      <motion.div
        className="flex flex-col gap-2 w-[80%] mx-auto"
        {...motionProps} // Apply motion properties based on step
      >
        <div className="flex flex-row justify-between">
          <span>THÔNG TIN XE</span>
          <span>Bước 1/5</span>
        </div>
        <Form layout="vertical" onFinish={onFinish} className="custome_form">
          {/* Version */}
          <Form.Item name="version" label="Phiên bản xe">
            <Select
              size="large"
              placeholder="Chọn phiên bản xe"
              className="bg-transparent text-white focus:border-blue-500 placeholder:text-white"
              defaultValue={productVersion[0].value}
              onChange={handleVersionChange}
              suffixIcon=<Icon
                className="h-6 w-6 text-white"
                icon={"teenyicons:down-solid"}
              ></Icon>
            >
              {productVersion.map((item) => {
                return (
                  <Option key={item.value} value={item.value}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          {/* Exterior Color */}
          <Form.Item name="exteriorColor" label="Màu ngoại thất">
            <div className="flex flex-row gap-2 justify-between text-sm py-2 max-md:flex-col">
              {availableColors.length > 0 &&
                availableColors.map((item) => (
                  <label
                    key={item.value}
                    className={`flex items-center space-x-2 cursor-pointer ${
                      formData.prodExColor === item.name
                        ? "ring-2 ring-white rounded-full w-fit p-2"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="exteriorColor"
                      value={item.name}
                      onChange={() =>
                        setFormData({ ...formData, prodExColor: item.name })
                      }
                      className="hidden"
                    />
                    <span
                      className={`w-5 h-5 rounded-full ${item.color}`}
                    ></span>
                    <span>{item.name}</span>
                  </label>
                ))}
            </div>
          </Form.Item>

          {/* Interior Color */}
          <Form.Item name="interiorColor" label="Màu nội thất">
            <div className="flex space-x-4">
              <label
                className={`flex items-center space-x-2 cursor-pointer ${
                  selectedInteriorColor === "Đen"
                    ? "ring-2 ring-white rounded-full w-fit p-2"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="interiorColor"
                  value="Đen"
                  onChange={() => setSelectedInteriorColor("Đen")}
                  className="hidden"
                />
                <span className="w-5 h-5 rounded-full bg-gradient-to-t from-[#010101] to-[#707070] border"></span>
                <span>ĐEN</span>
              </label>
            </div>
          </Form.Item>

          {/* Expected Date */}
          <Form.Item name="month" label="Thời gian mong muốn nhận xe">
            <DatePicker
              size="large"
              className="!w-full bg-black text-white hover:!bg-black"
              disabledDate={(current) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return current && current.valueOf() < today.getTime();
              }}
              defaultValue={dayjs(new Date())}
              format={"DD/MM/YYYY"}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  cusExpectedDate: dateToStringDDMMYYYY(e),
                });
              }}
            />
          </Form.Item>
        </Form>
      </motion.div>

      {/* Next Button */}
      <Form.Item>
        <div className="flex flex-row justify-center gap-6">
          <div
            onClick={handleOnNext}
            className="cursor-pointer hover:bg-opacity-90 w-1/4 p-2 text-center flex text-md justify-center items-center bg-[#004373] text-white"
          >
            TIẾP THEO
          </div>
        </div>
      </Form.Item>
    </div>
  );
};

export default StepOne;

// import { DownOutlined } from "@ant-design/icons"; // Import icon mặc định

// <Form.Item name="version" label="Phiên bản xe">
//   <Select
//     size="large"
//     placeholder="Chọn phiên bản xe"
//     className="bg-transparent text-white focus:border-blue-500 placeholder:text-white"
//     defaultValue={productVersion[0].value}
//     onChange={handleVersionChange}

//   >
//     {productVersion.map((item) => (
//       <Option key={item.value} value={item.value}>
//         {item.name}
//       </Option>
//     ))}
//   </Select>
// </Form.Item>
