import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";
import Image from "next/image";
import Link from "next/link";

interface ProductGridProps {
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

export default function ProductGrid({
  products,
  collectionVariant,
}: ProductGridProps) {
  const collection = collectionData[collectionVariant];

  return (
    <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 p-4">
      {/* Collection Card */}
      <div className="relative col-span-2 row-span-2 lg:col-span-1 lg:row-span-2  overflow-hidden">
        <div className="relative w-full h-96 sm:pb-[100%] lg:pb-auto lg:h-full">
          <Image
            src={collection.imageUrl}
            alt={collection.title}
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <h2 className="text-xl font-bold text-center">{collection.title}</h2>
        </div>
      </div>

      {/* Product Cards */}
      {products.slice(0, 5).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {/* See More Card */}
      <Link href={`/collections/${collectionVariant}`} legacyBehavior>
        <a className="relative  overflow-hidden shadow-sm hover:shadow-md transition-shadow flex items-center justify-center bg-gray-100 h-full">
          <div className="absolute inset-0 bg-gray-100 hover:bg-gray-200 transition-colors"></div>
          <span className="relative text-lg font-semibold text-blue-600 z-10">See More Products</span>
        </a>
      </Link>
    </div>
  );
}
