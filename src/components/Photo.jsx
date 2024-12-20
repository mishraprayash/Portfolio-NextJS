"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../public/assets/profile.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.6, ease: "easeInOut" },
          }}
          className="w-[225px] h-[225px] xl:w-[500px] xl:h-[500px] mix-blend-lighten absolute md: xl:left-0 xl:bottom-10"
        >
          <Image
            src={profilePic}
            alt="Picture"
            priority
            width={390}
            height={390}
            quality={100}
            className="object-contain opacity-90 absolute left-[40px] xl:left-[50px] top-[-8px]"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[500px] h-[300px] xl:h-[500px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
