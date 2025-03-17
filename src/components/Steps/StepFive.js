import { Icon } from "@iconify/react/dist/iconify.js";
import { Form, Input, Select, Button, Radio, Checkbox } from "antd";
import { motion } from "framer-motion";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import React, { useState, useEffect } from "react";
import done from "../../assets/Done.png";
import { getDownPaymentService } from "../../services/mail.services";

const StepFive = ({ isBackStep, formData, fileName }) => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };
  const [countdown, setCountdown] = useState(5); // Bắt đầu từ 5 giây
  const [showButtons, setShowButtons] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1); // Giảm số giây còn lại
    }, 1000);

    // Khi countdown về 0, hiển thị các nút
    if (countdown === 0) {
      setShowButtons(true);
      clearInterval(timer); // Dừng interval
    }

    // Dọn dẹp khi component unmount
    return () => clearInterval(timer);
  }, [countdown]);
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

  const generateDocx = async () => {
    try {
      // Fetch the template file from the public folder
      const response = await fetch("/documents/OMODAC5_BookingAgreement.docx");

      if (!response.ok) {
        throw new Error("Failed to load template file");
      }

      const templateArrayBuffer = await response.arrayBuffer();

      // Initialize PizZip with the loaded template
      const zip = new PizZip(templateArrayBuffer);

      // Load template into Docxtemplater
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      // Replace placeholders with form data
      doc.render(formData);

      // Generate a Blob and save it
      const blob = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      saveAs(blob, "OMODAC5 Booking Agreement.docx");
    } catch (error) {
      console.error("Error generating document:", error);
    }
  };

  const previewDocx = async () => {
    window.open(
      `${window.location.origin}${window.location.pathname}preview/${fileName}`,
      "_blank"
    );
  };

  return (
    <div className="">
      <motion.div
        {...motionProps}
        className="flex flex-col gap-2 w-[80%] mx-auto"
      >
        <div className="flex flex-row justify-between">
          <span className="text-xl font-bold">HOÀN TẤT</span>
          <span>Bước 5/5</span>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 my-4">
          <span className="font-semibold text-center">ĐẶT CỌC HOÀN TẤT</span>
          <div className="text-center">
            Cảm ơn quý khách đã đặt cọc OMODA C5. Trong vòng 7 ngày làm việc,
            chúng tôi sẽ kiểm tra chuyển khoản thành công và gửi email xác nhận,
            kèm theo thỏa thuận đặt cọc chi tiết. Nếu Quý khách có bất kỳ câu
            hỏi hoặc cần thêm thông tin, vui lòng liên hệ hotline: 0962.670.926.
            Chân thành cảm ơn và rất mong được đồng hành cùng Quý khách !
          </div>
          <img src={done} className="w-12 h-12" />
        </div>
      </motion.div>
      {showButtons ? (
        <div className="flex flex-row justify-center gap-6 mb-6">
          <div
            className="cursor-pointer hover:bg-opacity-90 w-1/4 p-2 text-center text-md flex justify-center items-center bg-white text-[#58953e]"
            onClick={() => previewDocx()}
          >
            Xem trước
          </div>
          <div
            className="cursor-pointer hover:bg-opacity-90 w-1/4 p-2 text-center text-md flex justify-center items-center bg-[#58953e]"
            onClick={() => generateDocx()}
          >
            Tải xuống Docx
          </div>
        </div>
      ) : (
        <p className="text-center mt-4">
          Tải xuống file thỏa thuận trong {countdown} giây...
        </p>
      )}
    </div>
  );
};

export default StepFive;
