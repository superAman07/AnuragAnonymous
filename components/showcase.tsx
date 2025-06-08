'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Image from 'next/image';

export const Collections = [
    {
        id:1,
        videoUrl:"/img_1.png",
        title: "Compositing",
        description: "bla bla bla bla bla",
    },
    {
        id:2,
        videoUrl:"/img_2.png",
        title: "Full CG Shot",
        description: "bla bla bla bla bla",
    },
    {
        id:3,
        videoUrl:"/img_3.png",
        title: "Product Visualization",
        description: "bla bla bla bla bla",
    }
]

const ShowCaseAfterContent = () => { 
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: 'ease-in',  
      once: false, 
      mirror: true,  
    });
  }, []);

  return (
    <section id="projects" className="p-5 bg-[#0f0f0f]">
      <div className="flex flex-col items-center space-y-16">
        {Collections.map((value, index) => (
          <div
            key={value.id}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center w-full lg:w-4/5 gap-4`}
          > 
            <div className="flex-shrink-0 w-full sm:w-1/2 transition-transform duration-300 transform hover:scale-105">
              <div className="relative w-full pt-[56.25%]">
                <Image
                  src={value.videoUrl}
                  alt={value.title}
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
                  width={200}
                  height={200}
                  title={value.title}
                />
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
                <p className="text-[#5862a5] text-lg sm:text-xl mt-3 leading-relaxed">
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