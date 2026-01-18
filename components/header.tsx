"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoSrc from "@/public/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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

    if (isMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      body.style.paddingRight = `${scrollbarWidth}px`;
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }
    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: "/", label: "Home", onClick: null },
    { href: "/gallery", label: "Gallery", onClick: null },
    { href: "", label: "About", onClick: handleContactClick },
  ];

  return (
    <header id="home" className="relative bg-[#0f0f0f] h-[100dvh]">
      <div className="header-container flex fixed justify-between items-center top-0 left-0 right-0 px-4 md:px-6 lg:px-8 z-50 w-full h-[100px]">
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
          className="w-[115px] h-[100px] relative z-[100]"
        >
          <Image
            src={logoSrc}
            alt="Logo"
            width={115}
            height={100}
            className="object-contain mix-blend-color-dodge"
            priority
          />
        </Link>

        <nav className="hidden lg:flex justify-end items-center flex-grow gap-8 xl:gap-12 mr-14">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={item.onClick || undefined}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`text-[#efefef] text-base xl:text-lg font-medium tracking-wide transition-all duration-300 relative ${
                hoveredItem && hoveredItem !== item.label
                  ? "opacity-40 blur-[0.5px]"
                  : "opacity-100"
              } hover:text-[#4b70f5]`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-[1.5px] bg-gradient-to-r from-[#4b70f5] to-[#7b9ff7] transition-all duration-300 ${
                  hoveredItem === item.label ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile/Tablet Hamburger Menu (visible on mobile and tablet only) */}
        <div className="relative flex justify-center items-center z-[60] lg:hidden">
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

        {/* Mobile/Tablet Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{ background: "transparent" }}
          />
        )}

        {/* Mobile/Tablet Menu Panel */}
        <div
          className={`
            fixed top-0 left-0 h-[100dvh] z-50 transition-transform duration-500 lg:hidden
            w-full bg-black/60 backdrop-blur-sm
            ${isMenuOpen ? "translate-x-0" : "-translate-y-full"}
            md:left-auto md:right-0 md:w-[250px] md:bg-black/80 md:backdrop-blur-lg
            md:translate-x-0 md:translate-y-0
            ${isMenuOpen ? "" : "md:translate-x-full"}
          `}
          style={{
            ...(isMenuOpen ? {} : { pointerEvents: "none" }),
          }}
        >
          <nav className="h-full flex flex-col items-center justify-center text-[#efefef] md:items-center md:justify-start md:pt-24 md:px-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    item.onClick(e);
                  }
                  setIsMenuOpen(false);
                }}
                className="text-4xl font-light mb-8 hover:text-[#4b70f5] transition-colors duration-300 md:text-3xl md:mb-10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative h-[70vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          id="background-video"
        >
          <source src="/portfolio-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black opacity-10"></div>

        

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

      {/* Bottom Section */}
      <div className="bg-[#0f0f0f] py-4 sm:py-6 md:py-6">
        <div className="container mx-auto w-full px-4 sm:px-6 text-center">
          <h1 className="text-[25px] sm:text-[36px] md:text-[45px] font-semibold mb-4 text-[#efefef] leading-tight">
            Anonymous AnuraG - VFX Generalist
          </h1>
          <Link
            href="https://www.youtube.com/@AnonymousAnuraG/videos"
            target="_blank"
          >
            <button
              type="button"
              className="bg-[#efefef]/5 backdrop-blur-sm cursor-pointer rounded-full border border-[#efefef]/50 text-[#efefef] text-[16px] sm:text-[18px] md:text-[20px] font-medium h-[45px] sm:h-[55px] md:h-[60px] w-[180px] sm:w-[200px] md:w-[220px] px-6 hover:bg-[#efefef] hover:text-black transition-all duration-300 tracking-wider hover:shadow-[0_0_20px_rgba(239,239,239,0.3)] uppercase"            >
              ShowReel
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;