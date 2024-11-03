import ProductGrid from "./components/ProductGrid"
import { getProducts } from "./lib/products"



export default async function Home() {
  const products = await getProducts()
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Catalog</h1>
      <ProductGrid products={products} />
    </main>
  )
}