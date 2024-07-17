import Image from "next/image";
import MyMemoji from "../../../assets/images/home/my-memoji.webp";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { motion, titleVariants, upPositionVariants } from "@/utils/animations";

export default function WhatIAmStuding() {
  const [show, setShow] = useState<boolean>(true);

	setTimeout(() => {
		setShow(false);
	}, 1000 * 60 * 10); // 10 minutes

  return (
    <div className={`${!show ? "hidden" : "visible"} fixed bottom-0 md:left-10 sm:left-5 2xs:left-2 z-20`}>
      <motion.div
        className="relative bg-white w-3/5 p-3 border border-blue rounded-lg mb-3"
        initial="hidden"
        animate="visible"
        variants={titleVariants({ delay: 0.8 })}
      >
        <IoMdClose
          className="text-2xl absolute top-[-.2rem] left-[95%] cursor-pointer bg-blue rounded-full text-white"
          size={14}
          onClick={() => setShow(false)}
        />
        <div className="text-gray-800 text-sm">
          <p className="text-md text-gray-400 leading-4">
            <span className="text-gray-500">
              Olá! Atualmente estou estudando
            </span>{" "}
            Golang <span className="text-gray-500">e</span> Cloud
          </p>
        </div>
        <div className="absolute left-[39px] bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r border-b border-blue"></div>
      </motion.div>
      <motion.div
        className=""
        initial="hidden"
        animate="visible"
        variants={titleVariants({ delay: 0.4 })}
      >
        <Image
          className=" w-32"
          src={MyMemoji}
          alt="My Memoji"
          width={1200}
          height={1200}
        />
      </motion.div>
    </div>
  );
}
