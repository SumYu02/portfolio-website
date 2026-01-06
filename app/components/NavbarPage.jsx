import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const NavbarPage = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-full -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="w-full"
        />
      </div>
      <div className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50">
        <div className="flex items-center justify-between w-full max-w-7xl">
          <a href="/">
            <h1 className="text-3xl font-bold text-gray-800 font-sans">
              Sum Yu<span className="text-red-700 text-3xl">.</span>
            </h1>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
