"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  { id: 1, img: "/assets/images/s1.jpg" },
  { id: 2, img: "/assets/images/s2.jpg" },
  { id: 3, img: "/assets/images/s3.jpg" },
  { id: 4, img: "/assets/images/s4.jpg" },
  { id: 5, img: "/assets/images/s5.jpg" },
  { id: 6, img: "/assets/images/s6.jpg" },
  { id: 7, img: "/assets/images/s7.jpg" },
  { id: 8, img: "/assets/images/s8.jpg" },
];

const CARD_WIDTH = 180;
const GAP = 12;
const STEP = CARD_WIDTH + GAP;
const SPEED = 0.03;
const items = [...SLIDES, ...SLIDES, ...SLIDES];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const setWidth = SLIDES.length * STEP;

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
    <section id="testimoniale" className="w-full bg-white py-12 overflow-hidden">

      {/* Header */}
      <div className="text-center px-5 mb-8">
        <p className="text-violet-600 font-black text-[11px] tracking-widest uppercase mb-2">
          Ce spun clienții
        </p>
        <h2 className="font-display font-black text-gray-900 leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }}>
          Rezultate <span className="text-violet-600">reale</span>
        </h2>
        <p className="text-gray-500 text-[14px] max-w-md mx-auto leading-relaxed">
          Descoperă experiențele clienților care au ales produsele Atomy
          pentru rutina lor zilnică.
        </p>
        <div className="w-10 h-[2px] bg-violet-600 rounded-full mx-auto mt-4" />
      </div>

      {/* Arrows + track */}
      <div className="flex items-center w-full">

        {/* Left arrow */}
        <button
          onClick={() => slide("left")}
          aria-label="Înapoi"
          className="shrink-0 ml-2 w-8 h-8 rounded-full flex items-center justify-center
                     bg-white border border-violet-200 text-violet-700 shadow-sm
                     hover:bg-violet-50 transition-all duration-200 active:scale-95 z-20"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
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
          <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none
                          bg-gradient-to-r from-white to-transparent" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none
                          bg-gradient-to-l from-white to-transparent" />

          <div
            ref={trackRef}
            className="flex items-center py-2"
            style={{ gap: GAP, willChange: "transform" }}
          >
            {items.map((slide, i) => (
              <div
                key={`${slide.id}-${i}`}
                className="shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100"
                style={{
                  width: CARD_WIDTH,
                  height: CARD_WIDTH * 1.9, // tall mobile-like ratio
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.img}
                    alt={`Testimonial ${slide.id}`}
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => slide("right")}
          aria-label="Înainte"
          className="shrink-0 mr-2 w-8 h-8 rounded-full flex items-center justify-center
                     bg-white border border-violet-200 text-violet-700 shadow-sm
                     hover:bg-violet-50 transition-all duration-200 active:scale-95 z-20"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Back to top */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-7 h-7 rounded-full border-2 border-violet-200 flex items-center justify-center
                     text-violet-600 hover:bg-violet-50 hover:border-violet-400
                     transition-all duration-200 shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>

    </section>
  );
}