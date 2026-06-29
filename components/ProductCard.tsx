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
    <div className="shrink-0 w-36 flex flex-col items-center gap-3 cursor-pointer group">

      {/* Circular image */}
      <div
        className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg
                   transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-200 group-hover:shadow-xl"
        style={{ background: "linear-gradient(135deg, #EDE9FE, #DDD6FE)" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="112px"
        />
      </div>

      {/* Label */}
      <p className="text-[12px] font-bold text-center text-gray-700 leading-tight tracking-wide uppercase">
        {product.name}
      </p>
    </div>
  );
}