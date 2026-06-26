import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 pt-24 pb-20 text-center"
             style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #EDE9FE 0%, #FAFAFA 70%)" }}>

      {/* Decorative blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Badge */}
        <span className="inline-block bg-purple-100 text-purple-800 text-[13px] font-semibold
                         px-5 py-1.5 rounded-full border border-purple-200 mb-7 tracking-wide">
          🇰🇷 Din Coreea de Sud, cu grijă
        </span>

        {/* Headline */}
        <h1 className="font-display font-black text-[clamp(2.4rem,6vw,4rem)] leading-[1.1]
                       text-gray-900 mb-5 tracking-tight">
          Frumusețe &amp; Sănătate
          <br />
          <span className="gradient-text">la Nivel Superior</span>
        </h1>

        {/* Sub */}
        <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
          Descoperă gama exclusivă Atomy — produse premium certificate, bazate
          pe ingrediente naturale coreene și inovație științifică de top.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap mb-14">
          <Link href="#contact" className="btn-primary px-7 py-3.5 text-[15px]">
            Vreau o Consultanță Gratuită →
          </Link>
          <Link href="#produse" className="btn-ghost px-7 py-3.5 text-[15px]">
            Vezi Produsele
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <Stat number="10M+" label="Clienți globali" />
          <div className="w-px h-10 bg-purple-200" />
          <Stat number="45+" label="Țări" />
          <div className="w-px h-10 bg-purple-200" />
          <Stat number="100%" label="Natural" />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <span className="font-display font-black text-3xl block" style={{ color: "#7C3AED" }}>
        {number}
      </span>
      <span className="text-xs text-gray-400 font-medium mt-0.5 block">{label}</span>
    </div>
  );
}