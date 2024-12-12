import ContactFormSection from "./components/ContactFormSection"
import CtaSection from "./components/CTASection"
import HeroBanner from "./components/Hero"
import ProductGrid from "./components/ProductGrid"
import StartNewBrandSection from "./components/StartNewBrandSection"
import {  getRandomMenProducts, getRandomWomenProducts } from "./lib/products"



export default async function Home() {
  const productsWomen = await getRandomWomenProducts()
  const productsMen = await getRandomMenProducts()
  
  return (
    <main className=" w-full">
      <HeroBanner />
      <ProductGrid products={productsWomen} collectionVariant="women" />
      <CtaSection />
      <ProductGrid products={productsMen} collectionVariant="men" />
      <StartNewBrandSection />
      <ContactFormSection />
    </main>
  )
}