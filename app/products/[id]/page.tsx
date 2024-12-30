import ContactFormSection from '@/app/components/ContactFormSection';
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
    <>
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 bg-white shadow-md p-8">
        {/* Left Column: Image + Short Description */}
        <div className="flex flex-col items-center justify-center">
          <Image
            src={product.imageUrl || '/path-to-default-image.jpg'}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover rounded"
          />
          <p className="text-gray-700 mt-6 text-center">{product.description}</p>
        </div>

        {/* Right Column: Title + Long Description (Rich Text) */}
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold mb-4 text-center">{product.name}</h1>

          {/* Render longDescription as raw HTML (Rich Text) */}
          <div
            className="text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: product.longDescription ?? '' }}
          />
        </div>
      </div>
    </main>

    <ContactFormSection />
    </>
  );
}
