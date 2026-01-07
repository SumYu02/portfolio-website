import React from "react";
import { FaPython, FaJava, FaReact, FaNode, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiGithub,
  SiExpress,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";

const About = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <SiCplusplus className="w-6 h-6" />,
      skills: [
        { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
        { name: "Java", icon: <FaJava />, color: "text-red-600" },
        { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          color: "text-yellow-400",
        },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
      ],
    },
    {
      title: "Web Technologies",
      icon: <SiHtml5 className="w-6 h-6" />,
      skills: [
        { name: "HTML", icon: <SiHtml5 />, color: "text-orange-600" },
        { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "text-cyan-500",
        },
      ],
    },
    {
      title: "Frontend Frameworks",
      icon: <FaReact className="w-6 h-6" />,
      skills: [
        { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
        {
          name: "Next.js",
          icon: <RiNextjsLine />,
          color: "text-black",
        },
        {
          name: "React Native",
          icon: <TbBrandReactNative />,
          color: "text-blue-500",
        },
      ],
    },
    {
      title: "Backend & APIs",
      icon: <FaNode className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: <FaNode />, color: "text-green-600" },
        { name: "Express.js", icon: <SiExpress />, color: "text-slate-700" },
        { name: "Django REST", icon: <SiDjango />, color: "text-green-700" },
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="w-6 h-6" />,
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "Prisma", icon: <SiPrisma />, color: "text-slate-700" },
      ],
    },
  ];

  const extraTools = [
    { name: "Shadcn UI", color: "bg-slate-800" },
    { name: "Mantine", color: "bg-blue-600" },
    { name: "Neon Database", color: "bg-emerald-600" },
  ];
  return (
    <div className="w-full px-4 sm:px-[8%] lg:px-[12%] sm:py-16 py-8 bg-white">
      {/* Header */}
      <div id="about" className="text-center mb-4">
        <h4 className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">
          Introduction
        </h4>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
          About Me
        </h2>
        <div className="flex justify-center items-center gap-2 mt-5 mb-8">
          <SiGithub className="w-6 h-6" />:{" "}
          <a
            href="https://github.com/SumYu02"
            target="_blank"
            rel="noopener noreferrer"
          >
            SumYu02
          </a>
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
      </div>

      {/* Technical Skills Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <div className="text-blue-600 text-2xl">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-gray-800">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group/skill flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border-2 border-gray-100 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100 transition-all duration-300 hover:scale-105"
                    >
                      <span
                        className={`text-2xl ${skill.color} group-hover/skill:scale-110 transition-transform duration-300`}
                      >
                        {skill.icon}
                      </span>
                      <span className="text-sm font-semibold text-gray-700">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-pink-100/40 rounded-3xl blur-2xl" />

          <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full mb-4 shadow-sm">
                <GrTechnology className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-2xl text-gray-800 mb-2">
                Additional Tools & Libraries
              </h3>
              <p className="text-sm text-gray-600">
                Supporting technologies that enhance development workflow
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {extraTools.map((tool, idx) => (
                <div
                  key={idx}
                  className={`${tool.color} text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-default relative overflow-hidden group`}
                >
                  <span className="relative z-10">{tool.name}</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
