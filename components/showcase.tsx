'use client'

import React, { useRef, useState } from 'react'; 
import Image from 'next/image';

interface BeforeProps { 
  beforeImage : string, 
  afterImage : string, 
  title : string 
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
        id:2,
        beforeImage: "/img_2_before.jpg", 
        afterImage: "/img_2_after.jpg",  
        title: "Full CG Shot",
        description: "bla bla bla bla bla",
    },
    {
        id:3,
        beforeImage: "/img_3.png", 
        afterImage: "/img_3.png",  
        title: "Product Visualization",
        description: "bla bla bla bla bla",
    }
]
const BeforeAfterSlider = ({ beforeImage, afterImage, title }:BeforeProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const sliderRef = useRef<HTMLDivElement>(null);

    interface HandleMoveEvent {
      clientX: number;
    }

    const handleMove = (e: React.MouseEvent<HTMLDivElement> | HandleMoveEvent) => {
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
            className="relative w-[590px] h-[440px] cursor-col-resize overflow-hidden"
            onMouseMove={handleMove}
            onTouchMove={(e) => handleMove(e.touches[0])}
        >
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt={`${title} After`}
                    className="object-cover"
                    width={590}
                    height={440}
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
                        className="object-cover"
                        width={590}
                        height={440}
                        priority
                    />
                </div>
            </div>

            <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
                style={{ 
                    left: `${sliderPosition}%`,
                    transform: 'translateX(-50%)',
                }}
            >
              
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <span className="block w-4 h-1 bg-gray-800 rotate-90"></span>
                        <span className="block w-4 h-1 bg-gray-800"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ShowCaseAfterContent = () => { 
    return (
        <section id="projects" className="p-5 bg-[#0f0f0f]">
            <div className="flex flex-col items-center space-y-16">
                {Collections.map((value, index) => (
                    <div
                        key={value.id}
                        className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center w-full lg:w-4/5 gap-4`}
                    > 
                        <div className="flex-shrink-0 w-full sm:w-1/2 transition-transform duration-300">
                            <BeforeAfterSlider
                                beforeImage={value.beforeImage}
                                afterImage={value.afterImage}
                                title={value.title}
                            />
                        </div>
                        
                        <div className="w-full sm:w-1/2 px-5 flex justify-center text-center sm:text-left">
                            <div className="flex flex-col">
                                <h3 className="text-3xl sm:text-2xl md:text-4xl font-semibold text-[#efefef] transition-transform duration-300">
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