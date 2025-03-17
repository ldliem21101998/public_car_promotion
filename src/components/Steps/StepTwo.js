import { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Radio,
  DatePicker,
  Checkbox,
  notification,
} from "antd";
import { motion } from "framer-motion";
import { datashowroom, provice } from "../../models/mockdata";
import { dateToStringDDMMYYYY } from "../../utils/common/dateHandle";
import dayjs from "dayjs";
import { Icon } from "@iconify/react/dist/iconify.js";
const { Option } = Select;

const StepTwo = ({ onNext, onBack, isBackStep }) => {
  const [showrooms, setShowrooms] = useState([
    { id: 0, name: "Quyết định sau", province: "all" },
  ]);
  const [formData, setFormData] = useState({
    cusName: "",
    cusPhone: "",
    cusDob: dateToStringDDMMYYYY(new Date()),
    cusIdNumber: "",
    cusIdRegDate: dateToStringDDMMYYYY(new Date()),
    cusIdRegLocation: "",
    cusPhone: "",
    cusEmail: "",
    cusAddress: "",
    cusCity: "",
    showroomAddress: "Quyết định sau",
  });

  const handleProvinceChange = (value, record) => {
    setFormData({ ...formData, cusCity: record?.children });
    const newData = datashowroom.filter(
      (item) => item.province == record?.children || item.province == "all"
    );
    if (newData.length > 1) {
      setShowrooms(newData);
    } else {
      setShowrooms(datashowroom);
    }
  };

  const motionProps = isBackStep
    ? {
        initial: { opacity: 1, x: -40 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, ease: "easeInOut" },
      }
    : {
        initial: { opacity: 1, x: 40 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, ease: "easeInOut" },
      };

  const handleOnChangeInput = (e) => {
    setFormData({ ...formData, ...e });
  };

  const handleOnNext = () => {
    if (
      !formData.cusName ||
      !formData.cusPhone ||
      !formData.cusEmail ||
      !formData.cusIdNumber ||
      !formData.cusAddress ||
      !formData.cusCity ||
      !formData.cusIdRegLocation
    ) {
      notification.info({
        message: "Please fill in all required field",
        duration: 2,
        placement: "topRight",
      });
    } else {
      onNext(formData);
    }
  };

  useEffect(() => {
    setFormData({ ...formData, showroomAddress: showrooms[0].name });
  }, [showrooms]);

  return (
    <div className="">
      <motion.div
        className="flex flex-col gap-2 w-[80%] mx-auto"
        {...motionProps}
      >
        <div className="flex flex-row justify-between">
          <span>Thông tin người mua</span>
          <span>Bước 2/5</span>
        </div>
        <Form layout="vertical" className="custome_form">
          {/* Owner Type */}
          {/* <Form.Item
            name="ownerType"
            label="Chủ sở hữu"
            rules={[
              { required: true, message: "Vui lòng chọn loại chủ sở hữu!" },
            ]}
          >
            <Checkbox value="individual">Cá nhân</Checkbox>
          </Form.Item> */}

          {/* Full Name */}
          <Form.Item
            name="fullName"
            label="Họ và tên"
            rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
          >
            <Input
              size="large"
              placeholder="Nhập họ và tên"
              value={formData.cusName}
              onChange={(e) => handleOnChangeInput({ cusName: e.target.value })}
            />
          </Form.Item>

          {/* ID Card and Phone Number */}
          <div className="flex justify-between space-x-4">
            <Form.Item
              name="idCard"
              label="Số CCCD/ Hộ chiếu"
              rules={[{ required: true, message: "Vui lòng nhập số CCCD!" }]}
              className="w-1/2"
            >
              <Input
                size="large"
                placeholder="Nhập số CCCD"
                value={formData.cusIdNumber}
                onChange={(e) =>
                  handleOnChangeInput({ cusIdNumber: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              name="dateofbirth"
              label="Ngày sinh"
              rules={[{ required: true, message: "Vui lòng nhập ngày sinh!" }]}
              className="w-1/2"
            >
              <DatePicker
                size="large"
                className="!w-full bg-black text-white hover:!bg-black"
                disabledDate={(current) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return current && current.valueOf() >= today.getTime();
                }}
                defaultValue={dayjs(new Date())}
                format={"DD/MM/YYYY"}
                onChange={(e) => {
                  setFormData({ ...formData, cusDob: dateToStringDDMMYYYY(e) });
                }}
              />
            </Form.Item>
          </div>

          <div className="flex justify-between space-x-4">
            <Form.Item
              name="place_idcard"
              label="Nơi cấp CCCD/Hộ chiếu*"
              rules={[
                { required: true, message: "Vui lòng nhập nơi cấp hộ chiếu!" },
              ]}
              className="w-1/2"
            >
              <Input
                size="large"
                placeholder="Nơi cấp CCCD/Hộ chiếu"
                value={formData.cusIdRegLocation}
                onChange={(e) =>
                  handleOnChangeInput({ cusIdRegLocation: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              name="date_idcard"
              label="Ngày cấp CCCD/Hộ chiếu*"
              rules={[{ required: true, message: "Vui lòng nhập ngày cấp!" }]}
              className="w-1/2"
            >
              <DatePicker
                size="large"
                className="!w-full bg-black text-white hover:!bg-black"
                disabledDate={(current) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return current && current.valueOf() >= today.getTime();
                }}
                defaultValue={dayjs(new Date())}
                format={"DD/MM/YYYY"}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    cusIdRegDate: dateToStringDDMMYYYY(e),
                  });
                }}
              />
            </Form.Item>
          </div>

          <div className="flex justify-between space-x-4">
            {/* Email */}

            <Form.Item
              name="phoneNumber"
              label="Số điện thoại"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại!" },
              ]}
              className="w-1/2"
            >
              <Input
                size="large"
                placeholder="Nhập số điện thoại"
                value={formData.cusPhone}
                onChange={(e) =>
                  handleOnChangeInput({ cusPhone: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                {
                  type: "email",
                  message: "Vui lòng nhập địa chỉ email hợp lệ!",
                },
              ]}
              className="w-1/2"
            >
              <Input
                size="large"
                placeholder="Nhập email"
                value={formData.cusEmail}
                onChange={(e) =>
                  handleOnChangeInput({ cusEmail: e.target.value })
                }
              />
            </Form.Item>
          </div>
          {/* address */}
          <Form.Item
            name="address"
            label="Địa chỉ (chi tiết)"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ!",
              },
            ]}
            className=""
          >
            <Input
              size="large"
              placeholder="Nhập địa chỉ"
              value={formData.cusAddress}
              onChange={(e) =>
                handleOnChangeInput({ cusAddress: e.target.value })
              }
            />
          </Form.Item>
          {/* provice */}
          <Form.Item
            name="city"
            label="Thành phố sinh sống"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn thành phố sinh sống!",
              },
            ]}
          >
            <Select
              size="large"
              placeholder="Chọn tỉnh thành"
              onChange={(e, record) => handleProvinceChange(e, record)}
              suffixIcon=<Icon
                className="h-6 w-6 text-white"
                icon={"teenyicons:down-solid"}
              ></Icon>
            >
              {provice.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          {/* Showroom Location */}
          <Form.Item
            name="showroom"
            label="Showroom nhận xe"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn showroom!",
              },
            ]}
          >
            <Select
              size="large"
              placeholder="Chọn showroom"
              defaultValue={"Quyết định sau"}
              onChange={(value) => {
                setFormData({ ...formData, showroomAddress: value });
              }}
              suffixIcon=<Icon
                className="h-6 w-6 text-white"
                icon={"teenyicons:down-solid"}
              ></Icon>              
            >
              {showrooms.map((option, index) => (
                <Option key={index} value={option.name}>
                  {option.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          {/* Next Button */}
        </Form>
      </motion.div>
      <Form.Item>
        <div className="flex flex-row justify-center gap-6">
          <div
            onClick={onBack}
            className=" cursor-pointer hover:bg-opacity-90 w-1/4 text-md p-2 text-center flex justify-center items-center bg-white text-[#58953e]"
          >
            QUAY LẠI
          </div>
          <div
            onClick={handleOnNext}
            className=" cursor-pointer hover:bg-opacity-90 w-1/4 text-md p-2 text-center flex justify-center items-center bg-[#58953e] text-white"
          >
            TIẾP THEO
          </div>
        </div>
      </Form.Item>
    </div>
  );
};

export default StepTwo;
