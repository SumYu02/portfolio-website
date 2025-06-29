import React from "react";
import Image from "next/image";
import { assets, toolsData } from "@/assets/assets";
import { infoList } from "@/assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] sm:pt-10 scroll-mt-20">
      <h4 className="text-center text-lg mb-2">Introduction</h4>
      <h2 className="text-4xl text-center font-bold ">About Me</h2>

      <div className="flex flex-col md:flex-row gap-4 gap-20 my-20">
        <div className="w-64 sm:w-96 max-w-none">
          <Image src={assets.picofme_image} alt="about me" className="w-full" />
        </div>
        <div className="flex-1 max-w-2xl">
          <p className="mb-10">
            I am a recent Computer Science graduate from Universiti Tunku Abdul
            Rahman (UTAR). Proficient in both front-end and back-end
            technologies, with hands-on experience gained through internship and
            academic projects. I bring strong problem-solving skills and a
            passion for building efficient, scalable, and user-friendly web
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border rounded-xl p-6 cursor-pointer border-[0.5px] hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 hover:shadow-md "
              >
                <Image src={icon} alt={title} className="w-7" />
                <h3 className="text-gray-700 my-4">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
