// src/lib/cart.ts
export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const KEY = "erws_cart_v1";

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function addToCart(item: Omit<CartItem, "quantity">, qty = 1) {
  const cart = readCart();
  const existing = cart.find((x) => x.id === item.id);

  if (existing) existing.quantity += qty;
  else cart.push({ ...item, quantity: qty });

  saveCart(cart);
  return cart;
}

export function removeFromCart(id: string) {
  const cart = readCart().filter((x) => x.id !== id);
  saveCart(cart);
  return cart;
}

export function setQuantity(id: string, quantity: number) {
  const q = Math.max(1, Math.min(99, quantity));
  const cart = readCart().map((x) => (x.id === id ? { ...x, quantity: q } : x));
  saveCart(cart);
  return cart;
}

export function clearCart() {
  saveCart([]);
  return [];
}

export function getTotal(items: CartItem[]) {
  return items.reduce((sum, x) => sum + x.price * x.quantity, 0);
}
