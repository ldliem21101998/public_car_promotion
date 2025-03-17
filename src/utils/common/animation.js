import { motion } from "framer-motion";
import { forwardRef, useRef } from "react";

export const AnimatedText = forwardRef(({ text, isInView }, ref) => {
  // Tách text thành từng ký tự
  const characters = text.split("");

  // Khai báo hiệu ứng cho từng ký tự
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: 0.05, // Thời gian giữa các ký tự
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, x: -10 }, // Vị trí ban đầu
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }, // Hiệu ứng rõ dần
  };

  return (
    <motion.div
      ref={ref}
      className="flex justify-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Kích hoạt hiệu ứng dựa vào `isInView`
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char} {/* Hiển thị khoảng trắng */}
        </motion.span>
      ))}
    </motion.div>
  );
});

// AnimatedImage Component
export const AnimatedImage = forwardRef(({ src, className, isInView }, ref) => {
  const localRef = useRef(null);
  const finalRef = ref || localRef;

  // Tạo hiệu ứng cho hình ảnh (hiển thị từ trái sang phải)
  const imageVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: { clipPath: "inset(0 0 0 0)", transition: { duration: 2 } },
  };

  return (
    <motion.img
      src={src}
      ref={finalRef}
      className={className}
      variants={imageVariants}
      initial="hidden"
      animate={isInView ? "visible" : "visible"} // Kích hoạt hiệu ứng dựa vào `isInView`
      transition={{
        duration: 2,
        delay: 0.2,
      }}
    />
  );
});
