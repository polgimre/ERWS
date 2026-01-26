import Navbar from "@/components/Navbar";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ unwrap
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "18px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 18 }}>
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #e5e5e5" }}>
            <Image
              src={product.image}
              alt={product.name}
              width={1200}
              height={900}
              style={{ width: "100%", height: 420, objectFit: "cover" }}
            />
          </div>

          <div>
            <h1 style={{ marginTop: 0 }}>{product.name}</h1>
            <p style={{ opacity: 0.75, marginTop: 6 }}>{product.description}</p>
            <p style={{ fontWeight: 800, fontSize: 20 }}>
              {product.price.toLocaleString("hu-HU")} Ft
            </p>

            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
