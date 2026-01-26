// src/app/cart/page.tsx
import Navbar from "@/components/Navbar";
import CartClient from "./CartClient";

export default function CartPage() {
  return (
    <>
      <Navbar />
      <CartClient />
    </>
  );
}
