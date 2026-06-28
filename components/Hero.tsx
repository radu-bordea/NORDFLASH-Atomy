import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // style={{ background: "#EDE9FE" }}
    <section className="relative w-full py-18 overflow-hidden" >

      {/* ── Image — full natural width, never cropped ── */}
      <div className="relative w-full">
        <Image
          src="/assets/images/client.png"
          alt="Atomy România"
          width={1920}
          height={900}
          className="w-full h-auto block"
          priority
        />

        {/* Overlay on top of image for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(237,233,254,0.95) 0%, rgba(237,233,254,0.85) 25%, rgba(237,233,254,0.3) 55%, transparent 80%)",
          }}
        />

        {/* ── Text sits absolutely over the image ── */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-8 md:px-16 max-w-xl">

            {/* Headline */}
            <h1
              className="font-display font-black leading-[1.05] text-gray-900 mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Frumusețe &amp;
              <br />
              Sănătate
              <br />
              <span
                className="font-display italic"
                style={{ color: "#7C3AED", fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
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

            {/* Sub — hidden on small mobile to save space */}
            <p className="hidden sm:block text-gray-700 text-[15px] leading-relaxed mb-6">
              Produse premium certificate, bazate pe{" "}
              <strong style={{ color: "#7C3AED" }}>ingrediente naturale</strong>{" "}
              și <strong style={{ color: "#7C3AED" }}>inovație științifică</strong> de top.
            </p>

            {/* Trust icons — hidden on small mobile */}
            <div className="hidden sm:flex gap-3 flex-wrap mb-6">
              {[
                { icon: "🌿", label: "Ingrediente Naturale" },
                { icon: "🔬", label: "Inovație Coreeană" },
                { icon: "🛡️", label: "Calitate Certificată" },
                { icon: "😊", label: "10M+ Clienți Fericiți" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1 text-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg border-2"
                    style={{
                      borderColor: "#7C3AED",
                      background: "rgba(255,255,255,0.75)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-semibold text-gray-700 max-w-[60px] leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>

    </section>
  );
}