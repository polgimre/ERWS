// src/lib/products.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;   // public alól, pl: /images/valami.jpg
  category: string;
  groups: string[];
  description: string;
};

export const products: Product[] = [
  {
    id: "felcipo-12m",
    name: "12M Félcipő",
    price: 18990,
    image: "/images/12m_felcipo.jpg",
    category: "Cipő",
    groups: ["Rendőrség", "BV", "Katasztrófavédelem",],
    description: "Kényelmes félcipő szolgálati/ünnepi viselethez.",
  },
  {
    id: "bakancs-12m",
    name: "12M Nyári bakancs",
    price: 27990,
    image: "/images/12m_nyaribakancs.jpg",
    category: "Cipő",
    groups: ["Rendőrség", "BV", "Katasztrófavédelem"],
    description: "Szellősebb kialakítás, stabil tartás, terepre is.",
  },
  {
    id: "nadrag-12m",
    name: "12M Nadrág",
    price: 15990,
    image: "/images/12m_nadrag.jpg",
    category: "Nadrág",
    groups: ["Rendőrség", "BV", "Katasztrófavédelem"],
    description: "Tartós anyag, kényelmes szabás, mindennapi használatra.",
  },
  {
    id: "zubbony-12m",
    name: "12M Zubbony",
    price: 34990,
    image: "/images/12m_zubbony.jpg",
    category: "Felső",
    groups: ["Rendőrség", "BV", "Katasztrófavédelem"],
    description: "Elegáns, strukturált zubbony alkalmi és szolgálati viselethez.",
  },
  {
    id: "rteniszing-20m",
    name: "Rendőrségi 20M Teniszíng",
    price: 12990,
    image: "/images/20m_teniszing.jpg",
    category: "Ing",
    groups: ["Rendőrség"],
    description: "Könnyű, kényelmes póló melegebb időben is.",
  },
  {
    id: "bvteniszing-20m",
    name: "Bűntetés-Végrehajtás 20M Teniszíng",
    price: 12990,
    image: "/images/bv_20m_teniszing.jpg",
    category: "Ing",
    groups: ["BV"],
    description: "Könnyű, kényelmes póló melegebb időben is.",
  },
  {
    id: "kvteniszing-20m",
    name: "Katasztrófavédelem 20M Teniszíng",
    price: 12990,
    image: "/images/kv_20m_teniszing.jpg",
    category: "Ing",
    groups: ["Katasztrófavédelem"],
    description: "Könnyű, kényelmes póló melegebb időben is.",
  },
  {
    id: "jackie-gyakorlo",
    name: "Gyakorló jackie",
    price: 29990,
    image: "/images/gyakorlo_jackie.jpg",
    category: "Kabát",
    groups: ["Rendőrség", "BV", "Katasztrófavédelem"],
    description: "Gyakorló kabát, strapabíró, praktikus zsebekkel.",
  },
  {
    id: "kék pilotka",
    name: "Pilotka",
    price: 6990,
    image: "/images/pilotka.jpg",
    category: "Sapka",
    groups: ["BV", "Katasztrófavédelem"],
    description: "Klasszikus pilotka, könnyű és kényelmes viselet.",
  },
  {
    id: "tanyersapka",
    name: "Tányérsapka",
    price: 11990,
    image: "/images/tanyersapka.jpg",
    category: "Sapka",
    groups: ["Rendőrség", "BV", "Katasztrófavédelem"],
    description: "Formázott tányérsapka, ünnepi megjelenéshez.",
  },
  {
    id: "ushanka",
    name: "Ushanka",
    price: 14990,
    image: "/images/ushanka.jpg",
    category: "Sapka",
    groups: ["Rendőrség", "BV", "Katasztrófavédelem"],
    description: "Meleg téli sapka lehajtható fülrésszel.",
  },
  {
    id: "rablomaszk",
    name: "Maszk Rablóknak",
    price: 1890,
    image: "/images/maszkosrablo.jpg",
    category: "Sapka",
    groups: ["Bűnöző"],
    description: "Bankrabláshoz, ékszerlopáshoz vagy egyéb bűncselekményekhez ajánlott maszk. MOST AKCIÓ! AJÁNDÉK ÉLETHŰ JÁTÉKPISZTOLY!",
  },
    {
    id: "makosing",
    name: "Rabruha",
    price: 1890,
    image: "/images/rabruha.jpg",
    category: "Ing",
    groups: ["Bűnöző"],
    description: "Ha a börtönben elveszik az ingedet, itt egy újabb.",
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id) ?? null;
}
