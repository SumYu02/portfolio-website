"use client";
import React from "react";
import NavbarPage from "../components/NavbarPage";
import PageHero from "../components/PageHero";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { assets } from "@/assets/assets";
import { Repeat, Palette, Code, ArrowRight } from "lucide-react";
import Image from "next/image";

const page = () => {
  const router = useRouter();
  const features = [
    {
      icon: <Repeat size={20} />,
      title: "Token Swap Interface",
      description:
        "A simple and intuitive interface for swapping between different tokens.",
    },
    {
      icon: <Palette size={20} />,
      title: "Modern UI Design",
      description:
        "Built with React and Tailwind CSS for a clean, responsive, and modern user experience.",
    },
    {
      icon: <Code size={20} />,
      title: "Hardcoded Swap Logic",
      description:
        "Swap logic and exchange rates are hardcoded to demonstrate the swapping flow.",
    },
  ];

  const skills = [
    { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      color: "text-teal-500",
    },
  ];

  return (
    <>
      <NavbarPage />
      <div className="w-full px-[12%] ml-2 scroll-mt-20 pt-20">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <div>
          <h1 className="text-4xl font-bold">Fancy - Token Swap Interface</h1>
        </div>
        <PageHero
          title="Fancy"
          subtitle_1="Token Swap Interface"
          subtitle_2="Web Application"
          description="Fancy is a token swap interface that allows users to exchange assets quickly and easily. It is built with a modern UI using React and Tailwind CSS, with swap logic and exchange rates hardcoded for demonstration purposes."
          features={features}
          skills={skills}
          // highlights={highlights}
        />
        <div className="mt-20 gap-2 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            UI Design & Implementation
          </h1>
          <p className="text-gray-500 text-sm">
            React & Tailwind CSS • Token Swap Interface
          </p>
        </div>

        <div className="mt-12 justify-center items-center rounded-xl overflow-hidden">
          <Image
            src={assets.fancy_page1}
            alt="Fancy"
            // width={1000}
            // height={1000}
            className="w-full h-auto"
          />
        </div>
        <a
          href="https://fancy-currency-converter.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          <button className="mt-12 px-5 py-2.5 rounded-full bg-white border-2 border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 animate-bounce">
            <div className="flex items-center gap-2">
              Visit Website <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-20 w-full bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-gray-600 font-medium">
            &copy; {new Date().getFullYear()} Sum Yu. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default page;
