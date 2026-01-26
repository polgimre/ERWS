(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/cart.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/cart.ts
__turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "clearCart",
    ()=>clearCart,
    "getTotal",
    ()=>getTotal,
    "readCart",
    ()=>readCart,
    "removeFromCart",
    ()=>removeFromCart,
    "saveCart",
    ()=>saveCart,
    "setQuantity",
    ()=>setQuantity
]);
const KEY = "erws_cart_v1";
function readCart() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : [];
    } catch  {
        return [];
    }
}
function saveCart(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
}
function addToCart(item, qty = 1) {
    const cart = readCart();
    const existing = cart.find((x)=>x.id === item.id);
    if (existing) existing.quantity += qty;
    else cart.push({
        ...item,
        quantity: qty
    });
    saveCart(cart);
    return cart;
}
function removeFromCart(id) {
    const cart = readCart().filter((x)=>x.id !== id);
    saveCart(cart);
    return cart;
}
function setQuantity(id, quantity) {
    const q = Math.max(1, Math.min(99, quantity));
    const cart = readCart().map((x)=>x.id === id ? {
            ...x,
            quantity: q
        } : x);
    saveCart(cart);
    return cart;
}
function clearCart() {
    saveCart([]);
    return [];
}
function getTotal(items) {
    return items.reduce((sum, x)=>sum + x.price * x.quantity, 0);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AddToCartButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddToCartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_795185d4d8aa919df0c6d7b1b45ef0b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_795185d4d8aa919df0c6d7b1b45ef0b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_795185d4d8aa919df0c6d7b1b45ef0b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_795185d4d8aa919df0c6d7b1b45ef0b6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cart.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AddToCartButton({ product }) {
    _s();
    const [added, setAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_795185d4d8aa919df0c6d7b1b45ef0b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleAdd() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"])(product, 1);
        setAdded(true);
        setTimeout(()=>setAdded(false), 900);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_795185d4d8aa919df0c6d7b1b45ef0b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleAdd,
        style: {
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #111",
            background: added ? "#0a7" : "#111",
            color: "white",
            cursor: "pointer",
            transition: "0.15s"
        },
        children: added ? "Kosárba rakva ✓" : "Kosárba"
    }, void 0, false, {
        fileName: "[project]/src/components/AddToCartButton.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(AddToCartButton, "xJr9e1OkmJ3VepoKkDqIuNzabHg=");
_c = AddToCartButton;
var _c;
__turbopack_context__.k.register(_c, "AddToCartButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a94d3080._.js.map