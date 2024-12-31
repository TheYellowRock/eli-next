"use client";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div
        className="relative border overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-xs w-full"
        style={{ aspectRatio: "1 / 1" }}
      >
        {product.imageUrl && (
          <div className="relative w-full h-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Overlay */}
        <div
          className="
            absolute inset-0 
            flex flex-col justify-end 
            p-4 text-white 
            transition-transform duration-500 
            translate-y-0 
            md:translate-y-full 
            md:group-hover:translate-y-0
            bg-transparent md:bg-black md:bg-opacity-50
          "
        >
          {/* Product Name with Background on Mobile */}
          <div
            className="
              bg-black bg-opacity-50 
              p-2 
              md:bg-transparent 
              md:p-0
            "
          >
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          </div>

          {/* Description - Hidden on Mobile */}
          <p className="text-sm hidden md:block">{product.description}</p>
        </div>
      </div>
    </Link>
  );
}
