"use client";

import Image from "next/image";
import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

export default function Hero() {
  const [form, setForm] = useState({ name: "", prenume: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative w-full overflow-hidden pt-20 min-h-[60vh] flex items-start ">

      {/* ── Background image — absolute, covers full section ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/client.png"
          alt="Atomy România"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(237,233,254,0.97) 0%, rgba(237,233,254,0.85) 40%, rgba(237,233,254,0.6) 65%, rgba(237,233,254,0.2) 100%)",
          }}
        />
        {/* Top fade */}
        <div
          className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #EDE9FE, transparent)" }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, #EDE9FE, transparent)" }}
        />
      </div>

      {/* ── Content — drives the section height, scrollable on mobile ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* LEFT: Text */}
        <div>
          <h1
            className="font-display font-black leading-[1.05] text-gray-900 mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
          >
            Frumusețe &amp;
            <br />
            Sănătate
            <br />
            <span
              className="font-display italic"
              style={{ color: "#7C3AED", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
            >
              la Nivel Superior!
            </span>
          </h1>

          {/* Underline + heart */}
          <div className="flex items-center gap-2 mb-4">
            <div
              className="h-[3px] w-20 rounded-full"
              style={{ background: "linear-gradient(to right, #7C3AED, #C084FC)" }}
            />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C084FC" stroke="#7C3AED" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>

          <p className="text-gray-700 text-[15px] leading-relaxed mb-5 max-w-sm">
            Produse premium certificate, bazate pe{" "}
            <strong style={{ color: "#7C3AED" }}>ingrediente naturale</strong>{" "}
            și <strong style={{ color: "#7C3AED" }}>inovație științifică</strong> de top.
          </p>

          {/* Trust badges */}
          {/* <div className="flex gap-3 flex-wrap">
            {[
              { icon: "🌿", label: "Ingrediente Naturale" },
              { icon: "🛡️", label: "Premium Quality" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  border: "1.5px solid #D4AF37",
                  backdropFilter: "blur(4px)",
                  color: "#5B21B6",
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div> */}
        </div>

        {/* RIGHT: Form */}
        <div className="relative">

          {/* Gold Premium medal */}
          <div
            className="absolute -top-4 -right-2 w-16 h-16 rounded-full z-20
                       flex flex-col items-center justify-center text-center shadow-lg"
            style={{
              background: "linear-gradient(135deg, #F59E0B, #D97706)",
              border: "3px solid #FCD34D",
              boxShadow: "0 4px 16px rgba(245,158,11,0.5)",
            }}
          >
            <span className="text-white text-[8px] font-black leading-tight">⭐⭐⭐⭐⭐</span>
            <span className="text-white text-[8px] font-black leading-tight tracking-wide">PREMIUM</span>
            <span className="text-white text-[7px] leading-tight">K-BEAUTY</span>
          </div>

          {/* Form card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #fffdf5, #fff9e6)",
              border: "2px solid #D4AF37",
              boxShadow: "0 8px 32px rgba(212,175,55,0.2), 0 2px 8px rgba(124,58,237,0.1)",
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
                borderBottom: "2px solid #D4AF37",
              }}
            >
              <span className="text-3xl">🎁</span>
              <div>
                <p className="text-white font-black text-[13px] uppercase tracking-wider">
                  Solicită o Consultanță Personalizată
                </p>
                <p className="text-purple-200 text-[11px] mt-0.5">
                  Te contactăm în cel mai scurt timp.
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 py-4">
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
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    {[
                      { name: "name",    placeholder: "Nume",        icon: <UserIcon /> },
                      { name: "prenume", placeholder: "Prenume",     icon: <UserIcon /> },
                      { name: "email",   placeholder: "Email",       icon: <EmailIcon /> },
                      { name: "phone",   placeholder: "Nr. Telefon", icon: <PhoneIcon /> },
                    ].map((field) => (
                      <div key={field.name} className="relative">
                        <span
                          className="absolute top-1/2 -translate-y-1/2 text-gray-400"
                          style={{ left: "10px" }}
                        >
                          {field.icon}
                        </span>
                        <input
                          name={field.name}
                          type="text"
                          placeholder={field.placeholder}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          required={field.name === "name" || field.name === "phone"}
                          className="form-input text-[13px]"
                          style={{
                            borderColor: "#E8D5A3",
                            paddingLeft: "32px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-[12px] mb-2">Ceva n-a mers. Încearcă din nou.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-xl font-black text-white uppercase tracking-widest
                               transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 text-[13px]"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
                      boxShadow: "0 4px 16px rgba(124,58,237,0.4), inset 0 1px 0 rgba(212,175,55,0.3)",
                      border: "1.5px solid #D4AF37",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {status === "loading" ? "Se trimite..." : "Trimite Acum →"}
                  </button>

                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    Prin trimiterea formularului ești de acord cu politica de confidențialitate.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function UserIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}