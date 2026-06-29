"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
    //   await sendContactEmail(form);
      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-10 px-4"
      style={{ background: "linear-gradient(180deg, #EDE9FE 0%, #F5F3FF 100%)" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #fffdf5, #fff9e6)",
            border: "2px solid",
            borderColor: "#D4AF37",
            boxShadow: "0 8px 40px rgba(212,175,55,0.18), 0 2px 8px rgba(124,58,237,0.08)",
          }}
        >
          {/* Header strip */}
          <div
            className="px-6 py-5 flex items-center gap-4"
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
              borderBottom: "2px solid #D4AF37",
            }}
          >
            {/* Gift icon */}
            <div className="text-4xl shrink-0">🎁</div>
            <div>
              <h2
                className="font-black text-white tracking-wide uppercase"
                style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)", letterSpacing: "0.05em" }}
              >
                Solicită o Consultanță Personalizată
              </h2>
              <p className="text-purple-200 text-[13px] mt-0.5">
                Completează formularul și te contactăm în cel mai scurt timp.
              </p>
            </div>
          </div>

          {/* Form body */}
          <div className="px-6 py-6">
            {status === "success" ? (
              <div className="text-center py-8 flex flex-col items-center gap-3">
                <span className="text-5xl">🎉</span>
                <h3 className="font-display font-black text-xl text-gray-900">Mesaj trimis!</h3>
                <p className="text-gray-500 text-[15px]">Te vom contacta în curând!</p>
                <button
                  className="btn-primary px-6 py-3 text-sm mt-2"
                  onClick={() => setStatus("idle")}
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* 4 fields in a row — wraps on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">

                  {/* Nume */}
                  <div className="relative">
                    <span className="absolute top-1/2 -translate-y-1/2 text-gray-400" style={{ left: "12px" }}>
                      <UserIcon />
                    </span>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Nume"
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                      style={{ borderColor: "#E8D5A3", paddingLeft: "36px" }}
                    />
                  </div>

                  {/* Prenume (maps to message field) */}
                  <div className="relative">
                    <span className="absolute top-1/2 -translate-y-1/2 text-gray-400" style={{ left: "12px" }}>
                      <UserIcon />
                    </span>
                    <input
                      name="message"
                      type="text"
                      placeholder="Prenume"
                      value={form.message}
                      onChange={handleChange}
                      className="form-input"
                      style={{ borderColor: "#E8D5A3", paddingLeft: "36px" }}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <span className="absolute top-1/2 -translate-y-1/2 text-gray-400" style={{ left: "12px" }}>
                      <EmailIcon />
                    </span>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                      style={{ borderColor: "#E8D5A3", paddingLeft: "36px" }}
                    />
                  </div>

                  {/* Telefon */}
                  <div className="relative">
                    <span className="absolute top-1/2 -translate-y-1/2 text-gray-400" style={{ left: "12px" }}>
                      <PhoneIcon />
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="Nr. Telefon"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-input"
                      style={{ borderColor: "#E8D5A3", paddingLeft: "36px" }}
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-[13px] mb-3">
                    Ceva n-a mers. Încearcă din nou.
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-2xl font-black text-white tracking-widest uppercase
                             transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60"
                  style={{
                    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                    background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
                    boxShadow: "0 4px 20px rgba(124,58,237,0.4), inset 0 1px 0 rgba(212,175,55,0.3)",
                    border: "1.5px solid #D4AF37",
                    letterSpacing: "0.12em",
                  }}
                >
                  {status === "loading" ? "Se trimite..." : "Trimite Acum →"}
                </button>

                <p className="text-[11px] text-gray-400 text-center mt-3">
                  Prin trimiterea formularului ești de acord cu politica noastră de confidențialitate.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
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