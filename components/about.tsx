'use client'
import React from 'react'; 
import NextImage from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      className="lg:pt-72 md:pt-40 pt-20 pb-0 md:pb-0 lg:pb-0 flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-16 text-center md:text-left bg-[#0f0f0f] rounded-lg shadow-lg"
    > 
      <div className="mb-0 md:mb-0 transition-transform transform hover:scale-110">
        <NextImage
          alt="Anurag"
          className="rounded-full border-2 border-white shadow-xl h-28 w-28 md:h-48 md:w-48 lg:h-48 lg:w-48 "
          src="/anurag.jpg"
          width={288}
          height={288}
        />
      </div>
    </section>
  );
};

export default About;