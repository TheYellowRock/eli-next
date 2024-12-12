'use client';
import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="relative border overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-xs w-full"
        style={{ aspectRatio: '1 / 1' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {product.imageUrl && (
          <div className="relative w-full h-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              className="object-contain"
            />
          </div>
        )}

        <div
          className={`absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4 text-white transition-transform duration-500 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-sm">{product.description}</p>
        </div>
      </div>
    </Link>
  );
}
