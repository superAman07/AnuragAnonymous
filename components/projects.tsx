'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const Collections = [
    {
        id:1,
        videoUrl:"https://www.youtube.com/embed/4YWx5DkBfH4?si=j0nJTOjyE15WtaVI",
        title: "Beyond Military",
        description: "825k+ Views",
    },
    {
        id:2,
        videoUrl:"https://www.youtube.com/embed/LaJ0Gmp_Sik?si=LJBB59H47WZiiezi",
        title: "Beyond Military",
        description: "100k+ Views",
    },
    {
        id:3,
        videoUrl:"https://drive.google.com/file/d/1TO59ZuZivDENubR4Buk-2A_bkyGf-Nof/preview",
        title: "MegaBuilds",
        description: "Trial Edit",
    }
]

const Projects = () => { 
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: 'ease-in-out',  
      once: false, 
      mirror: true,  
    });
  }, []);

  return (
    <section id="projects" className="p-5 bg-[#0f0f0f]">
      <h2
        className="text-3xl md:text-4xl text-[#efefef] font-bold text-center mb-10"
        data-aos="fade-in"
      >
        Editing Work
      </h2>
      <div className="flex flex-col items-center space-y-16">
        {Collections.map((value, index) => (
          <div
            key={value.id}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center w-full lg:w-4/5 gap-4`}
          > 
            <div className="flex-shrink-0 w-full sm:w-1/2 transition-transform duration-300 transform hover:scale-105">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src={value.videoUrl}
                  className="absolute cursor-pointer inset-0 w-full h-full rounded-md shadow-lg border-none"
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '-1px',
                    right: '-1px',
                    bottom: '-1px',
                    width: 'calc(100% + 1px)',
                    height: 'calc(100% + 1px)',
                  }}
                  title={value.title}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div
              className="w-full sm:w-1/2 px-5 flex justify-center text-center sm:text-left"
              data-aos="fade-up"
            >
              <div className="flex flex-col">
                <h3 className="text-3xl sm:text-2xl md:text-4xl font-semibold text-[#efefef] transition-transform duration-300 transform hover:scale-105">
                  {value.title}
                </h3>
                <p className="text-[#efefef] text-lg sm:text-xl mt-3 leading-relaxed">
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

export default Projects;