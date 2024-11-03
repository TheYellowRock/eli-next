import { Product } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {product.imageUrl && (
          <div className="relative h-48 w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-800 font-medium mt-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  )
}