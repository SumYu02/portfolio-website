"use client";
import React from "react";
import NavbarPage from "../components/NavbarPage";
import PageHero from "../components/PageHero";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { SiExpress, SiShadcnui, SiPrisma } from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { Keyboard, User, BarChart2, History } from "lucide-react";
import CarouselImage from "../components/CarouselImage";
import { assets } from "@/assets/assets";

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
      description: "Personal profiles with individual score displays.",
    },
    {
      icon: <BarChart2 size={20} />,
      title: "Scoreboard",
      description: "Global rankings based on score",
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
          description="Score Board is a typing game website built with a modern UI and a backend powered by Prisma, created to explore a new database experience. It also features theme switching with light and dark modes."
          features={features}
          skills={skills}
          highlights={highlights}
        />
        <div className="mt-20 gap-2 text-center">
          <div className="inline-block mb-3">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Interface Design
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-100 via-slate-700 to-neutral-100 bg-clip-text text-transparent mb-3">
            Light Mode
          </h1>
        </div>

        <div className="mt-12">
          <CarouselImage
            images={[
              assets.score_home,
              assets.score_board,
              assets.score_history,
              assets.score_profile,
              assets.score_about,
              assets.score_game_1,
              assets.score_game_2,
              assets.score_game_3,
              assets.score_game_4,
              assets.score_game_5,
              assets.score_game_6,
            ]}
            autoPlay={true}
            autoPlayInterval={1500}
          />
        </div>

        <div className="mt-20 gap-2 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-100 via-slate-700 to-neutral-100 bg-clip-text text-transparent mb-3">
            Dark Mode
          </h1>

          <div className="mt-12">
            <CarouselImage
              images={[
                assets.score_home_dark,
                assets.score_board_dark,
                assets.score_history_dark,
                assets.score_profile_dark,
                assets.score_about_dark,
                assets.score_game1_dark,
                assets.score_game2_dark,
                assets.score_game3_dark,
                assets.score_game4_dark,
                assets.score_game5_dark,
                assets.score_game6_dark,
              ]}
              autoPlay={true}
              autoPlayInterval={1500}
            />
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
    </>
  );
};

export default page;
