import CollectionPageGrid from "@/app/components/CollectionPageGrid";
import ContactFormSection from "@/app/components/ContactFormSection";
import { prisma } from "@/app/lib/db";

export async function generateStaticParams() {
  return [{ variant: "men" }, { variant: "women" }];
}

export default async function CollectionPage({
  params,
}: {
  params: { variant: string };
}) {
  const { variant } = params;

  const products = await prisma.product.findMany({
    where: { category: variant },
  });

  const collectionVariant = variant === "men" ? "men" : "women";

  return (
    <div className="container mx-auto">
      <CollectionPageGrid
        products={products}
        collectionVariant={collectionVariant}
      />
      <ContactFormSection />
    </div>
  );
}
