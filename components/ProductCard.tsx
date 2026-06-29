import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
}

interface Props {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: Props) {
  return (
    <div
      className="shrink-0 w-20 flex flex-col items-center gap-1.5 cursor-pointer group"
      onClick={() => onClick(product)}
    >
      <div
        className="relative w-15.5 h-15.5 rounded-full overflow-hidden
                   border-[3px] border-white shadow-md
                   transition-all duration-300 group-hover:scale-120 group-hover:shadow-lg"
        style={{
          background: "linear-gradient(135deg, #EDE9FE, #DDD6FE)",
          boxShadow: "0 2px 12px rgba(124,58,237,0.15)",
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="62px"
        />
      </div>
      <p className="text-[10px] font-bold text-center text-gray-700 leading-tight tracking-wide uppercase px-1">
        {product.name}
      </p>
    </div>
  );
}