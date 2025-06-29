import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="md:pt-25 mx-auto h-screen flex flex-col gap-4 items-center justify-center max-w-3xl w-11/12">
      <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 ">
        <Image
          src={assets.picofme_image}
          alt=""
          className="rounded-full w-36"
        />

        <h3 className=" flex items-end gap-2 text-xl md:text-2xl ">
          Hi! I'm <span>Sum Yu</span>
          <Image src={assets.hand_icon} alt="" className="w-6 mb-2" />
        </h3>
        <h1 className="max-w-2xl mx-auto text-3xl sm:text-6xl lg:text-[62px] ">
          I'm a fresh graduate seeking a front-end or full-stack role.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-justify">
          I am a recent Computer Science graduate from Universiti Tunku Abdul
          Rahman (UTAR). Proficient in both front-end and back-end technologies,
          with hands-on experience gained through internship and academic
          projects. I bring strong problem-solving skills and a passion for
          building efficient, scalable, and user-friendly web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=60194883347"
            className="bg-black text-white border border-gray-500 rounded-full px-10 py-3 flex items-center gap-2"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>

          <a
            href="/RESUME- Wong Sum Yu.pdf"
            download
            className="border border-gray-500 rounded-full px-10 py-3 flex items-center gap-2"
          >
            Download CV
            <Image src={assets.download_icon} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
