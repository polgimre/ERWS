"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase/client";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, pass);
      } else {
        await createUserWithEmailAndPassword(auth, email, pass);
      }
      router.push("/");
    } catch (e: any) {
      setErr(e?.message ?? "Hiba történt");
    }
  }

  async function googleLogin() {
    setErr(null);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      router.push("/");
    } catch (e: any) {
      setErr(e?.message ?? "Hiba történt");
    }
  }

  return (
    <main style={{ maxWidth: 480, margin: "0 auto", padding: 18 }}>
      <h1 style={{ marginTop: 0 }}>
        {mode === "login" ? "Bejelentkezés" : "Regisztráció"}
      </h1>
      <p> Jó hír! Most már nem kell RobotZsaruval bejelentkezni!</p>

      <form onSubmit={submit} style={{ display: "grid", gap: 10 }}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }}
        />
        <input
          placeholder="Jelszó"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #111",
            background: "#111",
            color: "white",
            cursor: "pointer",
          }}
        >
          {mode === "login" ? "Belépés" : "Regisztráció"}
        </button>
      </form>

      <button
        onClick={googleLogin}
        style={{
          marginTop: 10,
          padding: "10px 12px",
          borderRadius: 10,
          border: "1px solid #ddd",
          background: "white",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Google belépés
      </button>

      <div style={{ marginTop: 12 }}>
        {mode === "login" ? (
          <button
            onClick={() => setMode("register")}
            style={{ background: "transparent", border: "none", cursor: "pointer", textDecoration: "underline" }}
          >
            Nincs fiókod? Regisztrálok
          </button>
        ) : (
          <button
            onClick={() => setMode("login")}
            style={{ background: "transparent", border: "none", cursor: "pointer", textDecoration: "underline" }}
          >
            Van fiókom? Belépek
          </button>
        )}
      </div>

      {err && <p style={{ color: "crimson" }}>{err}</p>}
    </main>
  );
}
