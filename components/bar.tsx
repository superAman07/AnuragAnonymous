'use client'
import { useEffect, useState } from "react";

export default function StatsBar() {
  const [inView, setInView] = useState(false);
  const [clientsCount, setClientsCount] = useState(0);
  const [videosCount, setVideosCount] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);

  const targetClients = 15;
  const targetVideos = 100;
  const targetViews = 5;

  const incrementClients = 1;
  const incrementVideos = 10;  
  const incrementViews = 1;  
  const animationSpeedClients = 100; 
  const animationSpeedVideos = 30;  
  const animationSpeedViews = 150; 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }  
    );
    const statsBarElement = document.querySelector("#stats-bar");
    if (statsBarElement) {
      observer.observe(statsBarElement);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []); 

  useEffect(() => {
    if (inView) { 
      const clientsInterval = setInterval(() => {
        setClientsCount((prevCount) => {
          if (prevCount < targetClients) {
            return prevCount + incrementClients;
          } else {
            clearInterval(clientsInterval);
            return targetClients;
          }
        });
      }, animationSpeedClients);

      const videosInterval = setInterval(() => {
        setVideosCount((prevCount) => {
          if (prevCount < targetVideos) {
            return prevCount + incrementVideos;
          } else {
            clearInterval(videosInterval);
            return targetVideos;
          }
        });
      }, animationSpeedVideos);

      const viewsInterval = setInterval(() => {
        setViewsCount((prevCount) => {
          if (prevCount < targetViews) {
            return prevCount + incrementViews;
          } else {
            clearInterval(viewsInterval);
            return targetViews;
          }
        });
      }, animationSpeedViews);

      return () => {
        clearInterval(clientsInterval);
        clearInterval(videosInterval);
        clearInterval(viewsInterval);
      };
    }
  }, [inView]);

  return (
    <section
      id="stats-bar"
      className="items-center bg-[#0f0f0f] py-20 mt-12 mb-16"
    >
      <div className="flex flex-wrap justify-between px-4 md:px-40 text-center text-[#efefef] font-bold text-2xl md:text-3xl">
        <div className="font-sans w-full sm:w-1/3 mb-8 sm:mb-0">
          <span className="block text-4xl md:text-5xl">{clientsCount}+</span>
          Clients
        </div>
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <span className="block font-sans text-4xl md:text-5xl">{videosCount}+</span>
          Videos
        </div>
        <div className="w-full sm:w-1/3">
          <span className="block text-4xl font-sans md:text-5xl">{viewsCount}M+</span>
          Views
        </div>
      </div>
    </section>
  );
}