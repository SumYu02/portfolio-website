import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { assets } from "@/assets/assets";
import Image from "next/image";
import NavbarPage from "../components/NavbarPage";
import PageHero from "../components/PageHero";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { Code2, Layers } from "lucide-react";

const Portfolio = () => {
  const skills = [
    { name: "Next.js", icon: <RiNextjsLine />, color: "text-slate-700" },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      color: "text-teal-500",
    },
  ];

  return (
    <>
      <NavbarPage />
      <div className="min-h-screen flex flex-col pt-18 bg-white">
        <div className="w-full px-4 sm:px-[8%] lg:px-[12%] pt-10 scroll-mt-20 flex-1">
          <div className="flex justify-end mb-6">
            <Link
              href="/"
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <PageHero
            title="Portfolio Website"
            subtitle_1="Portfolio"
            subtitle_2="Website"
            description="Showcases projects, skills and experience in a clean, professional portfolio."
            skills={skills}
          />

          {/* Main Preview */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="text-center mb-8">
              <div className="inline-block mb-3">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Live Preview
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Portfolio Showcase
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl border-2 border-gray-100 p-4 shadow-xl overflow-hidden">
                <div className="cursor-pointer group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={assets.portfolio_image}
                    alt="Portfolio Preview"
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-200">
                <Code2 className="text-purple-600" size={18} />
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                  Technical Details
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Code Structure
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl border-2 border-gray-100 p-4 shadow-xl overflow-hidden">
                <div className="cursor-pointer group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={assets.code_structure}
                    alt="Code Structure"
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-100 shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <Layers className="text-blue-600" size={20} />
                </div>
                Project Architecture
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                This portfolio website is built entirely with React and Tailwind
                CSS, with a minimal integration of external APIs. Specifically,
                it connects to the Web3Forms API to handle contact form
                submissions without the need for a backend.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The project was created to deepen my understanding of
                component-based development and responsive design using modern
                frontend technologies. It emphasizes clean UI, a modular
                structure and hands-on experience with the React and Tailwind
                CSS ecosystem.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-100">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-blue-600">
                    Key Focus:
                  </span>{" "}
                  Component-based architecture, responsive design and showcasing
                  previous project contributions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 w-full bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="text-gray-600 font-medium">
              &copy; {new Date().getFullYear()} Sum Yu. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
