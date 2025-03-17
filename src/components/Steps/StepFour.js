import {
  Form,
  Input,
  Select,
  Button,
  Radio,
  Checkbox,
  notification,
} from "antd";
import { DownPaymentService } from "../../services/mail.services";
import qr from "../../assets/QR.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

const StepFour = ({ onNext, onBack, isBackStep, formData }) => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };
  console.log(formData, "lákhd");

  const handleOnclick = async () => {
    // Dữ liệu payload để gửi lên API
    const payload = {
      cus_name: formData.cusName,
      cus_phone: formData.cusPhone,
      cus_email: formData.cusEmail,
      cus_id_number: formData.cusIdNumber,
      cus_id_regdate: formData.cusIdRegDate,
      cus_id_reglocation: formData.cusIdRegLocation,
      cus_dob: formData.cusDob,
      cus_address: formData.cusAddress,
      cus_city: formData.cusCity,
      showroom_address: formData.showroomAddress,
      prod_ex_color: formData.prodExColor
        ? formData.prodExColor
        : "OMODA C5 1.5 TURBO PREMIUM",
      prod_in_color: formData.prodInColor ? formData.prodInColor : "Đen",
      prod_version: formData.prodVersion,
      cus_expected_date: formData.cusExpectedDate,
    };
    try {
      // Gọi API bằng hàm DownPaymentService
      const response = await DownPaymentService(payload);

      // Kiểm tra kết quả
      if (response.status === 200 || response.status === 201) {
        console.log("Đặt cọc thành công!", response.data);
        onNext(response.data.file);
      } else {
        console.error("Lỗi khi đặt cọc:", response.data.message);
      }
    } catch (error) {
      console.error("Lỗi hệ thống:", error.message);
      notification.info({ message: "Something has occured, please try again" });
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
  return (
    <div className="">
      <motion.div
        {...motionProps} // Áp dụng motionProps dựa trên isBackStep
        className="flex flex-col gap-2 w-[80%] mx-auto"
      >
        <div className="flex flex-row justify-between">
          <span className="text-3xl uppercase">Thông tin chuyển khoản</span>
          <span>Bước 4/5</span>
        </div>
        {/* <span>
          Mã đơn hàng quý khách là: <b>KH20240621538123</b>
        </span> */}
        <div className=" gap-4 pv:max-sm:flex-col">
          <div className="flex flex-col mt-4 gap-1  pv:max-sm:w-full justify-center items-center text-center">
            <img src={qr} className="" />

            <div className="space-y-2 flex flex-col justify-center items-center w-full mt-4 text-[14px]">
              <div className="flex flex-row gap-2 text-center">
                <label className="">Tên Chủ Tài Khoản:</label>
                <p className="">CÔNG TY CỔ PHẦN Ô TÔ</p>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <label className="">Số Tài Khoản:</label>
                <p className="">0965180127</p>
              </div>
              <div className="flex flex-row gap-2">
                <label className="">Số Tiền:</label>
                <p>10,000,000 VND</p>
              </div>

              <div className="flex flex-row gap-2 text-center">
                <label className="">Nội Dung:</label>
                <p className="">DAT COC C5 - 25012200003 - 0909100222</p>
              </div>

              <div className="flex flex-row gap-2 text-center">
                <label className="">Ngân hàng TMCP Tiên Phong</label>
              </div>
            </div>
          </div>
        </div>

        <span className="text-center my-4">
          CHỤP LẠI MÀN HÌNH CHUYỂN KHOẢN THÀNH CÔNG
        </span>
      </motion.div>
      <div className="flex flex-row justify-center gap-6 mb-6">
        <div
          onClick={() => {
            handleOnclick();
          }}
          className="cursor-pointer hover:bg-opacity-90 w-1/4 p-2 text-center flex justify-center items-center bg-[#58953e]"
        >
          TÔI ĐÃ CHUYỂN KHOẢN
        </div>
      </div>
    </div>
  );
};

export default StepFour;
