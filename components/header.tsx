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
        (header as HTMLElement).style.paddingRight = `${scrollbarWidth}px`;
      }
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
      if (header) {
        (header as HTMLElement).style.paddingRight = "0px";
      }
    }
    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
      if (header) {
        (header as HTMLElement).style.paddingRight = "0px";
      }
    };
  }, [isMenuOpen]);

  return (
    <header id="home" className="relative bg-[#0f0f0f] h-[100dvh]">
      <div className="header-container flex fixed justify-between items-center top-0 left-0 pr-0 right-0 px-0 z-50 w-full h-[100px]">
        <Link
          href="#home"
          scroll={false}
          onClick={(e) => {
            e.preventDefault();
            const home = document.getElementById("home");
            if (home) {
              home.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="w-[115px] h-[100px] relative z-[100] ml-0"
        >
          <Image
            src={logoSrc}
            alt="Logo"
            width={115}
            height={100}
            className="object-contain mix-blend-color-dodge z-[100]"
            priority
          />
        </Link>
        <div className="relative flex justify-center items-center z-[60] mr-0 ">
          <button
            type="button"
            className="w-12 h-14 cursor-pointer"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <div className="relative w-8 h-8 flex flex-col justify-center items-center gap-[5px]">
              <span
                className={`block h-1 bg-[#efefef] self-start rounded-sm transform transition-all duration-300 ease-out ${isMenuOpen ? "w-8 rotate-45 translate-y-[6px] translate-x-0" : "w-5"
                  }`}
              ></span>
              <span
                className={`block w-8 h-1 bg-[#efefef] rounded-sm ml-auto transition-all duration-300 ease-out ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
              ></span>
              <span
                className={`block h-1 bg-[#efefef] self-end rounded-sm transform transition-all duration-300 ease-out ${isMenuOpen ? "w-8 -rotate-45 -translate-y-[12px] translate-x-0" : "w-5"
                  }`}
              ></span>
            </div>
          </button>
        </div>
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 md:block hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{ background: "transparent" }}
          />
        )}
        <div
          className={`
            fixed top-0 left-0 h-[100dvh] z-50 transition-transform duration-500
            w-full bg-black/60 backdrop-blur-sm
            ${isMenuOpen ? "translate-x-0" : "-translate-y-full"}
            md:left-auto md:right-0 md:w-[250px] md:bg-black/80 md:backdrop-blur-lg
            md:translate-x-0 md:translate-y-0
            ${isMenuOpen ? "" : "md:translate-x-full"}
            md:transition-transform
          `}
          style={{
            ...(isMenuOpen ? {} : { pointerEvents: "none" }),
          }}
        >
          <nav className="h-full flex flex-col items-center justify-center text-[#efefef] md:items-center md:justify-start md:pt-24 md:px-8">
            <Link
              href="/"
              className="text-4xl font-light mb-8 hover:text-[#4b70f5] md:text-3xl md:mb-10"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-4xl font-light mb-8 hover:text-[#4b70f5] md:text-3xl md:mb-10"
            >
              Gallery
            </Link>
            <Link
              href="/projects"
              className="text-4xl font-light mb-8 hover:text-[#4b70f5] md:text-3xl md:mb-10"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-4xl font-light mb-8 hover:text-[#4b70f5] md:text-3xl md:mb-10"
            >
              Animations
            </Link>
            <Link
              href="#contact"
              onClick={handleContactClick}
              className="text-4xl font-light mb-8 hover:text-[#4b70f5] md:text-3xl md:mb-10"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={handleContactClick}
              className="text-4xl font-light hover:text-[#4b70f5] md:text-3xl"
            >
              Contact
            </Link>
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
          <div className="relative text-[#efefef] flex flex-col justify-center z-30 mt-40 h-full items-center md:items-start">
            {["Hiii!", "this is Anurag.."].map((text, index) => (
              <motion.p
                key={index}
                className="text-xl md:text-3xl mt-1 font-semibold tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.5 }}
              >
                {text}
              </motion.p>
            ))}
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

      <div className="bg-[#0f0f0f] py-14 sm:py-20 md:py-20">
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
