"use client";
import React from "react";
import NavbarPage from "../components/NavbarPage";
import PageHero from "../components/PageHero";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { ShoppingCart, Bot, TrendingDown, MessageSquare } from "lucide-react";
import { SiMongodb, SiExpress, SiShadcnui, SiPrisma } from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { Keyboard, User, BarChart2, History } from "lucide-react";

const page = () => {
  const router = useRouter();
  const features = [
    {
      icon: <Keyboard size={20} />,
      title: "Typing Game",
      description:
        "Test and improve typing speed and accuracy through challenges",
    },
    {
      icon: <User size={20} />,
      title: "User Profiles",
      description:
        "Personal profiles with performance stats and progress tracking",
    },
    {
      icon: <BarChart2 size={20} />,
      title: "Scoreboard",
      description: "Global rankings based on typing performance",
    },
    {
      icon: <History size={20} />,
      title: "Typing History",
      description: "Review past typing results and performance trends",
    },
  ];

  const skills = [
    { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      color: "text-teal-500",
    },
    { name: "Shadcn/UI", icon: <SiShadcnui />, color: "text-slate-700" },

    { name: "Node.js", icon: <FaNode />, color: "text-green-600" },
    { name: "Express.js", icon: <SiExpress />, color: "text-slate-700" },
    { name: "Prisma", icon: <SiPrisma />, color: "text-slate-600" },
  ];

  const highlights = [
    { title: "Typing Speed & Accuracy Tracking" },
    { title: "User Profiles & Progress History" },
    { title: "Live Scoreboard Rankings" },
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
          <h1 className="text-4xl font-bold">Score Board</h1>
        </div>
        <PageHero
          title="Score Board"
          subtitle_1="Typing Game"
          subtitle_2="Web Application"
          // description="Built a full-stack e-commerce web application with distinct interfaces for both users and administrators."
          description="A full-stack MERN e-commerce platform with intelligent features and dedicated user and admin interfaces."
          features={features}
          skills={skills}
          highlights={highlights}
        />
      </div>
    </>
  );
};

export default page;
