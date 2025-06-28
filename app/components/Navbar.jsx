import { assets } from "@/assets/assets";
import React, { useRef } from "react";
import Image from "next/image";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-full -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="w-full"
        />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50">
        <div className="flex items-center justify-between w-full max-w-7xl">
          <a href="#top">
            <Image
              src={assets.logo}
              alt="logo"
              className="w-28 cursor-pointer"
            />
          </a>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 px-12 py-5 bg-white/40 rounded-full shadow-sm">
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">My Project</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>

          <div className="flex items-center gap-6">
            <button className="flex items-center">
              <Image src={assets.moon_icon} alt="" className="w-6" />
            </button>
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-3 border-gray-300 rounded-full border px-8 py-3"
            >
              Contact Me
              <Image src={assets.arrow_icon} className="w-3" alt="arrow" />
            </a>

            <button className="block lg:hidden ml-3" onClick={openMenu}>
              <Image src={assets.menu_black} alt="" className="w-6" />
            </button>
          </div>

          <ul
            ref={sideMenuRef}
            className="md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-gray-50 transition duration-500"
          >
            <div className="absolute top-6 right-6">
              <Image
                src={assets.close_black}
                alt=""
                className="w-4"
                onClick={closeMenu}
              />
            </div>
            <li>
              <a href="#top" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                My Project
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
