"use client";

import { useEffect, useState } from "react";

export default function PromoModal() {
  const [open, setOpen] = useState(false);

  // ✅ MINDIG megjelenik oldalbetöltéskor
  useEffect(() => {
    setOpen(true);
  }, []);

  function close() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        display: "grid",
        placeItems: "center",
        padding: 16,
        zIndex: 9999,
      }}
      onClick={close}
    >
      <div
        style={{
          width: "min(720px, 100%)",
          borderRadius: 16,
          background: "white",
          border: "1px solid #e5e5e5",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fejléc */}
        <div style={{ padding: 16, borderBottom: "1px solid #eee" }}>
            <img src="/images/logo.png" alt="ERWS logo" width={150} height={150} style={{ verticalAlign: "middle" }} />
       </div>

        {/* Tartalom */}
        <div style={{ padding: 16, display: "grid", gap: 10 }}>
          <div
            style={{
              borderRadius: 12,
              padding: 14,
              border: "1px solid #e5e5e5",
              background: "#fafafa",
            }}
          >
            <div style={{ fontWeight: 800, fontSize: 16 }}>
              Megérkeztek az új egyenruhák!
              <img src="/images/promomodal.jpg" alt="Új egyenruhák" style={{ width: 1024, marginLeft: 10, verticalAlign: "middle" }} />
            </div>
            <div style={{ opacity: 0.75, marginTop: 6 }}>
              Újítás! Nem csak pandúroknak, hanem rablóknak is!
            </div>
          </div>

          {/* Gombok */}
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={close}
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid #ddd",
                background: "white",
                cursor: "pointer",
              }}
            >
              Bezárás
            </button>

            <a
              href="/#products"
              onClick={close}
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid #111",
                background: "#111",
                color: "white",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Megnézem az akciót →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
