import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full px-[12%] pt-10 ml-2 scroll-mt-20 flex-1">
        <div className="flex justify-end">
          <Link
            href="/"
            className="flex flex-row gap-3 items-center px-4 py-2 rounded-full bg-gray-200"
          >
            <FaArrowLeft />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>

        <div>
          <h1 className="text-4xl font-bold">Portfolio Website</h1>

          <p className="mt-20 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            This site is powered by{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">React</span>, and styled with{" "}
            <span className="font-semibold">Tailwind CSS</span>. It&apos;s
            designed to be fast, responsive, and easy to navigate—whether
            you&apos;re checking out my work, downloading my resume, or reaching
            out to connect.
          </p>
        </div>

        <div className="mt-10 flex justify-center items-center max-w-4xl mx-auto cursor-pointer hover:scale-105 transition-all duration-300">
          <Image src={assets.portfolio_image} alt="" />
        </div>

        <p className="text-2xl font-bold text-gray-600 mt-20 text-center">
          Code Structure
        </p>
        {/* <p className="text-gray-600 text-md text-justify max-w-4xl mx-auto"></p> */}
        <div className="mt-6 flex justify-center items-center max-w-4xl mx-auto cursor-pointer hover:scale-105 transition-all duration-300">
          <Image src={assets.code_structure} alt="" className="rounded-lg" />
        </div>
        <div className="mt-6">
          <p className="text-gray-600 text-md text-justify max-w-4xl mx-auto">
            This portfolio website does not integrate any external APIs and is
            built purely with React and Tailwind CSS. It serves as a personal
            project to deepen my understanding of component-based development
            and responsive design using modern frontend technologies. The focus
            is on clean UI, modular structure, and gaining hands-on experience
            with the React and Tailwind CSS ecosystem.Additionally, it serves as
            a showcase for projects I have previously contributed to.
          </p>
        </div>
      </div>

      <footer className="mt-16 w-full bg-gray-100 border-t border-gray-200 py-6 flex flex-col items-center text-center text-gray-600 text-sm">
        <div>
          &copy; {new Date().getFullYear()} Sum Yu. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
