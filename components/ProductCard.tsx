import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="shrink-0 w-70 bg-white rounded-2xl overflow-hidden
                    border border-purple-100 shadow-md
                    transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100">

      {/* Image */}
      <div className="relative h-52 bg-purple-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="280px"
        />
        <span className="absolute top-3 right-3 text-[11px] font-bold tracking-wide
                         text-white px-3 py-1 rounded-full"
              style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}>
          {product.badge}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-1.5"
           style={{ color: "#7C3AED" }}>
          {product.tagline}
        </p>
        <h3 className="font-display font-black text-[1.15rem] text-gray-900 mb-2.5">
          {product.name}
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
}