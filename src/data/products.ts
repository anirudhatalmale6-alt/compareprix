import { Product, ProductPrice } from "@/types";

export const categories = [
  "Boissons",
  "Produits laitiers",
  "Epicerie",
  "Conserves",
  "Hygiène & Beauté",
  "Surgelés",
  "Fruits & Légumes",
  "Viandes & Poissons",
  "Boulangerie",
  "Snacks & Confiserie",
  "Petit-déjeuner",
  "Entretien",
];

export const products: Product[] = [
  // Boissons
  { id: "p001", name: "Pepsi 33cl", brand: "Pepsi", category: "Boissons", unit: "33cl", image: "🥤", ean: "4060800100610" },
  { id: "p002", name: "Coca-Cola 1.5L", brand: "Coca-Cola", category: "Boissons", unit: "1.5L", image: "🥤", ean: "5449000000996" },
  { id: "p003", name: "Eau Evian 1.5L", brand: "Evian", category: "Boissons", unit: "1.5L", image: "💧", ean: "3068320011240" },
  { id: "p004", name: "Eau Vittel 1.5L", brand: "Vittel", category: "Boissons", unit: "1.5L", image: "💧", ean: "3179732340016" },
  { id: "p005", name: "Orangina 1.5L", brand: "Orangina", category: "Boissons", unit: "1.5L", image: "🍊", ean: "3124480178961" },
  { id: "p006", name: "Jus d'orange Tropicana 1L", brand: "Tropicana", category: "Boissons", unit: "1L", image: "🍊", ean: "5410188030891" },
  { id: "p007", name: "Oasis Tropical 1.5L", brand: "Oasis", category: "Boissons", unit: "1.5L", image: "🍹", ean: "3124480186447" },
  { id: "p008", name: "Perrier 1L", brand: "Perrier", category: "Boissons", unit: "1L", image: "💧", ean: "3179732340405" },
  { id: "p009", name: "Red Bull 25cl", brand: "Red Bull", category: "Boissons", unit: "25cl", image: "🥫", ean: "9002490100070" },
  { id: "p010", name: "Coca-Cola Zero 33cl", brand: "Coca-Cola", category: "Boissons", unit: "33cl", image: "🥤", ean: "5449000131805" },

  // Produits laitiers
  { id: "p011", name: "Lait demi-écrémé Lactel 1L", brand: "Lactel", category: "Produits laitiers", unit: "1L", image: "🥛", ean: "3428570067400" },
  { id: "p012", name: "Yaourt nature Danone x4", brand: "Danone", category: "Produits laitiers", unit: "4x125g", image: "🥛", ean: "3033490004705" },
  { id: "p013", name: "Beurre doux Président 250g", brand: "Président", category: "Produits laitiers", unit: "250g", image: "🧈", ean: "3228021170015" },
  { id: "p014", name: "Emmental râpé 200g", brand: "Président", category: "Produits laitiers", unit: "200g", image: "🧀", ean: "3228020480565" },
  { id: "p015", name: "Crème fraîche épaisse 20cl", brand: "Elle & Vire", category: "Produits laitiers", unit: "20cl", image: "🥛", ean: "3451790014116" },
  { id: "p016", name: "Camembert Président", brand: "Président", category: "Produits laitiers", unit: "250g", image: "🧀", ean: "3228021600017" },
  { id: "p017", name: "Comté AOP 200g", brand: "Entremont", category: "Produits laitiers", unit: "200g", image: "🧀", ean: "3123930650019" },
  { id: "p018", name: "Activia Nature x4", brand: "Danone", category: "Produits laitiers", unit: "4x125g", image: "🥛", ean: "3033490685034" },

  // Epicerie
  { id: "p019", name: "Pâtes Penne Barilla 500g", brand: "Barilla", category: "Epicerie", unit: "500g", image: "🍝", ean: "8076802085738" },
  { id: "p020", name: "Riz Basmati Uncle Ben's 500g", brand: "Uncle Ben's", category: "Epicerie", unit: "500g", image: "🍚", ean: "5410673854001" },
  { id: "p021", name: "Huile d'olive Puget 75cl", brand: "Puget", category: "Epicerie", unit: "75cl", image: "🫒", ean: "3262920021055" },
  { id: "p022", name: "Farine T45 Francine 1kg", brand: "Francine", category: "Epicerie", unit: "1kg", image: "🌾", ean: "3019081200015" },
  { id: "p023", name: "Sucre en poudre Daddy 1kg", brand: "Daddy", category: "Epicerie", unit: "1kg", image: "🍬", ean: "3229820019475" },
  { id: "p024", name: "Sel fin La Baleine 500g", brand: "La Baleine", category: "Epicerie", unit: "500g", image: "🧂", ean: "3017760000079" },
  { id: "p025", name: "Sauce tomate Panzani 400g", brand: "Panzani", category: "Epicerie", unit: "400g", image: "🍅", ean: "3038350013903" },
  { id: "p026", name: "Moutarde de Dijon Amora 440g", brand: "Amora", category: "Epicerie", unit: "440g", image: "🟡", ean: "8712100316760" },

  // Conserves
  { id: "p027", name: "Thon entier Petit Navire 200g", brand: "Petit Navire", category: "Conserves", unit: "200g", image: "🐟", ean: "3023084202008" },
  { id: "p028", name: "Haricots verts Bonduelle 440g", brand: "Bonduelle", category: "Conserves", unit: "440g", image: "🥫", ean: "3083680002967" },
  { id: "p029", name: "Maïs Géant Vert 285g", brand: "Géant Vert", category: "Conserves", unit: "285g", image: "🌽", ean: "3023082500055" },
  { id: "p030", name: "Petits pois Cassegrain 400g", brand: "Cassegrain", category: "Conserves", unit: "400g", image: "🥫", ean: "3083681025705" },
  { id: "p031", name: "Ravioli Panzani 800g", brand: "Panzani", category: "Conserves", unit: "800g", image: "🥫", ean: "3038350055408" },

  // Hygiène & Beauté
  { id: "p032", name: "Gel douche Dove 250ml", brand: "Dove", category: "Hygiène & Beauté", unit: "250ml", image: "🧴", ean: "8717163237786" },
  { id: "p033", name: "Shampooing Head & Shoulders 280ml", brand: "Head & Shoulders", category: "Hygiène & Beauté", unit: "280ml", image: "🧴", ean: "8001090197764" },
  { id: "p034", name: "Dentifrice Colgate Total 75ml", brand: "Colgate", category: "Hygiène & Beauté", unit: "75ml", image: "🪥", ean: "8718951080027" },
  { id: "p035", name: "Déodorant Nivea Men 200ml", brand: "Nivea", category: "Hygiène & Beauté", unit: "200ml", image: "🧴", ean: "4005900035776" },
  { id: "p036", name: "Papier toilette Lotus x6", brand: "Lotus", category: "Hygiène & Beauté", unit: "6 rouleaux", image: "🧻", ean: "5029053002231" },

  // Surgelés
  { id: "p037", name: "Pizza 4 Fromages Marie 400g", brand: "Marie", category: "Surgelés", unit: "400g", image: "🍕", ean: "3285020601030" },
  { id: "p038", name: "Frites McCain 1kg", brand: "McCain", category: "Surgelés", unit: "1kg", image: "🍟", ean: "8710438091304" },
  { id: "p039", name: "Glace Vanille Häagen-Dazs 460ml", brand: "Häagen-Dazs", category: "Surgelés", unit: "460ml", image: "🍦", ean: "3415581094008" },
  { id: "p040", name: "Nuggets de poulet Findus x20", brand: "Findus", category: "Surgelés", unit: "400g", image: "🍗", ean: "7613034287090" },

  // Fruits & Légumes
  { id: "p041", name: "Bananes 1kg", brand: "Marque distributeur", category: "Fruits & Légumes", unit: "1kg", image: "🍌", ean: "0000000000001" },
  { id: "p042", name: "Tomates grappe 1kg", brand: "Marque distributeur", category: "Fruits & Légumes", unit: "1kg", image: "🍅", ean: "0000000000002" },
  { id: "p043", name: "Pommes Golden 1kg", brand: "Marque distributeur", category: "Fruits & Légumes", unit: "1kg", image: "🍎", ean: "0000000000003" },
  { id: "p044", name: "Carottes 1kg", brand: "Marque distributeur", category: "Fruits & Légumes", unit: "1kg", image: "🥕", ean: "0000000000004" },
  { id: "p045", name: "Pommes de terre 2.5kg", brand: "Marque distributeur", category: "Fruits & Légumes", unit: "2.5kg", image: "🥔", ean: "0000000000005" },
  { id: "p046", name: "Salade Iceberg", brand: "Marque distributeur", category: "Fruits & Légumes", unit: "pièce", image: "🥬", ean: "0000000000006" },
  { id: "p047", name: "Oignons 1kg", brand: "Marque distributeur", category: "Fruits & Légumes", unit: "1kg", image: "🧅", ean: "0000000000007" },

  // Viandes & Poissons
  { id: "p048", name: "Escalopes de poulet x2", brand: "Marque distributeur", category: "Viandes & Poissons", unit: "250g", image: "🍗", ean: "0000000000008" },
  { id: "p049", name: "Steak haché 5% MG x4", brand: "Charal", category: "Viandes & Poissons", unit: "4x100g", image: "🥩", ean: "3181238938505" },
  { id: "p050", name: "Jambon blanc Herta x4", brand: "Herta", category: "Viandes & Poissons", unit: "4 tranches", image: "🥓", ean: "7613036502054" },
  { id: "p051", name: "Saumon fumé Labeyrie x4", brand: "Labeyrie", category: "Viandes & Poissons", unit: "4 tranches", image: "🐟", ean: "3033610045724" },
  { id: "p052", name: "Lardons fumés Herta 200g", brand: "Herta", category: "Viandes & Poissons", unit: "200g", image: "🥓", ean: "7613036507035" },

  // Boulangerie
  { id: "p053", name: "Pain de mie Harry's 500g", brand: "Harry's", category: "Boulangerie", unit: "500g", image: "🍞", ean: "3228857000507" },
  { id: "p054", name: "Baguette tradition", brand: "Marque distributeur", category: "Boulangerie", unit: "pièce", image: "🥖", ean: "0000000000009" },
  { id: "p055", name: "Croissants x6", brand: "Marque distributeur", category: "Boulangerie", unit: "6 pièces", image: "🥐", ean: "0000000000010" },
  { id: "p056", name: "Brioche Pasquier 500g", brand: "Pasquier", category: "Boulangerie", unit: "500g", image: "🍞", ean: "3281580065014" },

  // Snacks & Confiserie
  { id: "p057", name: "Chips Lay's Nature 150g", brand: "Lay's", category: "Snacks & Confiserie", unit: "150g", image: "🥔", ean: "8710398527905" },
  { id: "p058", name: "Nutella 400g", brand: "Ferrero", category: "Snacks & Confiserie", unit: "400g", image: "🍫", ean: "3017620422003" },
  { id: "p059", name: "Kinder Bueno x6", brand: "Ferrero", category: "Snacks & Confiserie", unit: "6 barres", image: "🍫", ean: "8000500062883" },
  { id: "p060", name: "M&M's Peanut 330g", brand: "Mars", category: "Snacks & Confiserie", unit: "330g", image: "🍬", ean: "5000159461122" },
  { id: "p061", name: "BN Chocolat 295g", brand: "BN", category: "Snacks & Confiserie", unit: "295g", image: "🍪", ean: "7622210713100" },

  // Petit-déjeuner
  { id: "p062", name: "Céréales Chocapic 430g", brand: "Nestlé", category: "Petit-déjeuner", unit: "430g", image: "🥣", ean: "7613034626844" },
  { id: "p063", name: "Confiture fraises Bonne Maman 370g", brand: "Bonne Maman", category: "Petit-déjeuner", unit: "370g", image: "🍓", ean: "3045320094602" },
  { id: "p064", name: "Café moulu Carte Noire 250g", brand: "Carte Noire", category: "Petit-déjeuner", unit: "250g", image: "☕", ean: "7622300428228" },
  { id: "p065", name: "Thé Earl Grey Lipton x25", brand: "Lipton", category: "Petit-déjeuner", unit: "25 sachets", image: "🍵", ean: "8722700055525" },
  { id: "p066", name: "Miel de fleurs 500g", brand: "Lune de Miel", category: "Petit-déjeuner", unit: "500g", image: "🍯", ean: "3088543600017" },

  // Entretien
  { id: "p067", name: "Lessive liquide Skip 1.4L", brand: "Skip", category: "Entretien", unit: "1.4L", image: "🧺", ean: "8717163770467" },
  { id: "p068", name: "Liquide vaisselle Paic Citron 750ml", brand: "Paic", category: "Entretien", unit: "750ml", image: "🍋", ean: "3015810770750" },
  { id: "p069", name: "Éponges Scotch-Brite x3", brand: "Scotch-Brite", category: "Entretien", unit: "3 pièces", image: "🧽", ean: "4046719195367" },
  { id: "p070", name: "Sacs poubelle 50L x20", brand: "Handy Bag", category: "Entretien", unit: "20 sacs", image: "🗑️", ean: "3400300152001" },
];

