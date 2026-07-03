"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import MODELS from "@/data/models";

const CARD_WIDTH = 130;
const GAP = 10;
const STEP = CARD_WIDTH + GAP;
const SPEED = 0.03;
const items = [...MODELS, ...MODELS, ...MODELS];

export default function ModelCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const setWidth = MODELS.length * STEP;

  const animate = useCallback(
    (time: number) => {
      if (!trackRef.current) return;
      const delta = lastTimeRef.current ? time - lastTimeRef.current : 0;
      lastTimeRef.current = time;
      if (!isPaused) {
        offsetRef.current -= SPEED * delta;
        if (Math.abs(offsetRef.current) >= setWidth) offsetRef.current += setWidth;
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    },
    [isPaused, setWidth]
  );

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const slide = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    offsetRef.current += dir === "left" ? STEP : -STEP;
    if (Math.abs(offsetRef.current) >= setWidth) offsetRef.current += setWidth;
    if (offsetRef.current > 0) offsetRef.current -= setWidth;
    trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
  };

  return (
    <div className="mt-3">
      {/* Label */}
      <div className="px-1 mb-2">
        <p className="text-violet-700 font-black text-[11px] tracking-widest uppercase">
          De ce Atomy?
        </p>
      </div>

      {/* Arrows + track — same layout as Carousel */}
      <div className="flex items-center w-full">

        {/* Left arrow */}
        <button
          onClick={() => slide("left")}
          aria-label="Înapoi"
          className="shrink-0 ml-1 w-6 h-6 rounded-full flex items-center justify-center
                     bg-white border border-violet-200 text-violet-700 shadow-sm
                     hover:bg-violet-50 transition-all duration-200 active:scale-95 z-20"
        >
          <ChevronLeft />
        </button>

        {/* Track */}
        <div
          className="flex-1 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

          <div
            ref={trackRef}
            className="flex py-1"
            style={{ gap: GAP, willChange: "transform" }}
          >
            {items.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="shrink-0 rounded-xl overflow-hidden relative border border-violet-100 shadow-sm"
                style={{ width: CARD_WIDTH, height: CARD_WIDTH }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-70"
                  sizes="140px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 " />
                {/* Text */}
                <div className="absolute top-0 left-0 right-0 p-2">
                  <p className="font-black text-violet-600 leading-tight mb-0.5"
                     style={{ fontSize: "9px" }}>
                    {item.title}
                  </p>
                  <p className="text-gray-700 leading-normal max-w-18"
                     style={{ fontSize: "8px" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => slide("right")}
          aria-label="Înainte"
          className="shrink-0 mr-1 w-6 h-6 rounded-full flex items-center justify-center
                     bg-white border border-violet-200 text-violet-700 shadow-sm
                     hover:bg-violet-50 transition-all duration-200 active:scale-95 z-20"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}