"use client"

import { ArrowLeft, Zap, Sparkles, Film } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function GalleryPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000)

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#efefef] relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20" />
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-500/30 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(239, 239, 239, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 239, 239, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Back Button */}
      <div className="absolute top-8 left-8 z-50">
        <Link
          href="/"
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium tracking-wider">BACK</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Glitch Title */}
          <div className="relative">
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 ${glitchActive ? "animate-pulse" : ""}`}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                GALLERY
              </span>
            </h1>
            {glitchActive && (
              <>
                <h1 className="absolute top-0 left-0 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-red-500 opacity-70 transform translate-x-1">
                  GALLERY
                </h1>
                <h1 className="absolute top-0 left-0 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-cyan-500 opacity-70 transform -translate-x-1">
                  GALLERY
                </h1>
              </>
            )}
          </div>

          {/* Animated Icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="animate-bounce delay-0">
              <Film className="w-12 h-12 text-cyan-400" />
            </div>
            <div className="animate-bounce delay-150">
              <Sparkles className="w-12 h-12 text-purple-400" />
            </div>
            <div className="animate-bounce delay-300">
              <Zap className="w-12 h-12 text-pink-400" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-gray-300 tracking-wide leading-relaxed">
              VISUAL MASTERPIECES LOADING...
            </p>
            <div className="w-64 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto animate-pulse" />
            <p className="text-lg text-gray-400 tracking-widest">COMING SOON</p>
          </div>

          {/* Loading Animation */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping delay-150" />
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-ping delay-300" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-sm tracking-widest text-gray-400">CREATIVITY</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">4K+</div>
              <div className="text-sm tracking-widest text-gray-400">RESOLUTION</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-sm tracking-widest text-gray-400">IMAGINATION</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  )
}
