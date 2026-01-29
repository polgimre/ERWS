module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/products.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/products.ts
__turbopack_context__.s([
    "getProductById",
    ()=>getProductById,
    "products",
    ()=>products
]);
const products = [
    {
        id: "felcipo-12m",
        name: "12M Félcipő",
        price: 18990,
        image: "/images/12m_felcipo.jpg",
        category: "Cipő",
        groups: [
            "Rendőrség",
            "BV",
            "Katasztrófavédelem"
        ],
        description: "Kényelmes félcipő szolgálati/ünnepi viselethez."
    },
    {
        id: "bakancs-12m",
        name: "12M Nyári bakancs",
        price: 27990,
        image: "/images/12m_nyaribakancs.jpg",
        category: "Cipő",
        groups: [
            "Rendőrség",
            "BV",
            "Katasztrófavédelem"
        ],
        description: "Szellősebb kialakítás, stabil tartás, terepre is."
    },
    {
        id: "nadrag-12m",
        name: "12M Nadrág",
        price: 15990,
        image: "/images/12m_nadrag.jpg",
        category: "Nadrág",
        groups: [
            "Rendőrség",
            "BV",
            "Katasztrófavédelem"
        ],
        description: "Tartós anyag, kényelmes szabás, mindennapi használatra."
    },
    {
        id: "zubbony-12m",
        name: "12M Zubbony",
        price: 34990,
        image: "/images/12m_zubbony.jpg",
        category: "Felső",
        groups: [
            "Rendőrség",
            "BV",
            "Katasztrófavédelem"
        ],
        description: "Elegáns, strukturált zubbony alkalmi és szolgálati viselethez."
    },
    {
        id: "rteniszing-20m",
        name: "Rendőrségi 20M Teniszíng",
        price: 12990,
        image: "/images/20m_teniszing.jpg",
        category: "Ing",
        groups: [
            "Rendőrség"
        ],
        description: "Könnyű, kényelmes póló melegebb időben is."
    },
    {
        id: "bvteniszing-20m",
        name: "Bűntetés-Végrehajtás 20M Teniszíng",
        price: 12990,
        image: "/images/bv_20m_teniszing.jpg",
        category: "Ing",
        groups: [
            "BV"
        ],
        description: "Könnyű, kényelmes póló melegebb időben is."
    },
    {
        id: "kvteniszing-20m",
        name: "Katasztrófavédelem 20M Teniszíng",
        price: 12990,
        image: "/images/kv_20m_teniszing.jpg",
        category: "Ing",
        groups: [
            "Katasztrófavédelem"
        ],
        description: "Könnyű, kényelmes póló melegebb időben is."
    },
    {
        id: "jackie-gyakorlo",
        name: "Gyakorló jackie",
        price: 29990,
        image: "/images/gyakorlo_jackie.jpg",
        category: "Kabát",
        groups: [
            "Rendőrség",
            "BV",
            "Katasztrófavédelem"
        ],
        description: "Gyakorló kabát, strapabíró, praktikus zsebekkel."
    },
    {
        id: "kék pilotka",
        name: "Pilotka",
        price: 6990,
        image: "/images/pilotka.jpg",
        category: "Sapka",
        groups: [
            "BV",
            "Katasztrófavédelem"
        ],
        description: "Klasszikus pilotka, könnyű és kényelmes viselet."
    },
    {
        id: "tanyersapka",
        name: "Tányérsapka",
        price: 11990,
        image: "/images/tanyersapka.jpg",
        category: "Sapka",
        groups: [
            "Rendőrség",
            "BV",
            "Katasztrófavédelem"
        ],
        description: "Formázott tányérsapka, ünnepi megjelenéshez."
    },
    {
        id: "ushanka",
        name: "Ushanka",
        price: 14990,
        image: "/images/ushanka.jpg",
        category: "Sapka",
        groups: [
            "Rendőrség",
            "BV",
            "Katasztrófavédelem"
        ],
        description: "Meleg téli sapka lehajtható fülrésszel."
    },
    {
        id: "rablomaszk",
        name: "Maszk Rablóknak",
        price: 1890,
        image: "/images/maszkosrablo.jpg",
        category: "Sapka",
        groups: [
            "Bűnöző"
        ],
        description: "Bankrabláshoz, ékszerlopáshoz vagy egyéb bűncselekményekhez ajánlott maszk. MOST AKCIÓ! AJÁNDÉK ÉLETHŰ JÁTÉKPISZTOLY!"
    },
    {
        id: "makosing",
        name: "Rabruha",
        price: 1890,
        image: "/images/rabruha.jpg",
        category: "Ing",
        groups: [
            "Bűnöző"
        ],
        description: "Ha a börtönben elveszik az ingedet, itt egy újabb."
    }
];
function getProductById(id) {
    return products.find((p)=>p.id === id) ?? null;
}
}),
"[project]/src/app/api/products/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
// src/app/api/products/route.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_795185d4d8aa919df0c6d7b1b45ef0b6$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_795185d4d8aa919df0c6d7b1b45ef0b6/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/products.ts [app-route] (ecmascript)");
;
;
function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_795185d4d8aa919df0c6d7b1b45ef0b6$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["products"]);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b366de4c._.js.map