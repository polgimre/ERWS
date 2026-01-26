// src/lib/products.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;   // public alól, pl: /images/valami.jpg
  category: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "felcipo-12m",
    name: "12M Félcipő",
    price: 18990,
    image: "/images/12m_felcipo.jpg",
    category: "Cipő",
    description: "Kényelmes félcipő szolgálati/ünnepi viselethez.",
  },
  {
    id: "bakancs-12m",
    name: "12M Nyári bakancs",
    price: 27990,
    image: "/images/12m_nyaribakancs.jpg",
    category: "Bakancs",
    description: "Szellősebb kialakítás, stabil tartás, terepre is.",
  },
  {
    id: "nadrag-12m",
    name: "12M Nadrág",
    price: 15990,
    image: "/images/12m_nadrag.jpg",
    category: "Nadrág",
    description: "Tartós anyag, kényelmes szabás, mindennapi használatra.",
  },
  {
    id: "zubbony-12m",
    name: "12M Zubbony",
    price: 34990,
    image: "/images/12m_zubbony.jpg",
    category: "Felső",
    description: "Elegáns, strukturált zubbony alkalmi és szolgálati viselethez.",
  },
  {
    id: "teniszing-20m",
    name: "20M Teniszíng",
    price: 12990,
    image: "/images/20m_teniszing.jpg",
    category: "Ing",
    description: "Könnyű, kényelmes póló melegebb időben is.",
  },
  {
    id: "jackie-gyakorlo",
    name: "Gyakorló jackie",
    price: 29990,
    image: "/images/gyakorlo_jackie.jpg",
    category: "Kabát",
    description: "Gyakorló kabát, strapabíró, praktikus zsebekkel.",
  },
  {
    id: "pilotka",
    name: "Pilotka",
    price: 6990,
    image: "/images/pilotka.jpg",
    category: "Sapka",
    description: "Klasszikus pilotka, könnyű és kényelmes viselet.",
  },
  {
    id: "tanyersapka",
    name: "Tányérsapka",
    price: 11990,
    image: "/images/tanyersapka.jpg",
    category: "Sapka",
    description: "Formázott tányérsapka, ünnepi megjelenéshez.",
  },
  {
    id: "ushanka",
    name: "Ushanka",
    price: 14990,
    image: "/images/ushanka.jpg",
    category: "Téli",
    description: "Meleg téli sapka lehajtható fülrésszel.",
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id) ?? null;
}
