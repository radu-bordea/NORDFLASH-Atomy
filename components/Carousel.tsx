import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Carousel() {
  // Duplicate for seamless loop
  const doubled = [...PRODUCTS, ...PRODUCTS];

  return (
    <section id="produse" className="py-20 overflow-hidden" style={{ background: "#F8F7FF" }}>
      <div className="text-center px-6 mb-12">
        <p className="section-label">Produsele Noastre</p>
        <h2 className="font-display font-black text-[clamp(1.8rem,4vw,2.8rem)] text-gray-900 leading-tight mb-4">
          Descoperă Colecția{" "}
          <span className="gradient-text">Atomy</span>
        </h2>
        <p className="text-[17px] text-gray-500 max-w-lg mx-auto leading-relaxed">
          Produse certificate din Coreea de Sud, formulate cu ingrediente naturale
          și susținute de știință
        </p>
      </div>

      {/* Scrolling track */}
      <div className="overflow-hidden">
        <div className="carousel-track pl-6">
          {doubled.map((product, i) => (
            <ProductCard key={`${product.id}-${i}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}