function randomPrice(base: number, variance: number): number {
  const offset = (Math.random() * 2 - 1) * variance;
  return Math.round((base + offset) * 100) / 100;
}

const basePrices: Record<string, number> = {
  p001: 0.89, p002: 1.99, p003: 0.79, p004: 0.69, p005: 1.79,
  p006: 2.49, p007: 1.69, p008: 1.19, p009: 2.49, p010: 0.79,
  p011: 1.09, p012: 1.49, p013: 2.39, p014: 1.89, p015: 1.29,
  p016: 1.99, p017: 3.49, p018: 1.79, p019: 1.39, p020: 1.89,
  p021: 5.49, p022: 0.99, p023: 1.39, p024: 0.69, p025: 1.19,
  p026: 2.29, p027: 3.49, p028: 1.29, p029: 1.49, p030: 1.69,
  p031: 2.19, p032: 2.99, p033: 3.89, p034: 2.49, p035: 3.29,
  p036: 3.49, p037: 3.29, p038: 2.49, p039: 5.99, p040: 4.49,
  p041: 1.69, p042: 2.49, p043: 2.29, p044: 1.19, p045: 2.49,
  p046: 0.99, p047: 1.39, p048: 4.29, p049: 5.99, p050: 2.49,
  p051: 5.49, p052: 2.19, p053: 1.79, p054: 1.29, p055: 2.49,
  p056: 2.99, p057: 2.19, p058: 3.99, p059: 2.89, p060: 3.99,
  p061: 1.79, p062: 3.49, p063: 2.29, p064: 4.49, p065: 1.99,
  p066: 4.49, p067: 6.99, p068: 1.69, p069: 1.99, p070: 2.49,
};

