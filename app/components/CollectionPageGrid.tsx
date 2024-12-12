import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";
import Image from "next/image";

interface CollectionPageGridProps {
  products: Product[];
  collectionVariant: "men" | "women";
}

const collectionData = {
  men: {
    imageUrl: "/images/men-collection.jpg",
    title: "Explore the Men Collection",
  },
  women: {
    imageUrl: "/images/woman-collection.jpg",
    title: "Discover the Women Collection",
  },
};

export default function CollectionPageGrid({
  products,
  collectionVariant,
}: CollectionPageGridProps) {
  const collection = collectionData[collectionVariant];

  return (
    <div className="container mx-auto">
      {/* Hero Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8">
        <Image
          src={collection.imageUrl}
          alt={collection.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            {collection.title}
          </h1>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
