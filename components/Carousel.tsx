"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { PRODUCTS } from "@/data/products";
import { Product } from "./ProductCard";

const CARD_WIDTH = 80;
const GAP = 12;
const STEP = CARD_WIDTH + GAP;
const SPEED = 0.04;

// Triplicate so wide screens are always filled
const items = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Product | null>(null);
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
    <section id="produse" className="relative py-1 bg-white overflow-hidden">

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-6 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #EDE9FE, transparent)" }}
      />

      {/* Label row */}
      <div className="px-4 mb-1">
        <span className="text-purple-700 font-bold text-[11px] tracking-widest uppercase">
          Gama Noastră
        </span>
      </div>

      {/* Arrows + full-width track */}
      <div className="flex items-center w-full">

        {/* Left arrow */}
        <button
          onClick={() => slide("left")}
          aria-label="Înapoi"
          className="shrink-0 ml-2 w-7 h-7 rounded-full flex items-center justify-center
                     bg-white border border-purple-200 text-purple-700 shadow-sm
                     hover:bg-purple-50 transition-all duration-200 active:scale-95 z-20"
        >
          <ChevronLeft />
        </button>

        {/* Track — fills all remaining width */}
        <div
          className="flex-1 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, white, transparent)" }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, white, transparent)" }}
          />

          <div
            ref={trackRef}
            className="flex items-center py-1"
            style={{ gap: GAP, willChange: "transform" }}
          >
            {items.map((product, i) => (
              <ProductCard key={`${product.id}-${i}`} product={product} onClick={setSelected} />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => slide("right")}
          aria-label="Înainte"
          className="shrink-0 mr-2 w-7 h-7 rounded-full flex items-center justify-center
                     bg-white border border-purple-200 text-purple-700 shadow-sm
                     hover:bg-purple-50 transition-all duration-200 active:scale-95 z-20"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-4 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #F8F7FF, transparent)" }}
      />

      {/* Product modal */}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}