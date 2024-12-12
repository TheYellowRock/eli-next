
import { prisma } from '@/app/lib/db';
import Image from 'next/image';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number(params.id);

  if (isNaN(productId)) {
    return <p>Invalid product ID</p>;
  }

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto border rounded-lg overflow-hidden shadow-md">
        <Image
          src={product.imageUrl || '/path-to-default-image.jpg'}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-700 mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
