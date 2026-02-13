"use client";

import { useState } from "react";
import FadeIn from './FadeIn';

/* ═══════════════════════════════════════════
   CONTACT SECTION
   ═══════════════════════════════════════════ */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Pesan berhasil dikirim! Terima kasih telah menghubungi saya.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      title: "Email",
      value: "andika@example.com",
      href: "mailto:andika@example.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 7l-10 7L2 7" />
        </svg>
      ),
    },
    {
      title: "Phone",
      value: "+62 812 3456 7890",
      href: "tel:+6281234567890",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      title: "Location",
      value: "Jakarta, Indonesia",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
      style={{ padding: "100px 0" }}
    >
      {/* Background */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10 mx-auto"
        style={{ maxWidth: "1400px", padding: "0 clamp(24px, 4vw, 60px)" }}
      >
        {/* ── Section Header ── */}
        <FadeIn variant="fadeUp">
        <div className="flex flex-col items-center text-center" style={{ marginBottom: "64px" }}>
          <div
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 border border-neutral-800 text-orange-500 font-bold tracking-widest uppercase"
            style={{
              padding: "6px 16px",
              fontSize: "11px",
              marginBottom: "20px",
            }}
          >
            <span
              className="rounded-full bg-orange-500"
              style={{ width: "6px", height: "6px" }}
            />
            Contact
          </div>

          <h2
            className="font-black text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.1,
            }}
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Touch
            </span>
          </h2>

          <p
            className="text-neutral-500"
            style={{
              marginTop: "16px",
              maxWidth: "500px",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </div>
        </FadeIn>

        {/* ── Contact Info + Form ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: "32px",
          }}
        >
          {/* Contact Info + Social */}
          <div className="flex flex-col" style={{ gap: "20px" }}>
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="flex items-center transition-all duration-300"
                style={{
                  gap: "16px",
                  padding: "20px 24px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, rgba(23,23,23,1) 0%, rgba(15,15,15,1) 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(249,115,22,0.3)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.06)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  className="flex items-center justify-center text-orange-500 shrink-0"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(249,115,22,0.1)",
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <p
                    className="text-neutral-500 uppercase font-medium"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      marginBottom: "4px",
                    }}
                  >
                    {info.title}
                  </p>
                  <p
                    className="text-white font-medium"
                    style={{ fontSize: "14px" }}
                  >
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div style={{ marginTop: "8px" }}>
              <p
                className="text-neutral-500 uppercase font-medium"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  marginBottom: "14px",
                }}
              >
                Follow Me
              </p>
              <div className="flex" style={{ gap: "10px" }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center justify-center text-neutral-500 hover:text-orange-400 transition-all duration-200"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(249,115,22,0.3)";
                      e.currentTarget.style.background =
                        "rgba(249,115,22,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              padding: "36px 32px",
              borderRadius: "20px",
              background:
                "linear-gradient(145deg, rgba(20,20,20,1) 0%, rgba(12,12,12,1) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col"
              style={{ gap: "20px" }}
            >
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: "16px",
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-neutral-400 font-medium"
                    style={{
                      fontSize: "12px",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full text-white placeholder-neutral-600 outline-none transition-all duration-200"
                    style={{
                      padding: "14px 16px",
                      fontSize: "14px",
                      borderRadius: "12px",
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#f97316";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(249,115,22,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-neutral-400 font-medium"
                    style={{
                      fontSize: "12px",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full text-white placeholder-neutral-600 outline-none transition-all duration-200"
                    style={{
                      padding: "14px 16px",
                      fontSize: "14px",
                      borderRadius: "12px",
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#f97316";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(249,115,22,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-neutral-400 font-medium"
                  style={{
                    fontSize: "12px",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full text-white placeholder-neutral-600 outline-none transition-all duration-200 resize-none"
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    borderRadius: "12px",
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#f97316";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(249,115,22,0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-semibold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  padding: "16px",
                  fontSize: "14px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  boxShadow: "0 4px 24px rgba(249,115,22,0.2)",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting)
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(249,115,22,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(249,115,22,0.2)";
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
