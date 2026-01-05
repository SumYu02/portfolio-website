import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="sm:pt-15 mt-15">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 font-sans mb-2">
          Sum Yu<span className="text-red-700 text-3xl">.</span>
        </h1>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6 " />{" "}
          syu22918@gmail.com
        </div>
      </div>

      <div className="text-center mt-12 sm:flex justify-between border-t border-gray-400 mx-[10%] py-6">
        <p>© 2026 Sum Yu. All rights reserved.</p>
        <ul className="flex gap-10 items-center justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/SumYu02">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sum-yu-2a880631b/?trk=public-profile-join-page"
            >
              LinkedIn
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
