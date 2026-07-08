"use client";

import Image from "next/image";

const CARDS = [
  {
    img: "/assets/images/mm1.png",
    icon: "/assets/images/ss1.png",
    titleAccent: "CellActive™",
    titleBold: "TECHNOLOGY",
    desc: "Tehnologie brevetată care livrează ingredientele active exact acolo unde pielea are nevoie, pentru eficiență maximă și rezultate vizibile.",
    tag: "Tehnologie brevetată",
  },
  {
    img: "/assets/images/mm2.png",
    icon: "/assets/images/ss2.png",
    titleAccent: "KDRI",
    titleBold: "DERMATOLOGIC TESTED",
    desc: "Produsele Atomy sunt testate și evaluate de Korea Dermatology Research Institute pentru a asigura siguranța și compatibilitatea cu pielea sensibilă.",
    tag: "Testare dermatologică",
  },
  {
    img: "/assets/images/mm3.png",
    icon: "/assets/images/ss3.png",
    titleAccent: "GLOBAL SALES",
    titleBold: "ACHIEVEMENT",
    desc: "Atomy Absolute CellActive a depășit pragul impresionant de 1 TRILION KRW în vânzări cumulative la nivel global.",
    tag: "1 Trillion KRW Milestone",
  },
  {
    img: "/assets/images/mm4.png",
    icon: "/assets/images/ss4.png",
    titleAccent: "KOLMAR KOREA",
    titleBold: "R&D PARTNERSHIP",
    desc: "Dezvoltare și producție realizată împreună cu Kolmar Korea, unul dintre liderii mondiali în cercetare, inovație și producție cosmetică (ODM).",
    tag: "Cercetare coreeană avansată",
  },
];

export default function Research() {
  return (
    <section id="research" className="w-full bg-white py-12 px-4">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="font-black text-violet-600 uppercase tracking-wide mb-3"
            style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)" }}>
          Excelență prin Cercetare ✨
        </h2>
        <p className="text-gray-500 text-[15px] max-w-lg mx-auto leading-relaxed">
          Tehnologie avansată, cercetare coreeană și standarde globale
          pentru rezultate vizibile și siguranță maximă.
        </p>
      </div>

      {/* 2x2 grid */}
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
        {CARDS.map((c) => (
          <div
            key={c.titleBold}
            className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white"
            style={{ minHeight: "260px" }}
          >
            {/* Background image — right half only with left fade */}
            <div className="absolute inset-y-0 right-0 z-0" style={{ width: "50%" }}>
              <Image
                src={c.img}
                alt={c.titleBold}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              {/* Fade from left white into image */}
              <div className="absolute inset-0 bg-linear-to-r from-white via-white/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-5 flex flex-col gap-3 max-w-[65%]">

              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-violet-100 border border-violet-200 overflow-hidden relative shrink-0">
                <Image src={c.icon} alt="" fill className="object-cover" sizes="48px" />
              </div>

              {/* Title */}
              <div>
                <p className="text-violet-600 font-black leading-tight"
                   style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
                  {c.titleAccent}
                </p>
                <p className="font-black text-gray-900 leading-tight"
                   style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
                  {c.titleBold}
                </p>
              </div>

              {/* Underline */}
              <div className="w-6 h-[2px] bg-violet-600 rounded-full" />

              {/* Description */}
              <p className="text-gray-600 leading-snug"
                 style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.82rem)" }}>
                {c.desc}
              </p>

              {/* Tag pill */}
              <div className="inline-flex items-center gap-1.5 border border-violet-200 rounded-full
                              px-3 py-1 self-start mt-auto">
                <div className="w-3 h-3 rounded-full overflow-hidden relative">
                  <Image src={c.icon} alt="" fill className="object-cover" sizes="12px" />
                </div>
                <span className="text-violet-600 font-semibold"
                      style={{ fontSize: "clamp(0.6rem, 1.3vw, 0.75rem)" }}>
                  {c.tag}
                </span>
              </div>

            </div>
          </div>
        ))}
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