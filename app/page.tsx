import CtaSection from "./components/CTASection"
import HeroBanner from "./components/Hero"
import ProductGrid from "./components/ProductGrid"
import { getProducts } from "./lib/products"



export default async function Home() {
  const products = await getProducts()
  
  return (
    <main className=" w-full">
      <HeroBanner />
      <ProductGrid products={products} collectionVariant="women" />
      <CtaSection />
      <ProductGrid products={products} collectionVariant="men" />
    </main>
  )
}