"use client";

import FadeIn from './FadeIn';

const Skills = () => {
  const services = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building responsive, performant UIs with React, Next.js, and TypeScript. Pixel-perfect implementation with modern CSS.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="2" x2="12" y2="22" opacity="0.4" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Backend Development",
      description:
        "Designing scalable APIs and server architectures with Node.js, Express, NestJS, and efficient database management.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Database & DevOps",
      description:
        "Managing PostgreSQL, MongoDB, Redis databases. Containerization with Docker and CI/CD pipeline setup.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Fullstack Solutions",
      description:
        "End-to-end web application development from concept to deployment, including API integration and authentication.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
      style={{ padding: '100px 0' }}
    >
      {/* Background Decorations */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div
        className="relative z-10 mx-auto"
        style={{ maxWidth: '1400px', padding: '0 clamp(24px, 4vw, 60px)' }}
      >
        {/* ── Section Header ── */}
        <FadeIn variant="fadeUp">
        <div
          className="text-center"
          style={{ marginBottom: '64px' }}
        >
          {/* Top Label */}
          <div
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 border border-neutral-800 text-orange-500 font-bold tracking-widest uppercase"
            style={{ padding: '6px 16px', fontSize: '11px', marginBottom: '20px' }}
          >
            <span
              className="rounded-full bg-orange-500"
              style={{ width: '6px', height: '6px' }}
            />
            What I Do
          </div>

          <h2
            className="font-black text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}
          >
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Services
            </span>
          </h2>
        </div>
        </FadeIn>

        {/* ── Services Grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{
            gap: '24px',
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col"
              style={{
                background: 'linear-gradient(135deg, rgba(23,23,23,1) 0%, rgba(15,15,15,1) 100%)',
                borderRadius: '20px',
                padding: '36px 32px',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.4s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(249,115,22,0.3)';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 20px 60px rgba(249,115,22,0.08)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Number Watermark */}
              <span
                className="absolute font-black pointer-events-none select-none"
                style={{
                  top: '16px',
                  right: '24px',
                  fontSize: '72px',
                  lineHeight: 1,
                  color: 'rgba(255,255,255,0.03)',
                  transition: 'color 0.4s ease',
                }}
              >
                {service.number}
              </span>

              {/* Icon */}
              <div
                className="flex items-center justify-center text-orange-500 group-hover:text-white transition-colors duration-300"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(249,115,22,0.1)',
                  marginBottom: '24px',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={() => {}}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h4
                className="font-bold text-white group-hover:text-orange-400 transition-colors duration-300"
                style={{ fontSize: '1.25rem', marginBottom: '12px' }}
              >
                {service.title}
              </h4>

              {/* Description */}
              <p
                className="text-neutral-500 leading-relaxed"
                style={{ fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}
              >
                {service.description}
              </p>

              {/* Bottom Accent Line */}
              <div
                className="absolute overflow-hidden"
                style={{
                  bottom: 0,
                  left: '32px',
                  right: '32px',
                  height: '2px',
                  borderRadius: '2px',
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                  style={{
                    width: '0%',
                    transition: 'width 0.5s ease',
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.closest('.group');
                    if (parent) {
                      parent.addEventListener('mouseenter', () => {
                        el.style.width = '100%';
                      });
                      parent.addEventListener('mouseleave', () => {
                        el.style.width = '0%';
                      });
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
