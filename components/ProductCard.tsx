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
    <div className="shrink-0 w-20 md:w-32 flex flex-col items-center gap-1.5 md:gap-2.5 group">
      <div
        className="relative w-[62px] h-[62px] md:w-28 md:h-28 rounded-full overflow-hidden
                   border-[3px] md:border-4 border-white shadow-md
                   transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
        style={{ background: "linear-gradient(135deg, #EDE9FE, #DDD6FE)" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 62px, 112px"
        />
      </div>
      <p className="text-[10px] md:text-[13px] font-bold text-center text-gray-700
                   leading-tight tracking-wide uppercase px-1">
        {product.name}
      </p>
      <p className="text-[9px] md:text-[11px] text-center text-gray-500 leading-snug px-1 line-clamp-2">
        {product.description}
      </p>
    </div>
  );
}