// src/components/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ border: "1px solid #e5e5e5", borderRadius: 12, padding: 12 }}>
      <Link href={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div style={{ borderRadius: 10, overflow: "hidden" }}>
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={700}
            style={{ width: "100%", height: 220, objectFit: "cover" }}
          />
        </div>

        <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", gap: 10 }}>
          <div>
            <div style={{ fontWeight: 700 }}>{product.name}</div>
            <div style={{ fontSize: 13, opacity: 0.75 }}>{product.category}</div>
          </div>
          <div style={{ fontWeight: 700, whiteSpace: "nowrap" }}>
            {product.price.toLocaleString("hu-HU")} Ft
          </div>
        </div>
      </Link>
    </div>
  );
}
