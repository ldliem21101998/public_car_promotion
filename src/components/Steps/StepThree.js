import {
  Form,
  Input,
  Select,
  Button,
  Radio,
  Checkbox,
  Modal,
  notification,
} from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const { Option } = Select;
const StepThree = ({ onNext, onBack, isBackStep, formData }) => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };
  const [isAgreePolicies, setIsAgreePolicies] = useState(false);
  const [openAgreePolicies, setOpenAgreePolicies] = useState(false);

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

  const handleAgreePolicies = () => {
    setIsAgreePolicies(!isAgreePolicies);
  };

  const handleOpenAgreePolicies = () => {
    setOpenAgreePolicies(!openAgreePolicies);
  };

  useEffect(() => {
    if (isAgreePolicies) {
      setOpenAgreePolicies(!openAgreePolicies);
    }
  }, [isAgreePolicies]);

  const handleNext = () => {
    if (isAgreePolicies) {
      onNext();
    } else {
      notification.info({
        message: "Are you agree with our policies ?",
        duration: 2,
        placement: "topRight",
      });
    }
  };

  return (
    <div className="">
      <motion.div
        {...motionProps}
        className="flex flex-col gap-2 w-[80%] mx-auto"
      >
        <div className="flex flex-row justify-between">
          <span>THOẢN THUẬN</span>
          <span>Bước 3/5</span>
        </div>
        <span className="font-semibold">Sau đây là nội dung thỏa thuận</span>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <span>Phiên bản xe:</span>
            <span>Màu ngoại thất:</span>
            <span>Màu nội thất:</span>
            <span>Thời gian mong muốn nhận xe:</span>
            <span>Họ và Tên:</span>
            <span>CCCD/ Hộ chiếu:</span>
            <span>Nơi cấp CCCD/ Hộ chiếu:</span>
            <span>Ngày cấp CCCD/ Hộ chiếu:</span>
            <span>Số điện thoại:</span>
            <span>Email:</span>
            <span>Địa chỉ:</span>
            <span>Đại lý:</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>
              {formData.prodVersion == "" ? "-" : formData.prodVersion}
            </span>
            <span>
              {formData.prodExColor == "" ? "-" : formData.prodExColor}
            </span>
            <span>
              {formData.prodInColor == "" ? "-" : formData.prodInColor}
            </span>
            <span>
              {formData.cusExpectedDate == "" ? "-" : formData.cusExpectedDate}
            </span>
            <span>{formData.cusName == "" ? "-" : formData.cusName}</span>
            <span>
              {formData.cusIdNumber == "" ? "-" : formData.cusIdNumber}
            </span>
            <span>
              {formData.cusIdRegDate == "" ? "-" : formData.cusIdRegDate}
            </span>
            <span>
              {formData.cusIdRegLocation == ""
                ? "-"
                : formData.cusIdRegLocation}
            </span>
            <span>{formData.cusPhone == "" ? "-" : formData.cusPhone}</span>
            <span>{formData.cusEmail == "" ? "-" : formData.cusEmail}</span>
            <span>{formData.cusAddress == "" ? "-" : formData.cusAddress}</span>
            <span>
              {formData.showroomAddress == "" ? "-" : formData.showroomAddress}
            </span>
          </div>
        </div>
        <Checkbox
          value="individual"
          className="text-white my-4"
          onChange={() => handleAgreePolicies()}
          checked={isAgreePolicies}
        >
          Tôi đồng ý với các điều khoản
        </Checkbox>
      </motion.div>
      <div className="flex flex-row justify-center gap-6 mb-6">
        <div
          onClick={onBack}
          className="cursor-pointer hover:bg-opacity-90 w-1/4 p-2 text-center text-md flex justify-center items-center bg-white text-[#58953e]"
        >
          QUAY LẠI
        </div>
        <div
          onClick={handleNext}
          className="cursor-pointer hover:bg-opacity-90 w-1/4 p-2 text-center text-md flex justify-center items-center bg-[#58953e]"
        >
          TIẾP THEO
        </div>
      </div>

      {isAgreePolicies ? (
        <Modal
          open={openAgreePolicies}
          footer={null}
          onCancel={() => handleOpenAgreePolicies()}
          width={800}
          className="custome_modal"
        >
          <div className="p-4">
            <p className="text-white text-[36px] font-bold">ĐIỀU KHOẢN</p>
            <ul className="text-white text-[14px]">
              <li className="">
                <strong>1. Quyền và nghĩa vụ của BÊN MUA</strong>
              </li>
              <ul className="pl-2 my-2">
                <li>
                  1.1. BÊN MUA sẽ thực hiện thanh toán cho Bên Bán một khoản
                  tiền đặt cọc (“Khoản Tiền Đặt Cọc”) với giá trị 10.000.000 VNĐ
                  (Mười triệu đồng chẵn) để tiến hành giao dịch với các chi
                  tiết&nbsp;sau:
                  <ul className="pl-4">
                    <li>
                      1.1.1. Đặt mua xe{" "}
                      <strong>OMODA C5 1.5 TURBO PREMIUM</strong>, màu{" "}
                      <strong>Đen Carbon</strong>.
                    </li>
                    <li>
                      1.1.2. Thời gian dự kiến BÊN MUA mong muốn nhận xe:{" "}
                      <strong>29-01-2025</strong>
                    </li>
                    <li>
                      1.1.3. Hình thức và thời hạn đặt cọc: chuyển khoản trực
                      tiếp đến tài khoản của BÊN BÁN không muộn hơn ngày{" "}
                      <strong>21-01-2025</strong>
                    </li>
                  </ul>
                </li>
                <li>
                  1.2. Trong vòng 30 ngày kể từ khi BÊN BÁN công bố giá bán
                  chính thức của xe OMODA C5, BÊN MUA sẽ thực hiện:
                  <ul className="pl-4">
                    <li>
                      1.2.1. Ký kết Hợp đồng Mua bán chính thức với BÊN BÁN hoặc
                      Đại lý Uỷ quyền do BÊN BÁN chỉ định, hoặc chuyển nhượng
                      cho người mua khác ký kết Hợp đồng Mua bán chính thức,
                      hoặc
                    </li>
                    <li>1.2.2. Yêu cầu BÊN BÁN hoàn trả Khoản Tiền Đặt cọc.</li>
                  </ul>
                </li>
                <li>
                  1.3. Sau 30 ngày kể từ khi BÊN BÁN công bố giá bán chính thức
                  mà BÊN MUA không thực hiện các quyền và cam kết theo đúng thời
                  hạn quy định tại Mục 1.2, BÊN MUA sẽ tự động được coi là đã từ
                  bỏ Khoản Tiền Đặt Cọc và các quyền và cam kết theo Mục 1.2
                  trên đây và, do đó, BÊN BÁN sẽ được quyền giữ lại và không có
                  nghĩa vụ hoàn trả Khoản Đặt Cọc cho BÊN MUA trong mọi trường
                  hợp. Trong trường hợp này, BÊN MUA theo đây xác nhận với BÊN
                  BÁN rằng, BÊN MUA sẽ không thực hiện bất kỳ hành động khiếu
                  nại và kiện tụng nào đối với BÊN BÁN về Khoản Tiền Đặt Cọc,
                  quyền mua xe và bất kỳ điều khoản nào của Thoả Thuận&nbsp;này.
                </li>
              </ul>
              <li className="">
                <strong>2.Quyền và nghĩa vụ của BÊN BÁN:</strong>
                <ul className="pl-2  my-2">
                  <li>
                    2.1. BÊN BÁN đồng ý cho BÊN MUA hưởng các chính sách ưu đãi
                    cho chiếc xe tại <strong>Mục 1.1.1</strong>, bao gồm:
                    <ul className="pl-4">
                      <li>
                        2.1.1. Bảo hành xe và động cơ 10 năm hoặc 1 triệu km tùy
                        điều kiện nào đến trước (* áp dụng có điều kiện).
                      </li>
                      <li>
                        2.1.2. Miễn phí bảo dưỡng 02 năm hoặc 20.000km tùy điền
                        kiện nào đến trước.
                      </li>
                      <li>
                        2.1.3. Bảo hiểm thân vỏ xe có thời hạn 01 năm kể từ ngày
                        BÊN MUA nhận xe.
                      </li>
                      <li>
                        2.1.4. Mã số tham dự Bốc Thăm May Mắn của BÊN MUA sẽ
                        được gửi qua email khi BÊN MUA đã chuyển khoản đặt cọc
                        thành công.
                      </li>
                    </ul>
                  </li>
                  <li>
                    2.2. BÊN BÁN cam kết thực hiện các nghĩa vụ tương ứng tại
                    Mục 1.2 và đảm bảo cho BÊN MUA các quyền lợi tại Mục 2.1 với
                    các điều kiện sau: (i) BÊN MUA hoàn thành các cam kết tại
                    Mục 1.2; và, đồng thời, (ii) hoàn thành việc thanh toán tiền
                    mua xe và nhận xe không muộn hơn Tháng 3 Năm&nbsp;2025.
                  </li>
                </ul>
              </li>
              <li className="">
                <strong>3. Các điều khoản khác</strong>
                <ul className="pl-4">
                  <li>
                    3.1.1. Thoả thuận này được điều chỉnh theo pháp luật Việt
                    Nam.
                  </li>
                  <li>
                    3.1.2. Bên Bán và Bên Mua theo đây xác nhận và đồng ý rằng,
                    chương trình ưu đãi tại Mục 2.1 và bất kỳ chương trình ưu
                    đãi nào khác do Bên Bán triển khai mà Bên Mua được thụ hưởng
                    sẽ chỉ được thực hiện trong phạm vi mà pháp luật cho phép và
                    phụ thuộc vào các chấp thuận của cơ quan nhà nước có thẩm
                    quyền (nếu áp dụng).
                  </li>
                  <li>3.1.3. Thoả thuận này có hiệu lực kể từ ngày ký.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                setOpenAgreePolicies(false);
              }}
              className=" cursor-pointer hover:bg-opacity-90 py-2 px-6  text-md p-2 text-center flex justify-center items-center bg-[#58953e] text-white"
            >
              Đồng ý
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default StepThree;
