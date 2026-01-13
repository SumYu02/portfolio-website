"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { CiCircleChevDown } from "react-icons/ci";

const projects = [
  {
    title: "KeySound",
    description:
      "Built a full-stack e-commerce web application with distinct interfaces for both users and administrators.",
    image: assets.keysound_user,
    path: "/keysound",
  },
  {
    title: "Score Board",
    description:
      "A simple typing game with a scoreboard, user profiles, and history.",
    image: assets.scoreboard_page1,
    path: "/scoreboard",
  },
  {
    title: "Fancy",
    description:
      "A token swap interface that allows users to exchange assets quickly and easily.",
    image: assets.fancy_page1,
    path: "/portfolio",
  },
];

const MyProject = () => {
  return (
    <div
      className="w-full px-[12%] pt-15 scroll-mt-20 justify-center items-center mb-20"
      id="projects"
    >
      <h4 className="text-center mb-2 text-lg">My Portfolio</h4>
      <h2 className="text-center text-4xl font-bold mb-10">
        My Latest Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-7xl">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-4 border rounded-xl p-6 bg-white hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain rounded-lg"
            />

            {project.path ? (
              <Link
                href={project.path}
                className="text-2xl font-bold hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span className="font-sans">{project.title}</span>
              </Link>
            ) : project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span className="font-sans">{project.title}</span>
              </a>
            ) : (
              <h2 className="text-2xl font-bold">{project.title}</h2>
            )}

            <p className="text-gray-600 text-sm flex-1">
              {project.description}
            </p>

            {project.path ? (
              <Link
                href={project.path}
                className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-full text-center hover:bg-gray-800 transition cursor-pointer"
              >
                View Project
              </Link>
            ) : project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-full text-center hover:bg-gray-800 transition cursor-pointer"
              >
                View Project
              </a>
            ) : (
              <span className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-full text-center hover:bg-gray-800 transition">
                View Project
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/myproject"
          className=" hover:underline text-blue-600 hover:text-blue-800  cursor-pointer mt-4 inline-block  px-6 py-2 rounded-full text-center "
        >
          <CiCircleChevDown className="w-12 h-12 text-slate-700 animate-bounce mx-auto mt-4" />
        </Link>
      </div>{" "}
      *
    </div>
  );
};

export default MyProject;
