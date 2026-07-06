"use client";

import Image from "next/image";

const FEATURES = [
  {
    img: "/assets/images/atomy1.png",
    icon: "/assets/images/formula.png",
    title: "Calitate coreeană premium",
    desc: "Produse dezvoltate în Coreea de Sud prin cercetare avansată, standarde ridicate și colaborări cu producători specializați.",
  },
  {
    img: "/assets/images/atomy2.png",
    icon: "/assets/images/leaf.png",
    title: "Tehnologie & inovație",
    desc: "High Purification, Fresh Bio, Fermentation & Encapsulation Technology – tehnologii create pentru formule moderne și performante.",
  },
  {
    img: "/assets/images/atomy3.png",
    icon: "/assets/images/heart.png",
    title: "Cercetare și siguranță",
    desc: "De la selecția atentă a ingredientelor până la produsul final, fiecare etapă urmărește calitatea și experiența utilizatorului.",
  },
  {
    img: "/assets/images/atomy4.png",
    icon: "/assets/images/test.png",
    title: "Calitate absolută. Preț corect.",
    desc: "Filosofia Atomy: Absolute Quality, Absolute Price – produse premium la o valoare accesibilă printr-un sistem eficient.",
  },
];

export default function Benefits() {
  return (
    <section className="w-full bg-white" id="benefits">

      {/* ── Header ── */}
      <div className="text-center pb-6 px-5 bg-white">
        <p className="text-violet-600 font-black text-[11px] tracking-widest uppercase mb-2">
          De ce să alegi
        </p>
        <h2 className="font-display font-black text-gray-900 leading-tight mb-3"
            style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)" }}>
          De ce <span className="text-violet-600">Atomy?</span>
        </h2>
        <p className="text-gray-500 text-[14px] max-w-lg mx-auto leading-relaxed">
          Calitate premium la prețuri corecte, pentru tine și familia ta.
        </p>
        <div className="w-10 h-[2px] bg-violet-600 rounded-full mx-auto mt-4" />
      </div>

      {/* ── 2x2 Feature grid ── */}
      <div className="max-w-3xl mx-auto px-4 pb-6">
        <div className="grid grid-cols-2 gap-3">
          {FEATURES.map((f) => (
            <div key={f.title}
                 className="flex rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                 style={{ height: "180px" }}>

              {/* Image — fills full card height */}
              <div className="relative shrink-0" style={{ width: "42%" }}>
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>

              {/* Text — fills remaining width */}
              <div className="flex flex-col justify-start gap-1 p-2.5 flex-1 overflow-hidden">
                <div className="relative w-5 h-5 shrink-0">
                  <Image src={f.icon} alt="" fill className="object-contain" sizes="20px" />
                </div>
                <h3 className="font-black text-gray-900 leading-tight"
                    style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)" }}>
                  {f.title}
                </h3>
                <div className="w-5 h-[2px] bg-violet-600 rounded-full shrink-0" />
                <p className="text-gray-500 leading-snug overflow-hidden"
                   style={{ fontSize: "clamp(0.55rem, 1.3vw, 0.72rem)" }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Awards section ── */}
      <div id="premii" className="w-full bg-white px-4 pb-6">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="font-black text-violet-600 text-[13px] tracking-widest uppercase">
            Premii Internaționale 🏆
          </p>
        </div>

        {/* Row 1 — 5 logos */}
        <div className="max-w-3xl mx-auto grid grid-cols-5 gap-2 mb-6">
          {[
            { img: "/assets/images/l1.png", title: "Premiul King Sejong", desc: "Cea mai înaltă onoare acordată de KIPO pentru inovație." },
            { img: "/assets/images/l2.png", title: "IR52 Jang Young-shil", desc: "Premiu prestigios pentru tehnologie industrială." },
            { img: "/assets/images/l3.png", title: "Certificate NEP", desc: "Tehnologie nouă, dezvoltată pentru piața din Coreea de Sud." },
            { img: "/assets/images/l4.png", title: "World-Class Next Generation Product (2022)", desc: "Produs cu potențial de a deveni lider pe piața globală." },
            { img: "/assets/images/l5.png", title: "Dermatest® Excelent", desc: "Cel mai înalt rating de la institutul german de dermatologie." },
          ].map((a) => (
            <div key={a.title} className="flex flex-col items-center text-center gap-1
                                          border border-gray-100 rounded-2xl shadow-sm p-1">
              <div className="relative w-14 h-14">
                <Image src={a.img} alt={a.title} fill className="object-contain" sizes="56px" />
              </div>
              <p className="font-black text-gray-900 text-[10px] leading-tight">{a.title}</p>
              <p className="text-gray-500 text-[9px] leading-snug">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2 — 5 logos */}
        <div className="max-w-3xl mx-auto grid grid-cols-5 gap-2">
          {[
            { img: "/assets/images/l6.png",  title: "Marie Claire Hair Awards 2025", desc: "Premiat pentru cel mai bun șampon și tratament anti-păr deteriorat." },
            { img: "/assets/images/l7.png",  title: "Korea Brand Power Index", desc: "Nr.1 în satisfacția clienților la categoria Network Marketing." },
            { img: "/assets/images/l8.png",  title: "Korea Industrial Brand Power 1st", desc: "Puterea și încrederea brandului industrial." },
            { img: "/assets/images/l9.png",  title: "Korean Good Design Award", desc: "Design inovator și funcțional premiat în Coreea." },
            { img: "/assets/images/l10.png", title: "Certificare GMP", desc: "Standard internațional pentru calitate și siguranță în producție." },
          ].map((a) => (
            <div key={a.title} className="flex flex-col items-center text-center gap-1
                                          border border-gray-100 rounded-2xl shadow-sm p-1">
              <div className="relative w-14 h-14">
                <Image src={a.img} alt={a.title} fill className="object-contain" sizes="56px" />
              </div>
              <p className="font-black text-gray-900 text-[10px] leading-tight">{a.title}</p>
              <p className="text-gray-500 text-[9px] leading-snug">{a.desc}</p>
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

      </div>

    </section>
  );
}