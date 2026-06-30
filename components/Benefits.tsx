const BENEFITS = [
  {
    icon: "🌿",
    title: "Ingrediente Naturale",
    desc: "Extracte pure, sigure și eficiente, atent selecționate din natură.",
  },
  {
    icon: "🔬",
    title: "Inovație Coreeană",
    desc: "Tehnologie avansată și formule unice dezvoltate în Coreea de Sud.",
  },
  {
    icon: "🛡️",
    title: "Calitate Certificată",
    desc: "Standarde internaționale care garantează siguranța produselor.",
  },
  {
    icon: "🌍",
    title: "10M+ Clienți Fericiți",
    desc: "Prezență globală în peste 45 de țări, cu rezultate vizibile.",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-12 px-5 bg-linear-to-b from-purple to-purple-50/60 overflow-hidden">

      {/* Decorative blob */}
      <div className="absolute -top-10 -right-16 w-56 h-56 rounded-full bg-purple-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-48 h-48 rounded-full bg-yellow-200/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-9">
          <span className="text-purple-600 font-bold text-[11px] tracking-widest uppercase">
            De Ce Să Alegi
          </span>
          <h2 className="font-display font-black text-2xl md:text-4xl text-gray-900 mt-1">
            Diferența{" "}
            <span className="italic text-purple-600">Atomy</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="group relative bg-white rounded-2xl p-5 flex flex-col items-center text-center
                         border border-purple-100 shadow-sm
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100
                         hover:border-yellow-300"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-3
                              bg-linear-to-br from-purple-100 to-purple-50
                              border-2 border-purple-200
                              transition-all duration-300 group-hover:border-yellow-400 group-hover:scale-110">
                {b.icon}
              </div>

              <h3 className="font-bold text-[13px] md:text-[14px] text-gray-900 mb-1.5 leading-tight">
                {b.title}
              </h3>
              <p className="text-[11px] md:text-[12px] text-gray-500 leading-snug">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-9 flex items-center justify-center gap-6 md:gap-12 flex-wrap
                        bg-linear-to-r from-purple-600 to-purple-800 rounded-2xl py-5 px-6
                        border border-yellow-400/40 shadow-lg shadow-purple-300/30">
          {[
            { value: "10M+", label: "Clienți globali" },
            { value: "45+", label: "Țări" },
            { value: "100%", label: "Natural & Sigur" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 md:gap-12">
              <div className="text-center">
                <p className="font-display font-black text-xl md:text-2xl text-white">
                  {stat.value}
                </p>
                <p className="text-[10px] md:text-[11px] text-purple-200 font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
              {i < 2 && <div className="w-px h-8 bg-white/20" />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}