import React from 'react'
import {
    FaArrowLeft,
    FaChevronLeft,
    FaChevronRight,
    FaReact,
    FaNode,
  } from "react-icons/fa"; // Font Awesome icon
  import { SiMongodb, SiExpress } from "react-icons/si";
  import { RiTailwindCssFill } from "react-icons/ri";
  import {
    ShoppingCart,
    Bot,
    TrendingDown,
    MessageSquare,
    Award,
  } from "lucide-react";
const PageHero = ({  title,subtitle_1, subtitle_2,description, features, skills,highlights }) => {
  return (
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
            <span className="text-gray-600">{highlights[0].title}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <span className="text-gray-600">{highlights[1].title}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
            <span className="text-gray-600">{highlights[2].title}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PageHero