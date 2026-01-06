"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { assets } from "@/assets/assets";
import NavbarPage from "../components/NavbarPage";
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaReact,
  FaNode,
} from "react-icons/fa"; // Font Awesome icon
import { SiMongodb, SiExpress } from "react-icons/si";
import {
  ShoppingCart,
  Bot,
  TrendingDown,
  MessageSquare,
  Award,
} from "lucide-react";
import GithubSection from "../components/GithubSection";

export default function KeysoundPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideAdmin, setCurrentSlideAdmin] = useState(0);

  const features = [
    {
      icon: <ShoppingCart size={20} />,
      title: "Recommendation System",
      description: "AI-powered personalized product suggestions",
    },
    {
      icon: <Bot size={20} />,
      title: "AI Chatbot",
      description: "24/7 intelligent customer support",
    },
    {
      icon: <TrendingDown size={20} />,
      title: "Price-Drop Watch",
      description: "Real-time price change notifications",
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Make Offer",
      description: "Direct price negotiation with sellers",
    },
  ];

  const slides = [
    {
      image: assets.keysound_user_page1,
      title: "Home Page",
      description: "",
    },
    {
      image: assets.keysound_user_page2,
      title: "Product Catalog",
      description: "",
    },
    {
      image: assets.keysound_user_page3,
      title: "About Us",
      description: "",
    },
    {
      image: assets.keysound_user_page4,
      title: "Order Analytics",
      description: "",
    },
    {
      image: assets.keysound_user_page5,
      title: "Watch Price Drop",
      description: "",
    },
    {
      image: assets.keysound_user_page6,
      title: "My Offer",
      description: "",
    },
    {
      image: assets.keysound_user_page7,
      title: "Product Page",
      description: "",
    },
    {
      image: assets.keysound_user_page8,
      title: "Product Page with Make Offer",
      description: "",
    },
    {
      image: assets.keysound_user_page9,
      title: "Shopping Cart",
      description: "",
    },
    {
      image: assets.keysound_user_page10,
      title: "Order Page",
      description: "",
    },
  ];

  const slidesAdmin = [
    {
      image: assets.keysound_admin_page1,
      title: "Dashboard",
      description: "",
    },
    {
      image: assets.keysound_admin_page2,
      title: "Add Product Page",
      description: "",
    },
    {
      image: assets.keysound_admin_page3,
      title: "Product List",
      description: "",
    },
    {
      image: assets.keysound_admin_page4,
      title: "Order List",
      description: "",
    },
    {
      image: assets.keysound_admin_page5,
      title: "Contact Message Page",
      description: "",
    },
    {
      image: assets.keysound_admin_page6,
      title: "Customer Chat Support Page",
      description: "",
    },
    {
      image: assets.keysound_admin_page7,
      title: "Offer Management Page",
      description: "",
    },
  ];

  const skills = [
    { name: "MongoDB", icon: <SiMongodb />, color: "text-blue-600" },
    { name: "Express.js", icon: <SiExpress />, color: "text-slate-700" },
    { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
    { name: "Node.js", icon: <FaNode />, color: "text-green-600" },
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

  const nextSlideAdmin = () => {
    setCurrentSlideAdmin((prev) => (prev + 1) % slidesAdmin.length);
  };

  const prevSlideAdmin = () => {
    setCurrentSlideAdmin(
      (prev) => (prev - 1 + slidesAdmin.length) % slidesAdmin.length
    );
  };

  const goToSlideAdmin = (index) => {
    setCurrentSlideAdmin(index);
  };

  // Safety check to ensure current slide image exists
  const currentSlideData = slides[currentSlide];
  const imageSrc = currentSlideData?.image;

  return (
    <>
      <NavbarPage />
      <div className="w-full px-[12%] ml-2 scroll-mt-20 pt-20">
        <div className="flex justify-end">
          <Link
            href="/"
            className="flex flex-row gap-3 items-center px-4 py-2 rounded-full bg-gray-200"
          >
            <FaArrowLeft />
          </Link>
        </div>

        <div>
          <h1 className="text-4xl font-bold">KeySound</h1>
        </div>

        <div className="mt-10 sm:ml-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-sm">
              <Award className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
                Capstone Project
              </p>
              <p className="text-2xl font-bold text-gray-800">
                Final Year Project
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-gray-100 shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Enhanced E-Commerce Platform
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                This project addresses key gaps in modern e-commerce by
                developing an enhanced platform using the MERN stack. The system
                features two main components: a User Website and an Admin
                Website, designed to provide a seamless shopping experience with
                intelligent automation and personalization.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`group ${skill.color} px-5 py-3 rounded-full border-2 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Key Features
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 border border-gray-100">
                      <div className="text-blue-600">{feature.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm mb-1">
                        {feature.title}
                      </p>
                      <p className="text-xs text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Highlights */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600">AI Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-600">Real-time Features</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-14">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-600 mb-5">
            User Website
          </h1>

          <div className="relative max-w-6xl mx-auto">
            <div className="relative">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={currentSlideData.title}
                  className="w-full h-auto"
                />
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

          <div className="text-center mt-2 text-sm text-gray-600">
            {currentSlide + 1}/{slides.length}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-20">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-600 mb-5">
            Admin Website
          </h1>

          <div className="relative max-w-6xl mx-auto">
            <div className="relative">
              <Image
                src={slidesAdmin[currentSlideAdmin].image}
                alt={slidesAdmin[currentSlideAdmin].title}
                className="w-full h-auto transition-transform duration-500 ease-in-out"
              />

              <button
                onClick={prevSlideAdmin}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronLeft className="size-3 sm:size-6" />
              </button>
              <button
                onClick={nextSlideAdmin}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronRight className="size-3 sm:size-6" />
              </button>

              <div className="flex justify-center mt-6 gap-2">
                {slidesAdmin.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlideAdmin(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlideAdmin
                        ? "bg-black scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <div className="text-center mt-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {slidesAdmin[currentSlideAdmin].title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  {slidesAdmin[currentSlideAdmin].description}
                </p>
              </div>
            </div>

            <div className="text-center mt-2 text-sm text-gray-600">
              {currentSlideAdmin + 1}/{slidesAdmin.length}
            </div>
          </div>

          <GithubSection />
        </div>
      </div>
      <footer className="mt-16 w-full bg-gray-100 border-t border-gray-200 py-6 flex flex-col items-center text-center text-gray-600 text-sm">
        <div>
          &copy; {new Date().getFullYear()} Sum Yu. All rights reserved.
        </div>
      </footer>
    </>
  );
}
