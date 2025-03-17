import footerGlobe from "../../assests/Footer/Globe.webp";
import footerInstagram from "../../assests/Footer/Instagram.webp";
import footerLogo from "../../assests/Footer/Logo.webp";
import bookingBg from "../../assets/booking_bg.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Hook để kiểm tra phần tử có trong viewport
const Footer = () => {
  // Hook để kiểm tra phần tử có trong viewport
  const { ref, inView } = useInView({
    threshold: 0.1, // Kích hoạt khi 10% phần tử vào viewport
  });

  // Định nghĩa hiệu ứng fade-in
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Phần tử ẩn và ở dưới
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Phần tử sẽ rõ dần và di chuyển lên
  };

  return (
    <div className="w-full bg-black text-white p-10 2xl:p-14 mt-10 2xl:mt-14 flex items-center justify-center h-[800px]">
      <div className="w-full md:w-[80%] 2xl:w-[60%] flex flex-col justify-between h-full">
        <motion.div
          ref={ref}
          className="flex flex-col uppercase w-full items-center justify-center gap-2"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Kích hoạt hiệu ứng khi phần tử vào viewport
        >
          <img src={footerLogo} className="" alt="footer-logo" />
          <div className="text-2xl flex flex-col items-center justify-center gap-2">
            <div className="text-center">Định khí chất</div>
            <div className="text-center">Chinh phục muôn phương</div>
          </div>
        </motion.div>
        <div className="flex flex-col w-full gap-8 text-2xl font-[470]">
          <div className="flex gap-2 flex-col">
            <div className="uppercase">Điện thoại</div>
            <div className="text-xl">0962670926</div>
          </div>
          <div className="flex gap-2 flex-col">
            <div className="uppercase">Email</div>
            <div className="text-xl">info@omodajaecoo.vn</div>
          </div>
          <div className="flex gap-2 flex-col">
            <div className="uppercase">Địa chỉ</div>
            <div className="text-xl">
              Toà nhà Geleximco, số 36, Phố Hoàng Cầu, Phường Ô Chợ Dừa, Quận
              Đống Đa, Thành phố Hà Nội
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="border-[0.5px] border-whiter rounded-md p-8 py-4 flex flex-col gap-4 sm:gap-0 sm:flex-row sm:py-6 justify-between items-center w-full md:w-[80%] xl:w-[50%] max-w-[800px] xl:max-w-[400px]">
            <div className="h-[30px] uppercase text-xl font-[470] flex items-center">
              Social
            </div>
            <div className="h-[30px] flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.96.96 0 0 1-.975.974h-1.937a.96.96 0 0 1-.963-.974"
                />
              </svg>
              <img src={footerInstagram} className="w-[30px] h-[30px]" />
              <img src={footerGlobe} className="w-[30px] h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
