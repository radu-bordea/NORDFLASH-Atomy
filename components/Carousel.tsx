"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

const CARD_WIDTH = 144;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;
const SPEED = 0.05;

const items = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const setWidth = PRODUCTS.length * STEP;

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
    <section
      id="produse"
      className="pt-20 pb-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EDE9FE 25%, #DDD6FE 70%, #EDE9FE 80%)" }}
    >
      <div className="px-6 mb-5">
        <span className="text-purple-700 font-bold text-[13px] tracking-widest uppercase">
          Gama Noastră
        </span>
      </div>

      <div className="flex items-center gap-2 px-2">

        {/* Left arrow */}
        <button
          onClick={() => slide("left")}
          aria-label="Înapoi"
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center
                     bg-white border border-purple-200 text-purple-700 shadow-sm
                     hover:bg-purple-50 hover:border-purple-400 transition-all duration-200 active:scale-95"
        >
          <ChevronLeft />
        </button>

        {/* Track wrapper — fade masks + scroll */}
        <div
          className="flex-1 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left edge fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #EDE9FE 20%, transparent 100%)" }}
          />
          {/* Right edge fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #EDE9FE 20%, transparent 100%)" }}
          />

          {/* Scrolling track */}
          <div
            ref={trackRef}
            className="flex items-center"
            style={{ gap: GAP, willChange: "transform" }}
          >
            {items.map((product, i) => (
              <ProductCard key={`${product.id}-${i}`} product={product} />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => slide("right")}
          aria-label="Înainte"
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center
                     bg-white border border-purple-200 text-purple-700 shadow-sm
                     hover:bg-purple-50 hover:border-purple-400 transition-all duration-200 active:scale-95"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}