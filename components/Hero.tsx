"use client";

import Image from "next/image";
import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import ModelCarousel from "./ModelCarousel";
import PrivacyModal from "./Privacymodal";

// ← schimbă cu numărul real
const WHATSAPP_NUMBER = "40720367609";

export default function Hero() {
  const [form, setForm] = useState({ name: "", prenume: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [agreed, setAgreed] = useState(true);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setStatus("loading");
    try {
      await sendContactEmail({
        name: `${form.name} ${form.prenume}`.trim(),
        phone: form.phone,
        email: form.email,
        message: "",
      });
      setStatus("success");
      setForm({ name: "", prenume: "", email: "", phone: "" });
      setAgreed(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-white">

      {/* ── SECTION 1: Image + headline ── */}
      <section className="relative w-full overflow-hidden pt-12 bg-white">
        <div className="relative w-full">
          <Image
            src="/assets/images/client11.png"
            alt="Atomy România"
            width={1920}
            height={600}
            className="w-full h-auto block"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent pointer-events-none" />

          <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-10">
            <div className="max-w-[56%] md:max-w-[38%]">

              <p className="text-violet-700 mb-1 leading-none"
                 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(0.8rem, 2.5vw, 1.4rem)" }}>
                Bună! Sunt Andreea 💜
              </p>
              <div className="h-0.5 w-12 bg-violet-700 rounded-full mb-2" />

              <h1 className="font-display font-black text-gray-900 leading-tight mb-2"
                  style={{ fontSize: "clamp(0.9rem, 3.5vw, 2.8rem)" }}>
                Te ajut să alegi
                <br />
                produsele <span className="text-violet-600">Atomy</span>
              </h1>

              <p className="text-gray-700 leading-snug mb-2"
                 style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.95rem)" }}>
                Recomandări personalizate pentru{" "}
                <strong className="text-violet-700">rutina potrivită ție.</strong>
              </p>

              <div className="grid grid-cols-3 gap-x-6 gap-y-1">
                {[
                  { img: "/assets/images/leaf.png",    title: "Ingrediente", sub: "atent selecționate" },
                  { img: "/assets/images/formula.png", title: "Formule",     sub: "testate" },
                  { img: "/assets/images/heart.png",   title: "Rezultate",   sub: "vizibile" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-0.5">
                    <div className="relative w-3.5 h-3.5 shrink-0 mt-0.5 px-1">
                      <Image src={item.img} alt={item.title} fill className="object-contain" />
                    </div>
                    <div className="mt-1">
                      <p className="font-bold text-gray-800 leading-tight"
                         style={{ fontSize: "clamp(0.6rem, 1vw, 0.75rem)" }}>
                        {item.title}
                      </p>
                      <p className="font-normal text-gray-500 leading-tight"
                         style={{ fontSize: "clamp(0.55rem, 0.9vw, 0.7rem)" }}>
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Form ── */}
      <section className="w-full bg-white px-3 pb-3">
        <div className="max-w-xl mx-auto">

          {/* Form card */}
          <div className="rounded-2xl border border-violet-100 shadow-sm bg-violet-50/40 p-2 md:p-3">
            {status === "success" ? (
              <div className="text-center py-4 flex flex-col items-center gap-2">
                <span className="text-4xl">🎉</span>
                <p className="font-black text-gray-900">Mesaj trimis!</p>
                <p className="text-gray-500 text-sm">Te vom contacta în curând!</p>
                <button className="btn-primary px-5 py-2 text-sm mt-1" onClick={() => setStatus("idle")}>
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <>
                {/* Form header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 relative shrink-0">
                    <Image src="/assets/images/gift.png" alt="Cadou" fill className="object-contain" />
                  </div>
                  <div>
                    <h2 className="font-display font-black text-gray-900 text-[16px] leading-tight">
                      Consultanță gratuită
                    </h2>
                    <p className="text-violet-600 font-bold text-[13px] leading-tight">
                      și recomandări personalizate
                    </p>
                    <p className="text-gray-500 text-[11px]">
                      Te contactăm în cel mai scurt timp.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { name: "name",    placeholder: "Nume",        icon: <UserIcon />,  required: true,  type: "text" },
                      { name: "prenume", placeholder: "Prenume",     icon: <UserIcon />,  required: false, type: "text" },
                      { name: "email",   placeholder: "Email",       icon: <EmailIcon />, required: false, type: "email" },
                      { name: "phone",   placeholder: "Nr. Telefon", icon: <PhoneIcon />, required: true,  type: "tel" },
                    ].map((f) => (
                      <div key={f.name} className="relative">
                        <span className="absolute top-1/2 -translate-y-1/2 text-violet-400" style={{ left: "10px" }}>
                          {f.icon}
                        </span>
                        <input
                          name={f.name} type={f.type} required={f.required}
                          placeholder={f.placeholder}
                          value={form[f.name as keyof typeof form]}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-violet-200 bg-white text-gray-800
                                     text-[11px] outline-none transition-all
                                     focus:border-violet-500 focus:ring-2 focus:ring-violet-100
                                     placeholder:text-gray-400"
                          style={{ paddingLeft: "32px", paddingTop: "6px", paddingBottom: "6px", paddingRight: "10px" }}
                        />
                      </div>
                    ))}
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-xs">Ceva n-a mers. Încearcă din nou.</p>
                  )}

                  {/* Submit button — disabled until checkbox checked */}
                  <button
                    type="submit"
                    disabled={status === "loading" || !agreed}
                    className="w-full py-2 rounded-xl font-black text-white text-[11px]
                               uppercase tracking-widest bg-violet-700 hover:bg-violet-800
                               transition-all duration-200 shadow-md shadow-violet-300/40
                               disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Se trimite..." : "Vreau Recomandarea Gratuită →"}
                  </button>

                  {/* Checkbox + privacy link */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="w-3.5 h-3.5 accent-violet-600 cursor-pointer shrink-0"
                    />
                    <span className="text-[10px] text-gray-400 leading-snug">
                      Trimițând acest formular, îți dai acordul pentru{" "}
                      <button
                        type="button"
                        onClick={() => setPrivacyOpen(true)}
                        className="text-violet-600 underline bg-transparent border-none p-0 cursor-pointer"
                      >
                        politica de confidențialitate
                      </button>
                    </span>
                  </label>
                </form>
              </>
            )}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-1 rounded-xl border border-green-300
                       bg-white shadow-sm hover:shadow-md transition-all duration-200 no-underline"
          >
            <span className="text-2xl">💬</span>
            <div className="flex flex-col gap-0.5">
              <p className="font-black text-green-600 text-[11px] uppercase tracking-wide">
                Scrie-mi direct pe WhatsApp
              </p>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-[11px]">Răspund rapid!</p>
                <span className="bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Online</span>
              </div>
            </div>
          </a>

          {/* Model carousel */}
          <ModelCarousel />

          {/* Scroll arrow */}
          {/* <div className="flex justify-center mt-3 mb-1">
            <button
              onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              className="w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center
                         animate-bounce hover:border-violet-400 hover:text-violet-600 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div> */}

        </div>
      </section>

      {/* Privacy Modal */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />

    </div>
  );
}

function UserIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}