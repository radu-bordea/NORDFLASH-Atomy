"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-100/50 bg-white/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl grid place-items-center text-white font-display font-bold text-lg"
               style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}>
            A
          </div>
          <span className="font-semibold text-[17px] tracking-tight text-gray-800">
            Atomy România
          </span>
        </div>

        {/* CTA */}
        <Link href="#contact" className="btn-primary text-sm px-5 py-2.5">
          Contactează-ne
        </Link>
      </div>
    </nav>
  );
}

