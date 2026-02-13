import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans scroll-mt-20"
    >
      {/* ── Background Decorations ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/8 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Orange Accent Squares */}
      <div
        className="absolute pointer-events-none"
        style={{ top: '12%', left: '3%' }}
      >
        <div
          className="bg-orange-500"
          style={{
            width: '28px',
            height: '28px',
            transform: 'rotate(12deg)',
            opacity: 0.85,
          }}
        />
        <div
          className="bg-orange-500"
          style={{
            width: '16px',
            height: '16px',
            transform: 'rotate(45deg)',
            opacity: 0.55,
            marginTop: '12px',
            marginLeft: '18px',
          }}
        />
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Main Content ── */}
      <div
        className="relative z-10 mx-auto flex flex-col lg:flex-row items-center"
        style={{ maxWidth: '1200px', padding: '60px clamp(24px, 6vw, 80px)', gap: '40px' }}
      >
        {/* ─── LEFT COLUMN: Text & Info ─── */}
        <div className="flex-1 text-center lg:text-left w-full" style={{ maxWidth: '600px' }}>
          {/* Hello Label */}
          <FadeIn variant="fadeUp" delay={0}>
          <div
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 border border-neutral-800 text-orange-500 font-bold tracking-widest uppercase"
            style={{ padding: '6px 16px', fontSize: '11px' }}
          >
            <span
              className="rounded-full bg-orange-500 animate-pulse"
              style={{ width: '8px', height: '8px' }}
            />
            Hello
          </div>
          </FadeIn>

          <FadeIn variant="fadeUp" delay={150}>
          <h1
            className="font-black tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', marginTop: '24px' }}
          >
            I'M{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
              ANDIKA
            </span>
          </h1>
          </FadeIn>

          <FadeIn variant="fadeUp" delay={300}>
          <p
            className="text-neutral-400 leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              marginTop: '28px',
              lineHeight: 1.85,
            }}
          >
            Passionate{' '}
            <span className="text-white font-semibold">full-stack developer</span> dedicated
            to crafting exceptional digital experiences. With a keen eye for detail and a
            user-centric approach, I transform ideas into{' '}
            <span className="text-white underline decoration-orange-500 underline-offset-4 decoration-2">
              intuitive and visually stunning designs.
            </span>
          </p>
          </FadeIn>

          <FadeIn variant="fadeUp" delay={450}>
          <div className="flex flex-col" style={{ gap: '20px', marginTop: '48px' }}>
            <StatItem number="3+" label="Years Experience" />
            <StatItem number="50+" label="Completed Project" />
            <StatItem number="30+" label="Happy Client" />
          </div>
          </FadeIn>

          {/* ── Decorative Scribble near Stats ── */}
          <div
            className="hidden lg:block absolute pointer-events-none"
            style={{ bottom: '18%', left: '38%' }}
          >
            <svg
              width="80"
              height="40"
              viewBox="0 0 80 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 20C10 8 20 32 30 18C40 4 50 36 60 20C65 12 72 28 78 20"
                stroke="#f97316"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: Image ─── */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end group">
          <div
            className="relative w-full"
            style={{ maxWidth: '340px', height: '440px' }}
          >
            {/* Decorative Frame Behind */}
            <div
              className="absolute inset-0 border-2 border-orange-500/30 rounded-2xl transition-transform duration-500"
              style={{
                transform: 'translate(16px, 16px)',
              }}
            />

            {/* Image Wrapper */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out bg-neutral-900">
              <Image
                src="/profile2.png"
                alt="Andika Profile"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <div
              className="absolute bg-[#1a1a1a] rounded-xl shadow-xl border border-neutral-800 hidden sm:flex items-center gap-3"
              style={{
                bottom: '-24px',
                left: '-24px',
                padding: '14px 18px',
                boxShadow: '0 8px 32px rgba(249, 115, 22, 0.08)',
              }}
            >
              <div
                className="rounded-lg flex items-center justify-center"
                style={{
                  padding: '8px',
                  background: 'rgba(34, 197, 94, 0.15)',
                }}
              >
                <CheckCircle2
                  style={{ width: '22px', height: '22px', color: '#22c55e' }}
                />
              </div>
              <div>
                <p
                  className="text-neutral-400"
                  style={{ fontSize: '11px', lineHeight: 1 }}
                >
                  Status
                </p>
                <p
                  className="font-bold text-white"
                  style={{ fontSize: '14px', marginTop: '3px' }}
                >
                  Open for Work
                </p>
              </div>
            </div>

            {/* Orange accent corner - top right */}
            <div
              className="absolute pointer-events-none"
              style={{ top: '-16px', right: '-16px' }}
            >
              <div
                className="bg-orange-500"
                style={{
                  width: '20px',
                  height: '20px',
                  transform: 'rotate(45deg)',
                  opacity: 0.7,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Stat Item Component (Anthony Style) ── */
function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center" style={{ gap: '14px' }}>
      {/* Check Icon */}
      <div
        className="rounded-full border-2 border-orange-500 flex items-center justify-center shrink-0"
        style={{ width: '32px', height: '32px' }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f97316"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* Number + Label */}
      <div className="flex items-baseline" style={{ gap: '12px' }}>
        <span
          className="font-black text-white"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1 }}
        >
          {number}
        </span>
        <span
          className="text-neutral-400 font-medium"
          style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
