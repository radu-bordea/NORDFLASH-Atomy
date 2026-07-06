"use client";

import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed z-50 w-[92vw] max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{
          top: "50%",
          left: "50%",
          animation: "slideUp 0.5s ease forwards",
          willChange: "transform, opacity",
        }}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-violet-100
                        bg-gradient-to-r from-violet-600 to-violet-800">
          <h2 className="font-black text-white text-[15px] uppercase tracking-wide">
            Politica de Confidențialitate
          </h2>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center
                       text-white hover:bg-white/30 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-5 overflow-y-auto max-h-[60vh] text-[13px] text-gray-600 leading-relaxed flex flex-col gap-4">

          <p>
            Această politică explică cum colectăm și utilizăm datele tale personale
            prin formularul de pe acest site.
          </p>

          <div>
            <h3 className="font-black text-gray-900 text-[14px] mb-1">Ce date colectăm?</h3>
            <p>Prin completarea formularului colectăm: <strong>nume, prenume, adresă de email și număr de telefon.</strong></p>
          </div>

          <div>
            <h3 className="font-black text-gray-900 text-[14px] mb-1">Scopul colectării</h3>
            <p>
              Datele sunt folosite <strong>exclusiv</strong> pentru a te contacta în legătură
              cu produsele Atomy și pentru a-ți oferi consultanță personalizată.
            </p>
          </div>

          <div>
            <h3 className="font-black text-gray-900 text-[14px] mb-1">Stocarea datelor</h3>
            <p>
              Nu stocăm datele tale în baze de date. Datele ajung exclusiv în
              căsuța noastră de email și sunt păstrate doar atât timp cât este
              necesar pentru a-ți răspunde.
            </p>
          </div>

          <div>
            <h3 className="font-black text-gray-900 text-[14px] mb-1">Partajarea datelor</h3>
            <p>
              Nu partajăm datele tale cu terți. Folosim serviciul <strong>Resend</strong> doar
              pentru transmiterea emailului — acesta nu stochează datele tale.
            </p>
          </div>

          <div>
            <h3 className="font-black text-gray-900 text-[14px] mb-1">Drepturile tale (GDPR)</h3>
            <ul className="list-disc pl-4 flex flex-col gap-1">
              <li>Dreptul de acces la datele tale</li>
              <li>Dreptul de rectificare</li>
              <li>Dreptul de ștergere ("dreptul de a fi uitat")</li>
              <li>Dreptul de a retrage consimțământul oricând</li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-gray-900 text-[14px] mb-1">Contact</h3>
            <p>
              Pentru orice întrebare legată de datele tale personale ne poți contacta
              direct pe WhatsApp sau la adresa de email afișată pe site.
            </p>
          </div>

          <p className="text-[11px] text-gray-400">
            Ultima actualizare: Iulie 2026
          </p>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-violet-100">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl font-black text-white text-[13px]
                       uppercase tracking-widest bg-violet-700 hover:bg-violet-800
                       transition-all duration-200"
          >
            Am înțeles ✓
          </button>
        </div>
      </div>
    </>
  );
}