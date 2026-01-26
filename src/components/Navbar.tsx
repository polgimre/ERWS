// src/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header style={{ borderBottom: "1px solid #e5e5e5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 16px", display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/images/logo.png" alt="ERWS logo" width={200} height={200} />
          <span style={{ fontWeight: 700 }}>Egyenruha Webshop [ERWS]</span>
        </Link>

        <nav style={{ marginLeft: "auto", display: "flex", gap: 14 }}>
          <Link href="/" style={{ textDecoration: "none" }}>Termékek</Link>
          <Link href="/cart" style={{ textDecoration: "none" }}>Kosár</Link>
        </nav>
      </div>
    </header>
  );
}
