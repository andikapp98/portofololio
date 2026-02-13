"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import FadeIn from './FadeIn';

/* ═══════════════════════════════════════════
   SNAKE GAME COMPONENT
   ═══════════════════════════════════════════ */
const GRID = 20;
const CELL = 15;
const SPEED = 120;

type Pos = { x: number; y: number };

function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Pos[]>([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ]);
  const [food, setFood] = useState<Pos>({ x: 15, y: 10 });
  const [dir, setDir] = useState<Pos>({ x: 1, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const dirRef = useRef(dir);
  dirRef.current = dir;

  const randomFood = useCallback((snakeBody: Pos[]): Pos => {
    let pos: Pos;
    do {
      pos = {
        x: Math.floor(Math.random() * GRID),
        y: Math.floor(Math.random() * GRID),
      };
    } while (snakeBody.some((s) => s.x === pos.x && s.y === pos.y));
    return pos;
  }, []);

  const resetGame = useCallback(() => {
    const initial = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    setSnake(initial);
    setFood(randomFood(initial));
    setDir({ x: 1, y: 0 });
    setScore(0);
    setGameOver(false);
    setStarted(true);
  }, [randomFood]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const d = dirRef.current;
      switch (e.key) {
        case "ArrowUp":
        case "w":
          if (d.y === 0) setDir({ x: 0, y: -1 });
          break;
        case "ArrowDown":
        case "s":
          if (d.y === 0) setDir({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
        case "a":
          if (d.x === 0) setDir({ x: -1, y: 0 });
          break;
        case "ArrowRight":
        case "d":
          if (d.x === 0) setDir({ x: 1, y: 0 });
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Game loop
  useEffect(() => {
    if (!started || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const d = dirRef.current;
        const head = { x: prev[0].x + d.x, y: prev[0].y + d.y };

        // Wall collision
        if (head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID) {
          setGameOver(true);
          return prev;
        }

        // Self collision
        if (prev.some((s) => s.x === head.x && s.y === head.y)) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [head, ...prev];

        // Eat food
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 10);
          setFood(randomFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(interval);
  }, [started, gameOver, food, randomFood]);

  // Draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = GRID * CELL;
    ctx.clearRect(0, 0, size, size);

    // Grid lines
    ctx.strokeStyle = "rgba(255,255,255,0.03)";
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= GRID; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL, 0);
      ctx.lineTo(i * CELL, size);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL);
      ctx.lineTo(size, i * CELL);
      ctx.stroke();
    }

    // Snake
    snake.forEach((seg, i) => {
      const alpha = 1 - i * 0.06;
      if (i === 0) {
        ctx.fillStyle = "#f97316";
        ctx.shadowColor = "#f97316";
        ctx.shadowBlur = 8;
      } else {
        ctx.fillStyle = `rgba(249,115,22,${Math.max(alpha, 0.2)})`;
        ctx.shadowBlur = 0;
      }
      ctx.beginPath();
      ctx.roundRect(
        seg.x * CELL + 1,
        seg.y * CELL + 1,
        CELL - 2,
        CELL - 2,
        3
      );
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Food
    ctx.fillStyle = "#22c55e";
    ctx.shadowColor = "#22c55e";
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(
      food.x * CELL + CELL / 2,
      food.y * CELL + CELL / 2,
      CELL / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.shadowBlur = 0;
  }, [snake, food]);

  // Mobile touch controls
  const handleTouch = (direction: string) => {
    const d = dirRef.current;
    switch (direction) {
      case "up":
        if (d.y === 0) setDir({ x: 0, y: -1 });
        break;
      case "down":
        if (d.y === 0) setDir({ x: 0, y: 1 });
        break;
      case "left":
        if (d.x === 0) setDir({ x: -1, y: 0 });
        break;
      case "right":
        if (d.x === 0) setDir({ x: 1, y: 0 });
        break;
    }
  };

  const canvasSize = GRID * CELL;

  return (
    <div className="flex flex-col items-center" style={{ gap: "16px" }}>
      {/* Score */}
      <div
        className="flex items-center justify-between w-full"
        style={{ maxWidth: `${canvasSize}px` }}
      >
        <span
          className="text-neutral-500 font-medium"
          style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          🐍 Snake Game
        </span>
        <span
          className="font-bold text-orange-500"
          style={{ fontSize: "14px" }}
        >
          Score: {score}
        </span>
      </div>

      {/* Canvas */}
      <div
        className="relative"
        style={{
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <canvas
          ref={canvasRef}
          width={canvasSize}
          height={canvasSize}
          style={{ display: "block" }}
        />

        {/* Overlay: Start or Game Over */}
        {(!started || gameOver) && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
          >
            <p
              className="font-bold text-white"
              style={{
                fontSize: gameOver ? "20px" : "16px",
                marginBottom: "8px",
              }}
            >
              {gameOver ? "Game Over!" : "Snake Game"}
            </p>
            {gameOver && (
              <p
                className="text-orange-500 font-semibold"
                style={{ fontSize: "14px", marginBottom: "16px" }}
              >
                Score: {score}
              </p>
            )}
            <button
              onClick={resetGame}
              className="font-semibold text-white rounded-lg transition-all duration-200"
              style={{
                padding: "10px 28px",
                fontSize: "13px",
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {gameOver ? "Play Again" : "Start Game"}
            </button>
            {!gameOver && (
              <p
                className="text-neutral-500"
                style={{ fontSize: "11px", marginTop: "10px" }}
              >
                Use Arrow Keys or WASD
              </p>
            )}
          </div>
        )}
      </div>

      {/* Mobile Controls */}
      <div
        className="grid sm:hidden"
        style={{
          gridTemplateAreas: `". up ." "left . right" ". down ."`,
          gridTemplateColumns: "48px 48px 48px",
          gridTemplateRows: "48px 48px 48px",
          gap: "4px",
        }}
      >
        {[
          { area: "up", label: "▲", d: "up" },
          { area: "left", label: "◀", d: "left" },
          { area: "right", label: "▶", d: "right" },
          { area: "down", label: "▼", d: "down" },
        ].map((btn) => (
          <button
            key={btn.area}
            onClick={() => handleTouch(btn.d)}
            className="text-neutral-400 font-bold rounded-lg"
            style={{
              gridArea: btn.area,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SNAKE SECTION
   ═══════════════════════════════════════════ */
const SnakeSection = () => {
  return (
    <section
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
      style={{ padding: "80px 0" }}
    >
      {/* Background Grid */}
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
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{ maxWidth: "1400px", padding: "0 clamp(24px, 4vw, 60px)" }}
      >
        {/* Section Header */}
        <FadeIn variant="fadeUp">
          <div className="flex flex-col items-center text-center" style={{ marginBottom: "40px" }}>
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
              Mini Game
            </div>

            <h2
              className="font-black text-white"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.1,
              }}
            >
              Take a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Break
              </span>
            </h2>

            <p
              className="text-neutral-500"
              style={{
                marginTop: "16px",
                maxWidth: "400px",
                fontSize: "0.95rem",
                lineHeight: 1.7,
              }}
            >
              Bored waiting? Play a quick game while you&apos;re here! 🎮
            </p>
          </div>
        </FadeIn>

        {/* Snake Game Card */}
        <div
          className="w-full"
          style={{
            maxWidth: "500px",
            padding: "24px 20px",
            borderRadius: "20px",
            background:
              "linear-gradient(145deg, rgba(20,20,20,1) 0%, rgba(12,12,12,1) 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <SnakeGame />
        </div>
      </div>
    </section>
  );
};

export default SnakeSection;
