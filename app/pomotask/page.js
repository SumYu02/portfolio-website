"use client";
import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

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
          <h1 className="text-4xl font-bold">Pomotask</h1>
          <h1 className="text-2xl sm:text-3xl font-bold text-center mt-16 text-gray-600 mb-10">
            Study Planner and Task Manager with Pomodoro Application
          </h1>
        </div>

        <div className="relative max-w-6xl mx-auto">
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
            >
              <FaChevronLeft className="size-3 sm:size-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
            >
              <FaChevronRight className="size-3 sm:size-6" />
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

        <div className="flex flex-col gap-3 mt-20 mb-20 text-center">
          <p className="text-2xl font-bold text-gray-600">Group Assignment</p>
          <p className="text-gray-600 text-md text-justify max-w-4xl mx-auto">
            This is a group assignment for the subject of Mobile Application
            Development.
          </p>
          <p className="text-md max-w-4xl mx-auto text-justify">
            Developed with React Native (cross-platform iOS/Android) and
            Firebase (authentication, real-time data, cloud storage).
          </p>

          <p className="text-2xl font-bold text-gray-600 mt-10 sm:mt-16">
            Overview of the features
          </p>
          <ol className="max-w-4xl mx-auto list-decimal list-inside text-gray-700 text-justify leading-relaxed mb-4">
            <li>
              <strong>Task Management</strong> – subject tags, priority flags,
              due-date alerts, and a live &ldquo;To-do / In-progress /
              Done&rdquo; board synchronized across devices.
            </li>
            <li>
              <strong>Study Planner</strong> – drag-and-drop daily/weekly
              schedules that integrate with the device&apos;s native calendar
              and warn of session clashes.
            </li>
            <li>
              <strong>Pomodoro Timer & Analytics</strong> – user-configurable
              work/break cycles that auto-log time against tasks and generate
              visual summaries of study distribution.
            </li>
          </ol>

          <p className="text-2xl font-bold text-gray-600 mt-10 sm:mt-16">
            Tools and Technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-12 mt-3 justify-center items-center">
            <Image
              src={assets.react_native_logo}
              alt="React Native"
              className="w-48 h-auto"
            />
            <Image
              src={assets.firebase_logo}
              alt="Firebase"
              className="w-48 h-auto"
            />
            <Image
              src={assets.cursor_logo}
              alt="Cursor"
              className="w-48 h-auto"
            />
          </div>
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

export default Pomotask;
