"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Product } from "./ProductCard";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (product) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  if (!product) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: "fadeIn 0.2s ease" }}
      />

      {/* Modal */}
      <div
        className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[92vw] max-w-md rounded-3xl overflow-hidden shadow-2xl"
        style={{ animation: "slideUp 0.25s ease" }}
      >
        {/* Image header */}
        <div
          className="relative h-56 w-full"
          style={{ background: "linear-gradient(135deg, #EDE9FE, #DDD6FE)" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="448px"
          />
          {/* Badge */}
          <span
            className="absolute top-4 left-4 text-[11px] font-bold text-white px-3 py-1 rounded-full"
            style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}
          >
            {product.badge}
          </span>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm
                       flex items-center justify-center text-gray-700 shadow-md
                       hover:bg-white transition-all duration-200 active:scale-95"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="bg-white px-6 py-5">
          <p
            className="text-[11px] font-bold tracking-[1.5px] uppercase mb-1"
            style={{ color: "#7C3AED" }}
          >
            {product.tagline}
          </p>
          <h2 className="font-display font-black text-2xl text-gray-900 mb-3">
            {product.name}
          </h2>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-5">
            {product.description}
          </p>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary w-full py-3 text-[14px] text-center"
          >
            Vreau acest produs →
          </a>
        </div>
      </div>
    </>
  );
}