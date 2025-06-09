"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoSrc from "@/public/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScroll = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const body = document.body;
    const header = document.querySelector(".header-container");

    if (isMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      body.style.paddingRight = `${scrollbarWidth}px`;
      if (header) {
        (header as HTMLElement).style.paddingRight = `${scrollbarWidth + 23}px`;
      }
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
      if (header) {
        (header as HTMLElement).style.paddingRight = "23px";
      }
    }
    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
      if (header) {
        (header as HTMLElement).style.paddingRight = "23px";
      }
    };
  }, [isMenuOpen]);

  return (
    <header id="home" className="relative bg-[#0f0f0f] min-h-screen">
      <div className="header-container flex fixed justify-between items-center top-5 px-5  z-50 w-full h-[100px]  ">
        <div className="w-[115px] h-[100px] relative z-[100]">
          <Image
            src={logoSrc}
            alt="Logo"
            width={115}
            height={100}
            className="object-contain mix-blend-color-dodge z-[100]"
            priority
          />
        </div>
        <div className="relative flex justify-center items-center  right-5 z-[60]">
          <button
            type="button"
            className="w-12 h-14 flex flex-col cursor-pointer justify-center items-center focus:outline-none group relative"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <div className="relative w-8 h-8 flex flex-col justify-center items-center">
              <span
                className={`hamburger-line transform transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "rotate-45 translate-y-0 absolute top-1/2 -mt-0.5 -translate-x-0"
                    : "translate-y-0"
                }`}
              ></span>
              <span
                className={`hamburger-line transition-all duration-300 ease-out ${
                  isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              ></span>
              <span
                className={`hamburger-line transform transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "-rotate-45 translate-y-0 absolute top-1/2 -mt-0.5 -translate-x-0"
                    : "translate-y-0"
                }`}
              ></span>
            </div>
          </button>
        </div>
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm h-[100dvh]  z-50 transition-transform duration-500 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="h-full flex flex-col items-center justify-center text-[#efefef]">
            <a
              href="#"
              className="text-5xl font-bold mb-8 hover:text-[#4b70f5]"
            >
              ANIMATIONS
            </a>
            <a
              href="#"
              className="text-5xl font-bold mb-8 hover:text-[#4b70f5]"
            >
              STILL IMAGES
            </a>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-5xl font-bold hover:text-[#4b70f5]"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </div>

      <div className="relative h-[60vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          id="background-video"
        >
          <source src="/portfolio-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black opacity-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-66 md:-mt-20 text-center md:text-left">
          <div className="relative text-white flex flex-col justify-center z-30 mt-40 h-full items-center md:items-start">
            {["Hiii!", "this is Anurag.."].map(
              (text, index) => (
                <motion.p
                  key={index}
                  className="text-xl md:text-3xl mt-1 font-semibold tracking-wide"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.5 }}
                >
                  {text}
                </motion.p>
              )
            )}
          </div>
        </div>

        <div className="absolute bottom-10 z-30 left-1/2 -translate-x-1/2 text-center">
          <Image
            onClick={handleScroll}
            src="/down-arrow.png"
            alt="Down arrow"
            width={40}
            height={40}
            className="filter invert brightness-200 animate-bounce cursor-pointer"
          />
        </div>
      </div>

      <div className="bg-[#0f0f0f] py-30 sm:py-16 md:py-20">
        <div className="container mx-auto w-full px-4 sm:px-6 text-center">
          <h1 className="text-[28px] sm:text-[40px] md:text-[50px] font-bold mb-4 text-[#efefef] leading-tight">
            Anonymous AnuraG - VFX Generalist
          </h1>
          <Link
            href="https://www.youtube.com/@AnonymousAnuraG/videos"
            target="_blank"
          >
            <button
              type="button"
              className="bg-transparent cursor-pointer border-2 sm:border-3 md:border-[4px] text-[#efefef] text-[16px] sm:text-[18px] md:text-[20px] font-bold h-[45px] sm:h-[55px] md:h-[65px] w-[180px] sm:w-[200px] md:w-[230px] px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-none hover:bg-[#4b70f5] hover:border-[#4b70f5] hover:text-[#202020] transition-colors uppercase tracking-wider"
            >
              ShowReel
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
