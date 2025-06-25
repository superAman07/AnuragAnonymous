"use client"

import { ArrowLeft, Camera, Film, Sparkles, Eye, Play, Palette } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProjectsPage() {
  const [activeReel, setActiveReel] = useState(0);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
 
    const reelInterval = setInterval(() => {
      setActiveReel((prev) => (prev + 1) % 4)
    }, 3000)

    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }))
      setSparkles(newSparkles)
    }

    generateSparkles()
    const sparkleInterval = setInterval(generateSparkles, 5000)

    return () => { 
      clearInterval(reelInterval)
      clearInterval(sparkleInterval)
    }
  }, [])

  const reels = [
    {
      name: "CINEMATIC SEQUENCES",
      status: "IN POST-PRODUCTION",
      icon: Film,
      color: "from-amber-400 to-orange-500",
    },
    {
      name: "VISUAL EFFECTS REEL",
      status: "RENDERING",
      icon: Sparkles,
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "MOTION GRAPHICS",
      status: "COMPOSITING",
      icon: Palette,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "CHARACTER ANIMATION",
      status: "FINAL TOUCHES",
      icon: Play,
      color: "from-green-400 to-emerald-500",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#efefef] relative overflow-hidden">
      {/* Film Grain Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          animation: `grain 0.1s steps(10) infinite`,
        }}
      />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />

      {/* Floating Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animation: `sparkle 3s ease-in-out infinite`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <Sparkles className="w-full h-full text-yellow-400 opacity-60" />
        </div>
      ))}

      {/* Cinematic Light Rays */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-amber-400/50 via-transparent to-transparent transform rotate-12 animate-pulse" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-purple-400/50 via-transparent to-transparent transform -rotate-12 animate-pulse delay-1000" />
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-cyan-400/50 via-transparent to-transparent transform rotate-6 animate-pulse delay-2000" />
      </div>

      {/* Back Button */}
      <div className="absolute top-8 left-8 z-50">
        <Link
          href="/"
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-lg hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium tracking-wider">BACK</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-20">
        <div className="text-center space-y-12 max-w-6xl mx-auto">
          {/* Cinematic Title */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-cyan-500/20 blur-xl animate-pulse" />
            <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8">
              <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h1>

            {/* Film Strip Decoration */}
            <div className="flex justify-center mt-6">
              <div className="w-64 h-8 bg-gradient-to-r from-transparent via-gray-800 to-transparent relative">
                <div className="absolute inset-y-0 left-0 w-4 bg-gray-700 border-r-2 border-gray-600" />
                <div className="absolute inset-y-0 right-0 w-4 bg-gray-700 border-l-2 border-gray-600" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-2">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-600 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Message */}
          <div className="text-center space-y-6">
            <p className="text-2xl md:text-3xl font-light tracking-wide text-gray-300">
              VISUAL MASTERPIECES IN DEVELOPMENT
            </p>
            <div className="flex justify-center gap-3">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" />
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-150" />
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300" />
            </div>
            <p className="text-lg tracking-widest text-gray-500 font-light">COMING SOON TO SCREENS</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
        
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg); 
          }
        }
      `}</style>
    </div>
  )
}
