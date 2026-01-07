"use client";
import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import NavbarPage from "../components/NavbarPage";
import { SiFirebase } from "react-icons/si";
import PageHero from "../components/PageHero";
import { TbBrandReactNative } from "react-icons/tb";
import { Timer, BarChart, CheckSquare, Bell, Users } from "lucide-react";

const Pomotask = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: assets.pomotask_page1,
      title: "Pomotask",
      description: "",
    },
    {
      image: assets.pomotask_page2,
      title: "Home Page",
      description: "",
    },
    {
      image: assets.pomotask_page3,
      title: "Statistics Page",
      description: "",
    },
    {
      image: assets.pomotask_page4,
      title: "Timer Page",
      description: "",
    },
    {
      image: assets.pomotask_page5,
      title: "Notification Page",
      description: "",
    },
    {
      image: assets.pomotask_page6,
      title: "Profile Page",
      description: "",
    },
  ];

  const features = [
    {
      icon: <Timer size={20} />,
      title: "Pomodoro Timer",
      description: "Focus sessions with structured work and break intervals",
    },
    {
      icon: <BarChart size={20} />,
      title: "Productivity Statistics",
      description: "Track focus time and task completion insights",
    },
    {
      icon: <CheckSquare size={20} />,
      title: "Task Management",
      description: "Create, organize, and manage daily tasks",
    },
    {
      icon: <Bell size={20} />,
      title: "Task Alerts",
      description: "Get notified when it's time to complete your tasks",
    },
  ];

  const skills = [
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },

    {
      name: "React Native",
      icon: <TbBrandReactNative />,
      color: "text-blue-400",
    },
  ];
  const highlights = [
    { title: "Fully Developed with Cursor AI" },
    { title: "AI-Powered Coding" },
    { title: "Efficient & Intelligent Code Generation" },
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];
  const imageSrc = currentSlideData?.image;

  return (
    <>
      <NavbarPage />
      <div className="min-h-screen flex flex-col pt-18">
        <div className="w-full px-[12%] pt-10 ml-2 scroll-mt-20 flex-1">
          <div className="flex justify-end">
            <Link
              href="/"
              className="flex flex-row gap-3 items-center px-4 py-2 rounded-full bg-gray-200"
            >
              <FaArrowLeft />
            </Link>
          </div>

          <div>
            <h1 className="text-4xl font-bold">Pomotask</h1>

            <PageHero
              title="Pomotask"
              subtitle_1="Study Planner"
              subtitle_2="Task Manager"
              description="Study Planner and Task Manager with Pomodoro Application."
              features={features}
              skills={skills}
              highlights={highlights}
            />
          </div>

          <div className="flex flex-col gap-3 mt-20 mb-10 px-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
                <Users className="text-blue-600" size={18} />
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Team Project
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Group Assignment
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto ">
            <div className="relative">
              {imageSrc ? (
                <div className="mx-auto w-full max-w-xs sm:max-w-sm">
                  <Image
                    src={imageSrc}
                    alt={currentSlideData.title}
                    className="w-full h-auto rounded-xl shadow"
                  />
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                  <p className="text-gray-500">Image not available</p>
                </div>
              )}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3  rounded-full hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronLeft className="size-3 sm:size-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3  rounded-full hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronRight className="size-3 sm:size-5" />
              </button>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-black scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <div className="text-center mt-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {currentSlideData?.title || "Untitled"}
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {currentSlideData?.description || ""}
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-16 w-full bg-gray-100 border-t border-gray-200 py-6 flex flex-col items-center text-center text-gray-600 text-sm">
          <div>
            &copy; {new Date().getFullYear()} Sum Yu. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Pomotask;
