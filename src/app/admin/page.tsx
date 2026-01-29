"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [loading, user, router]);

  if (loading) return <p style={{ padding: 18 }}>Betöltés…</p>;
  if (!user) return null;

  return <main style={{ padding: 18 }}><h1>Admin</h1><p>Csak belépve.</p></main>;
}
