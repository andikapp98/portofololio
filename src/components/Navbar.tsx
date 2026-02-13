"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        style={{
          paddingTop: scrolled ? "12px" : "20px",
          paddingBottom: scrolled ? "12px" : "20px",
        }}
      >
        <div
          className="w-full grid items-center"
          style={{ 
            padding: "0 clamp(24px, 4vw, 60px)",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "24px"
          }}
        >
          {/* Logo - Left */}
          <Link href="/" className="flex items-center shrink-0 justify-self-start" style={{ gap: "8px" }}>
            <div
              className="bg-orange-500 rounded-lg flex items-center justify-center"
              style={{ width: "36px", height: "36px" }}
            >
              <span className="text-white font-bold" style={{ fontSize: "13px" }}>
                AP
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-black tracking-tight"
                style={{
                  fontSize: "15px",
                  color: scrolled ? "#111" : "#111",
                }}
              >
                APP
              </span>
              <span
                className="font-semibold uppercase"
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.2em",
                  color: "#9ca3af",
                }}
              >
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Center */}
          <div
            className="hidden md:flex items-center justify-self-center"
            style={{ gap: "32px" }}
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative transition-all duration-200"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  padding: "4px 0",
                  color:
                    activeSection === item.href.slice(1)
                      ? "#f97316"
                      : "#6b7280",
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.href.slice(1))
                    e.currentTarget.style.color = "#111";
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.href.slice(1))
                    e.currentTarget.style.color = "#6b7280";
                }}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span
                    className="absolute left-0 right-0 bg-orange-500 rounded-full"
                    style={{ bottom: "-2px", height: "2px" }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA - Right */}
          <a
            href="/cv.pdf"
            download
            className="hidden md:inline-flex items-center justify-center bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all justify-self-end"
            style={{ padding: "12px 28px", fontSize: "13px" }}
          >
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[60] p-2 justify-self-end"
            style={{ color: isOpen ? "#fff" : "#374151" }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      <div
        className="md:hidden fixed inset-0 z-[55] flex flex-col transition-all duration-300"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          className="flex flex-col justify-center items-center flex-1"
          style={{ gap: "8px", padding: "80px 32px 32px" }}
        >
          {menuItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-center transition-all duration-300"
              style={{
                fontSize: "28px",
                fontWeight: 700,
                padding: "12px 0",
                color:
                  activeSection === item.href.slice(1) ? "#f97316" : "#e5e5e5",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 80}ms`,
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Download CV in mobile menu */}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center text-white font-semibold rounded-xl transition-all"
            style={{
              marginTop: "24px",
              padding: "16px 48px",
              fontSize: "15px",
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${menuItems.length * 80}ms`,
            }}
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
