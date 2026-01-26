"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
};

export default function AddToCartButton({ product }: Props) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  }

  return (
    <button
      onClick={handleAdd}
      style={{
        padding: "10px 14px",
        borderRadius: 10,
        border: "1px solid #111",
        background: added ? "#0a7" : "#111",
        color: "white",
        cursor: "pointer",
        transition: "0.15s",
      }}
    >
      {added ? "Kosárba rakva ✓" : "Kosárba"}
    </button>
  );
}
