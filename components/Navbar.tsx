"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center gap-3">
        {/* Real logo image — put atomy-logo.png in /public/assets/ */}
        <img
          src="/assets/images/atomy-logo.png"
          alt="Atomy"
          width={90}
          height={38}
          className="object-contain"
        />

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200" />

        {/* Brand name */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[16px] text-gray-800 tracking-tight">
            Atomy <Andreea></Andreea>
          </span>
          <span className="text-lg">🇷🇴</span>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200" />

        {/* Purple outline heart */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
    </nav>
  );
}
