"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoSrc from "@/public/logo.png";

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
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
   const handleMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);  
  };
  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    } 
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isMenuOpen]);

  return (
    <header id="home" className="relative z-0 bg-[#0f0f0f] min-h-screen">
      <div className="flex justify-between absolute top-5 px-5  z-50 w-full h-[100px]">
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
        <div className="absolute top-8 right-5 z-[60]">
          <button
            type="button"
            className="w-12 h-12 flex flex-col cursor-pointer justify-center items-center focus:outline-none group relative"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <div className="relative w-8 h-6 flex flex-col justify-center">
              <span
                className={`hamburger-line transform transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "rotate-45 translate-y-0 absolute top-1/2 -mt-0.5"
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
                    ? "-rotate-45 translate-y-0 absolute top-1/2 -mt-0.5"
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
            <a href="#" className="text-5xl font-bold mb-8 hover:text-[#5668e2]">
              ANIMATIONS
            </a>
            <a href="#" className="text-5xl font-bold mb-8 hover:text-[#5668e2]">
              STILL IMAGES
            </a>
            <a href="#contact" onClick={handleContactClick} className="text-5xl font-bold hover:text-[#5668e2]">
              CONTACT
            </a>
          </nav>
        </div>
      </div>

      <div className="relative h-[70vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-[70vh] object-cover"
          id="background-video"
        >
          <source src="/portfolio-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
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

      <div className="bg-[#0f0f0f] py-20">
        <div className="container mx-auto w-full px-6 text-center">
          <h1 className="text-[50px] font-bold mb-4 text-[#efefef]">
            Anonymous AnuraG - VFX Generalist
          </h1>
          <button
            type="button"
            className="bg-transparent cursor-pointer border-[4px] text-[#efefef] text-[20px] font-bold h-[65px] w-[230px] px-8 py-3 rounded-none hover:bg-[#5668e2] hover:border-[#5668e2] hover:text-[#202020] transition-colors uppercase tracking-wider"
          >
            ShowReel
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
