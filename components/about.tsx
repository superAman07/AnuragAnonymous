'use client'
import React from 'react'; 
import NextImage from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-5 md:px-10 flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-16 text-center md:text-left bg-[#0f0f0f] rounded-lg shadow-lg"
    > 
      <div className="mb-6 md:mb-0 transition-transform transform hover:scale-110">
        <NextImage
          alt="Anurag"
          className="rounded-full border-4 border-white shadow-xl h-48 w-48 md:h-72 md:w-72"
          src="/anurag.jpg"
          width={288}
          height={288}
        />
      </div>
    </section>
  );
};

export default About;