"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  CartItem,
  readCart,
  removeFromCart,
  setQuantity,
  clearCart,
  getTotal,
} from "@/lib/cart";

export default function CartClient() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(readCart());
  }, []);

  const total = getTotal(items);

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "18px 16px" }}>
      <h1>Kosár</h1>

      {items.length === 0 ? (
        <p style={{ opacity: 0.75 }}>A kosarad üres. (Ez még nem baj, csak túl jók az áraink, és megijedtél 😄)</p>
      ) : (
        <>
          <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
            {items.map((x) => (
              <div
                key={x.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr auto",
                  gap: 14,
                  alignItems: "center",
                  border: "1px solid #e5e5e5",
                  borderRadius: 12,
                  padding: 12,
                }}
              >
                <div style={{ borderRadius: 10, overflow: "hidden" }}>
                  <Image
                    src={x.image}
                    alt={x.name}
                    width={300}
                    height={220}
                    style={{ width: "100%", height: 80, objectFit: "cover" }}
                  />
                </div>

                <div>
                  <div style={{ fontWeight: 700 }}>{x.name}</div>
                  <div style={{ opacity: 0.75, marginTop: 2 }}>
                    {x.price.toLocaleString("hu-HU")} Ft / db
                  </div>

                  <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10 }}>
                    <label style={{ opacity: 0.75 }}>Mennyiség:</label>
                    <input
                      type="number"
                      min={1}
                      max={99}
                      value={x.quantity}
                      onChange={(e) => {
                        const q = Number(e.target.value);
                        const updated = setQuantity(x.id, q);
                        setItems(updated);
                      }}
                      style={{
                        width: 80,
                        padding: "6px 8px",
                        borderRadius: 10,
                        border: "1px solid #ddd",
                      }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 800 }}>
                    {(x.price * x.quantity).toLocaleString("hu-HU")} Ft
                  </div>

                  <button
                    onClick={() => setItems(removeFromCart(x.id))}
                    style={{
                      marginTop: 10,
                      padding: "8px 10px",
                      borderRadius: 10,
                      border: "1px solid #ddd",
                      background: "white",
                      cursor: "pointer",
                    }}
                  >
                    Törlés
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 18,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #e5e5e5",
              paddingTop: 14,
            }}
          >
            <button
              onClick={() => setItems(clearCart())}
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid #ddd",
                background: "white",
                cursor: "pointer",
              }}
            >
              Kosár ürítése
            </button>

            <div style={{ fontSize: 18, fontWeight: 900 }}>
              Összesen: {total.toLocaleString("hu-HU")} Ft
            </div>
          </div>
        </>
      )}
    </main>
  );
}
