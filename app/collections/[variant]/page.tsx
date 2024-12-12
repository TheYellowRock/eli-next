/* eslint-disable @typescript-eslint/no-explicit-any */
import CollectionPageGrid from "@/app/components/CollectionPageGrid";
import { prisma } from "@/app/lib/db";

export default async function CollectionPage({ params }: { params: any }) {

  const variant = params?.variant;

  if (!variant || (variant !== "men" && variant !== "women")) {
    return <p>Invalid collection variant</p>;
  }

  const products = await prisma.product.findMany({
    where: { category: variant },
  });

  return (
    <div className="container mx-auto">
      <CollectionPageGrid
        products={products}
        collectionVariant={variant as "men" | "women"}
      />
    </div>
  );
}
