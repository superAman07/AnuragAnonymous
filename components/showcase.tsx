"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface BeforeProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export const Collections = [
  {
    id: 1,
    beforeImage: "/img_1.png",
    afterImage: "/img_1.png",
    title: "Compositing",
    description: "bla bla bla bla bla",
  },
  {
    id: 2,
    beforeImage: "/img_2_before.jpg",
    afterImage: "/img_2_after.jpg",
    title: "Full CG Shot",
    description: "bla bla bla bla bla",
  },
  {
    id: 3,
    beforeImage: "/img_3.png",
    afterImage: "/img_3.png",
    title: "Product Visualization",
    description: "bla bla bla bla bla",
  },
];
const BeforeAfterSlider = ({ beforeImage, afterImage, title }: BeforeProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  interface HandleMoveEvent {
    clientX: number;
  }

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement> | HandleMoveEvent
  ) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPosition(percent);
    }
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full max-w-[590px] aspect-[590/440] cursor-col-resize overflow-hidden mx-auto"
      onMouseMove={handleMove}
      onTouchMove={(e) => handleMove(e.touches[0])}
    >
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={`${title} After`}
          className="object-cover w-full h-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 590px"
          fill
          priority
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <div className="absolute inset-0">
          <Image
            src={beforeImage}
            alt={`${title} Before`}
            className="object-cover w-full h-full"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 590px"
            fill
            priority
          />
        </div>
      </div>

      <div
        className="absolute top-0 bottom-0 w-[1px] bg-transparent cursor-col-resize"
        style={{
          left: `${sliderPosition}%`,
          transform: "translateX(-50%)",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg flex items-center justify-center cursor-pointer transition-colors">
          <div className="flex items-center justify-center gap-1">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              className="text-gray-600"
            >
              <path
                d="M6 2L2 6L6 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className=" bg-gray-300 mx-[2px]"></div>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              className="text-gray-600"
            >
              <path
                d="M2 2L6 6L2 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShowCaseAfterContent = () => {
  return (
    <section id="projects" className="p-4 md:p-5 bg-[#0f0f0f]">
      <div className="flex flex-col items-center space-y-20 md:space-y-40">
        {Collections.map((value, index) => (
          <div
            key={value.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center w-full lg:w-4/5 gap-4 md:gap-8`}
          >
            <div className="flex-shrink-0 w-full lg:w-1/2 transition-transform duration-300">
              <BeforeAfterSlider
                beforeImage={value.beforeImage}
                afterImage={value.afterImage}
                title={value.title}
              />
            </div>

            <div className="w-full lg:w-1/2 px-4 md:px-5 flex justify-center text-center lg:text-left">
              <div className="flex flex-col">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#efefef] transition-transform duration-300">
                  {value.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl mt-2 md:mt-3 leading-relaxed text-[#5862a5]">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowCaseAfterContent;
