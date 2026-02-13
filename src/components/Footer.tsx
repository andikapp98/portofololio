const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#050505] text-white"
      style={{
        padding: "40px 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="mx-auto flex flex-col sm:flex-row items-center justify-between"
        style={{ maxWidth: "1200px", padding: "0 clamp(24px, 6vw, 80px)", gap: "24px" }}
      >
        {/* Logo */}
        <div className="flex items-center" style={{ gap: "10px" }}>
          <div
            className="bg-orange-500 rounded-lg flex items-center justify-center"
            style={{ width: "32px", height: "32px" }}
          >
            <span
              className="text-white font-bold"
              style={{ fontSize: "11px" }}
            >
              AP
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-black text-white"
              style={{ fontSize: "14px", letterSpacing: "-0.02em" }}
            >
              APP
            </span>
            <span
              className="font-semibold text-neutral-500"
              style={{
                fontSize: "8px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Portfolio
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div
          className="flex flex-wrap items-center justify-center"
          style={{ gap: "28px" }}
        >
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-neutral-500 hover:text-orange-400 transition-colors"
              style={{ fontSize: "13px", fontWeight: 500 }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-neutral-600" style={{ fontSize: "12px" }}>
          &copy; {currentYear} Andika Permana Putra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
