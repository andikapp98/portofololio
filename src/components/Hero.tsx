"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    { text: "FULLSTACK", style: "font-black", color: "text-orange-500" },
    { text: "FRONTEND", style: "font-black", color: "text-blue-500" },
    { text: "BACKEND", style: "font-bold", color: "text-green-500" },
    { text: "WEB", style: "font-extrabold tracking-widest", color: "text-purple-500" },
  ];

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 800);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#FAF9F6] relative overflow-hidden flex items-center justify-center"
    >
      {/* Orange Accent Shapes — hidden on small mobile, subtle on larger */}
      <div
        className="absolute bg-orange-500 z-10 hidden sm:block"
        style={{ left: 0, top: "33%", width: "20px", height: "160px" }}
      />
      <div
        className="absolute bg-orange-500 z-10 hidden sm:block"
        style={{ left: "40px", top: "45%", width: "20px", height: "80px" }}
      />

      <div
        className="w-full mx-auto"
        style={{ maxWidth: "1200px", padding: "100px clamp(24px, 6vw, 80px) 60px" }}
      >
        <div className="flex flex-col items-center justify-center" style={{ minHeight: "70vh" }}>
          {/* Main Typography */}
          <div
            className="text-center w-full"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <h1
              className="leading-[0.85] tracking-tight"
              style={{
                fontSize: "clamp(3rem, 14vw, 10vw)",
              }}
            >
              <span className="block text-gray-900 font-black">I&apos;M A</span>

              {/* Animated Role Text */}
              <span className="block relative overflow-hidden" style={{ height: "1.1em" }}>
                {roles.map((role, index) => (
                  <span
                    key={role.text}
                    className="absolute inset-0 flex justify-center"
                    style={{
                      opacity: index === roleIndex ? 1 : 0,
                      transform: index === roleIndex ? "scale(1)" : "scale(0.95)",
                      transition: "all 300ms ease",
                    }}
                  >
                    <span className={`${role.style} ${role.color}`}>
                      {role.text}
                    </span>
                  </span>
                ))}
              </span>

              <span className="block text-gray-900 font-black">DEVELOPER</span>
            </h1>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute left-1/2"
            style={{
              bottom: "32px",
              transform: "translateX(-50%)",
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 0.5s",
            }}
          >
            <a href="#about" className="flex flex-col items-center group">
              <div
                className="relative"
                style={{ width: "72px", height: "72px" }}
              >
                {/* Rotating text */}
                <svg
                  className="w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text
                    className="uppercase fill-gray-500"
                    style={{ fontSize: "10px", letterSpacing: "0.3em" }}
                  >
                    <textPath href="#circle">
                      • DOWN • SCROLL • DOWN • SCROLL
                    </textPath>
                  </text>
                </svg>
                {/* Arrow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="bg-orange-500 rounded-full flex items-center justify-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      boxShadow: "0 4px 16px rgba(249,115,22,0.3)",
                    }}
                  >
                    <svg
                      className="text-white"
                      style={{ width: "16px", height: "16px" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
