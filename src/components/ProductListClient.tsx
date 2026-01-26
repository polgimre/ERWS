"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

export default function ProductListClient({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<string>("ALL");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    unique.sort((a, b) => a.localeCompare(b, "hu"));
    return unique;
  }, [products]);

  const filtered = useMemo(() => {
    if (category === "ALL") return products;
    return products.filter((p) => p.category === category);
  }, [products, category]);

  return (
    <>
      {/* Filter sáv */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: 12,
          padding: 12,
          border: "1px solid #e5e5e5",
          borderRadius: 12,
          background: "white",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <strong>Szűrés</strong>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: "8px 10px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: "white",
              cursor: "pointer",
            }}
          >
            <option value="ALL">Összes kategória</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div style={{ opacity: 0.75 }}>
          Találatok: <strong>{filtered.length}</strong> / {products.length}
        </div>
      </div>

      {/* Termékek */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 14,
          marginTop: 16,
        }}
      >
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </>
  );
}
