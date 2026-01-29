"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

export default function ProductListClient({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<string>("ALL");
  const [group, setGroup] = useState<string>("ALL");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    unique.sort((a, b) => a.localeCompare(b, "hu"));
    return unique;
  }, [products]);

  // groups: string[] mezőből gyűjtjük ki az összes lehetséges szervezetet
  const groups = useMemo(() => {
    const unique = Array.from(new Set(products.flatMap((p) => p.groups)));
    unique.sort((a, b) => a.localeCompare(b, "hu"));
    return unique;
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const okCategory = category === "ALL" || p.category === category;

      // Ha a termék "ALL"-os, akkor minden szervezet filteren is megjelenik.
      const okGroup =
        group === "ALL" ||
        p.groups.includes(group) ||
        p.groups.includes("ALL");

      return okCategory && okGroup;
    });
  }, [products, category, group]);

  return (
    <>
      {/* Filter sáv */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr auto",
          gap: 12,
          alignItems: "end",
          marginTop: 12,
          padding: 12,
          border: "1px solid #e5e5e5",
          borderRadius: 12,
          background: "white",
        }}
      >
        {/* Kategória */}
        <div>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Kategória</div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: "white",
              cursor: "pointer",
            }}
          >
            <option value="ALL">Összes</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Szervezet / csoport */}
        <div>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Szervezet</div>
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: "white",
              cursor: "pointer",
            }}
          >
            <option value="ALL">Összes</option>
            {groups.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Találatok */}
        <div style={{ opacity: 0.75, textAlign: "right" }}>
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
