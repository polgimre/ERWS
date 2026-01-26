// src/app/api/products/route.ts
import { NextResponse } from "next/server";
import { products } from "@/lib/products";

export function GET() {
  return NextResponse.json(products);
}
