import Navbar from "@/components/Navbar";
import ProductListClient from "@/components/ProductListClient";
import type { Product } from "@/lib/products";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Navbar />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "18px 16px" }}>
      

        <ProductListClient products={products} />
      </main>
    </>
  );
}
