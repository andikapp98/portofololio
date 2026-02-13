"use client";

import FadeIn from './FadeIn';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce with payment integration, admin dashboard, and real-time inventory management system.",
      category: "Fullstack",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      accent: "#f97316",
    },
    {
      id: 2,
      title: "Project Management",
      description:
        "Collaborative project management with real-time updates, Kanban boards, and team communication tools.",
      category: "Web App",
      tags: ["React", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      accent: "#3b82f6",
    },
    {
      id: 3,
      title: "Finance Dashboard",
      description:
        "Financial management dashboard with data visualization, automated reporting, and budget tracking.",
      category: "Dashboard",
      tags: ["TypeScript", "Next.js", "Prisma", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      accent: "#8b5cf6",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#0f0f0f] text-white overflow-hidden"
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
          bottom: "-150px",
          right: "-150px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)",
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
            Portfolio
          </div>

          <h2
            className="font-black text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.1,
            }}
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Projects
            </span>
          </h2>

          <p
            className="text-neutral-500 mx-auto"
            style={{
              marginTop: "16px",
              maxWidth: "500px",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              textAlign: "center",
            }}
          >
            A selection of projects that showcase my passion for building
            exceptional digital experiences.
          </p>
        </div>
        </FadeIn>

        {/* ── Projects Grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: "28px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col"
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,20,1) 0%, rgba(12,12,12,1) 100%)",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${project.accent}40`;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 24px 64px ${project.accent}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top Color Bar */}
              <div
                className={`bg-gradient-to-r ${project.gradient}`}
                style={{ height: "4px" }}
              />

              {/* Card Content */}
              <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Category Badge */}
                <span
                  className="inline-block rounded-full font-semibold text-orange-400"
                  style={{
                    padding: "4px 14px",
                    fontSize: "11px",
                    background: "rgba(249,115,22,0.1)",
                    border: "1px solid rgba(249,115,22,0.15)",
                    marginBottom: "20px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {project.category}
                </span>

                {/* Title */}
                <h3
                  className="font-bold text-white group-hover:text-orange-400 transition-colors duration-300"
                  style={{ fontSize: "1.35rem", marginBottom: "12px" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-neutral-500 leading-relaxed"
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div
                  className="flex flex-wrap"
                  style={{ gap: "8px", marginBottom: "28px" }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-neutral-400 font-medium"
                      style={{
                        padding: "5px 12px",
                        fontSize: "12px",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                    marginBottom: "20px",
                  }}
                />

                {/* Links */}
                <div
                  className="flex items-center"
                  style={{ gap: "20px" }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-neutral-500 hover:text-white transition-colors duration-200"
                    style={{ gap: "8px", fontSize: "13px", fontWeight: 500 }}
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-neutral-500 hover:text-orange-400 transition-colors duration-200"
                    style={{ gap: "8px", fontSize: "13px", fontWeight: 500 }}
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── View All Button ── */}
        <div className="text-center" style={{ marginTop: "56px" }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold text-white transition-all duration-300"
            style={{
              gap: "10px",
              padding: "16px 36px",
              fontSize: "14px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.03)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(249,115,22,0.5)";
              e.currentTarget.style.color = "#f97316";
              e.currentTarget.style.background = "rgba(249,115,22,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            View All Projects
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
