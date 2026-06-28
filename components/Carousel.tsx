"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

const CARD_WIDTH = 280;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef(0); // current translateX (negative)
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const SPEED = 0.05; // px per ms

  // Total width of one set of cards
  const setWidth = PRODUCTS.length * STEP;

  // Animation loop
  const animate = useCallback(
    (time: number) => {
      if (!trackRef.current) return;
      const delta = lastTimeRef.current ? time - lastTimeRef.current : 0;
      lastTimeRef.current = time;

      if (!isPaused) {
        offsetRef.current -= SPEED * delta;
        // Seamless loop: reset when we've scrolled one full set
        if (Math.abs(offsetRef.current) >= setWidth) {
          offsetRef.current += setWidth;
        }
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

  // Arrow navigation — snap by one card width
  const slide = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    offsetRef.current += dir === "left" ? STEP : -STEP;
    // Keep within bounds for seamless loop
    if (Math.abs(offsetRef.current) >= setWidth) offsetRef.current += setWidth;
    if (offsetRef.current > 0) offsetRef.current -= setWidth;
    trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
  };

  const doubled = [...PRODUCTS, ...PRODUCTS];

  return (
    <section
      id="produse"
      className="py-20 overflow-hidden"
      style={{ background: "#F8F7FF" }}
    >
      {/* Header */}
      <div className="text-center px-6 mb-12">
        <p className="section-label">Produsele Noastre</p>
        <h2 className="font-display font-black text-[clamp(1.8rem,4vw,2.8rem)] text-gray-900 leading-tight mb-4">
          Descoperă Colecția <span className="gradient-text">Atomy</span>
        </h2>
        <p className="text-[17px] text-gray-500 max-w-lg mx-auto leading-relaxed">
          Produse certificate din Coreea de Sud, formulate cu ingrediente naturale
          și susținute de știință
        </p>
      </div>

      {/* Carousel + arrows */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => slide("left")}
          aria-label="Înapoi"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                     w-11 h-11 rounded-full flex items-center justify-center
                     bg-white border border-purple-200 shadow-md
                     text-purple-700 hover:bg-purple-50 hover:border-purple-400
                     transition-all duration-200 active:scale-95"
        >
          <ChevronLeft />
        </button>

        {/* Track */}
        <div
          className="overflow-hidden px-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex"
            style={{ gap: GAP, willChange: "transform" }}
          >
            {doubled.map((product, i) => (
              <ProductCard key={`${product.id}-${i}`} product={product} />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => slide("right")}
          aria-label="Înainte"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                     w-11 h-11 rounded-full flex items-center justify-center
                     bg-white border border-purple-200 shadow-md
                     text-purple-700 hover:bg-purple-50 hover:border-purple-400
                     transition-all duration-200 active:scale-95"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}