const chainMultipliers: Record<string, number> = {
  carrefour: 1.0,
  leclerc: 0.95,
  lidl: 0.88,
  aldi: 0.87,
  monoprix: 1.12,
  franprix: 1.08,
  intermarche: 0.97,
  casino: 1.05,
};

const chainIds = ["carrefour", "leclerc", "lidl", "aldi", "monoprix", "franprix", "intermarche", "casino"];

function generatePrices(): ProductPrice[] {
  const prices: ProductPrice[] = [];
  const seed = 42;
  let s = seed;
  function seededRandom(): number {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  }

  for (const product of products) {
    const base = basePrices[product.id] || 1.99;
    for (const chainId of chainIds) {
      const multiplier = chainMultipliers[chainId];
      const variation = (seededRandom() * 0.12 - 0.06);
      const price = Math.round(base * multiplier * (1 + variation) * 100) / 100;
      const unavailableChance = chainId === "lidl" || chainId === "aldi" ? 0.15 : 0.05;
      const available = seededRandom() > unavailableChance;

      prices.push({
        productId: product.id,
        chainId,
        price: available ? price : 0,
        available,
      });
    }
  }
  return prices;
}

export const productPrices: ProductPrice[] = generatePrices();

export function getProductPrice(productId: string, chainId: string): ProductPrice | undefined {
  return productPrices.find((p) => p.productId === productId && p.chainId === chainId);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCheapestChain(productId: string): { chainId: string; price: number } | null {
  const prices = productPrices
    .filter((p) => p.productId === productId && p.available)
    .sort((a, b) => a.price - b.price);
  if (prices.length === 0) return null;
  return { chainId: prices[0].chainId, price: prices[0].price };
}
