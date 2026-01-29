"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { useAuth } from "@/components/AuthProvider";

export default function Navbar() {
  const { user, loading } = useAuth();

  async function logout() {
    await signOut(auth);
  }

  return (
    <header style={{ borderBottom: "1px solid #e5e5e5" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Image src="/images/logo.png" alt="ERWS logo" width={100} height={100} />
          <span style={{ fontWeight: 800 }}>Egyenruha Webshop</span>
        </Link>

        <nav style={{ marginLeft: "auto", display: "flex", gap: 14, alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Termékek
          </Link>
          <Link href="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            Kosár
          </Link>

          {!loading && !user && (
            <Link
              href="/login"
              style={{
                textDecoration: "none",
                padding: "8px 10px",
                borderRadius: 10,
                border: "1px solid #111",
                background: "#111",
                color: "white",
              }}
            >
              Belépés
            </Link>
          )}

          {!loading && user && (
            <>
              <span style={{ fontSize: 13, opacity: 0.75 }}>
                {user.email ?? "Belépve"}
              </span>
              <button
                onClick={logout}
                style={{
                  padding: "8px 10px",
                  borderRadius: 10,
                  border: "1px solid #ddd",
                  background: "white",
                  cursor: "pointer",
                }}
              >
                Kilépés
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
