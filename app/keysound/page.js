"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { assets } from "@/assets/assets";
import NavbarPage from "../components/NavbarPage";
import PageHero from "../components/PageHero";
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
import { RiTailwindCssFill } from "react-icons/ri";
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
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      color: "text-teal-500",
    },
  ];

  const highlights = [
    {
      title: "Full-Stack Development",
    },
    {
      title: "AI Integration",
    },
    {
      title: "Real-time Features",
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
        <PageHero
          title="KeySound"
          subtitle_1="E-Commerce"
          subtitle_2="Web Application"
          // description="Built a full-stack e-commerce web application with distinct interfaces for both users and administrators."
          description="A full-stack MERN e-commerce platform with intelligent features and dedicated user and admin interfaces."
          features={features}
          skills={skills}
          highlights={highlights}
        />

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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronLeft className="size-3 sm:size-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronRight className="size-3 sm:size-5" />
              </button>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronLeft className="size-3 sm:size-6" />
              </button>
              <button
                onClick={nextSlideAdmin}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all duration-300"
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
