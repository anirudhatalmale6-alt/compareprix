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
  "Boulangerie & Viennoiseries",
  "Snacks & Confiserie",
  "Petit-déjeuner",
  "Entretien ménager",
  "Bébé & Enfant",
  "Alcools & Vins",
];

export const products: Product[] = [
  // ── Boissons ──
  { id: "p001", name: "Pepsi 33cl", brand: "Pepsi", category: "Boissons", unit: "33cl", image: "", ean: "4060800100610" },
  { id: "p002", name: "Coca-Cola Original 1.5L", brand: "Coca-Cola", category: "Boissons", unit: "1.5L", image: "", ean: "5449000000996" },
  { id: "p003", name: "Eau minérale Evian 1.5L", brand: "Evian", category: "Boissons", unit: "1.5L", image: "", ean: "3068320011240" },
  { id: "p004", name: "Eau minérale Vittel 1.5L", brand: "Vittel", category: "Boissons", unit: "1.5L", image: "", ean: "3179732340016" },
  { id: "p005", name: "Orangina Original 1.5L", brand: "Orangina", category: "Boissons", unit: "1.5L", image: "", ean: "3124480178961" },
  { id: "p006", name: "Jus d'orange Tropicana Pure Premium 1L", brand: "Tropicana", category: "Boissons", unit: "1L", image: "", ean: "5410188030891" },
  { id: "p007", name: "Oasis Tropical 1.5L", brand: "Oasis", category: "Boissons", unit: "1.5L", image: "", ean: "3124480186447" },
  { id: "p008", name: "Perrier eau gazeuse 1L", brand: "Perrier", category: "Boissons", unit: "1L", image: "", ean: "3179732340405" },
  { id: "p009", name: "Red Bull Energy Drink 25cl", brand: "Red Bull", category: "Boissons", unit: "25cl", image: "", ean: "9002490100070" },
  { id: "p010", name: "Coca-Cola Zero 33cl", brand: "Coca-Cola", category: "Boissons", unit: "33cl", image: "", ean: "5449000131805" },
  { id: "p011b", name: "Cristaline eau de source 1.5L", brand: "Cristaline", category: "Boissons", unit: "1.5L", image: "", ean: "3270190025445" },
  { id: "p012b", name: "Schweppes Indian Tonic 1.5L", brand: "Schweppes", category: "Boissons", unit: "1.5L", image: "", ean: "5449000159609" },
  { id: "p013b", name: "Fanta Orange 1.5L", brand: "Fanta", category: "Boissons", unit: "1.5L", image: "", ean: "5449000011527" },
  { id: "p014b", name: "Ice Tea pêche Lipton 1.5L", brand: "Lipton", category: "Boissons", unit: "1.5L", image: "", ean: "5410188221007" },
  { id: "p015b", name: "7UP citron citron vert 1.5L", brand: "7UP", category: "Boissons", unit: "1.5L", image: "", ean: "4006917600079" },

  // ── Produits laitiers ──
  { id: "p011", name: "Lait demi-écrémé Lactel 1L", brand: "Lactel", category: "Produits laitiers", unit: "1L", image: "", ean: "3428570067400" },
  { id: "p012", name: "Yaourt nature Danone x4", brand: "Danone", category: "Produits laitiers", unit: "4x125g", image: "", ean: "3033490004705" },
  { id: "p013", name: "Beurre doux Président 250g", brand: "Président", category: "Produits laitiers", unit: "250g", image: "", ean: "3228021170015" },
  { id: "p014", name: "Emmental râpé Président 200g", brand: "Président", category: "Produits laitiers", unit: "200g", image: "", ean: "3228020480565" },
  { id: "p015", name: "Crème fraîche épaisse Elle & Vire 20cl", brand: "Elle & Vire", category: "Produits laitiers", unit: "20cl", image: "", ean: "3451790014116" },
  { id: "p016", name: "Camembert Président 250g", brand: "Président", category: "Produits laitiers", unit: "250g", image: "", ean: "3228021600017" },
  { id: "p017", name: "Comté AOP 200g", brand: "Entremont", category: "Produits laitiers", unit: "200g", image: "", ean: "3123930650019" },
  { id: "p018", name: "Activia Nature Danone x4", brand: "Danone", category: "Produits laitiers", unit: "4x125g", image: "", ean: "3033490685034" },
  { id: "p016b", name: "Lait entier Candia 1L", brand: "Candia", category: "Produits laitiers", unit: "1L", image: "", ean: "3700300020233" },
  { id: "p017b", name: "Kiri crème x12", brand: "Kiri", category: "Produits laitiers", unit: "12 portions", image: "", ean: "3033490028107" },
  { id: "p018b", name: "Skyr nature Danone 450g", brand: "Danone", category: "Produits laitiers", unit: "450g", image: "", ean: "3033490783012" },
  { id: "p019b", name: "Beurre demi-sel Paysan Breton 250g", brand: "Paysan Breton", category: "Produits laitiers", unit: "250g", image: "", ean: "3290220090000" },
  { id: "p020b", name: "Mozzarella Galbani 125g", brand: "Galbani", category: "Produits laitiers", unit: "125g", image: "", ean: "8024900246721" },

  // ── Epicerie ──
  { id: "p019", name: "Pâtes Penne Barilla 500g", brand: "Barilla", category: "Epicerie", unit: "500g", image: "", ean: "8076802085738" },
  { id: "p020", name: "Riz Basmati Uncle Ben's 500g", brand: "Uncle Ben's", category: "Epicerie", unit: "500g", image: "", ean: "5410673854001" },
  { id: "p021", name: "Huile d'olive vierge extra Puget 75cl", brand: "Puget", category: "Epicerie", unit: "75cl", image: "", ean: "3262920021055" },
  { id: "p022", name: "Farine de blé T45 Francine 1kg", brand: "Francine", category: "Epicerie", unit: "1kg", image: "", ean: "3019081200015" },
  { id: "p023", name: "Sucre en poudre Daddy 1kg", brand: "Daddy", category: "Epicerie", unit: "1kg", image: "", ean: "3229820019475" },
  { id: "p024", name: "Sel fin La Baleine 500g", brand: "La Baleine", category: "Epicerie", unit: "500g", image: "", ean: "3017760000079" },
  { id: "p025", name: "Sauce tomate Panzani 400g", brand: "Panzani", category: "Epicerie", unit: "400g", image: "", ean: "3038350013903" },
  { id: "p026", name: "Moutarde de Dijon Amora 440g", brand: "Amora", category: "Epicerie", unit: "440g", image: "", ean: "8712100316760" },
  { id: "p021b", name: "Spaghetti n°5 Barilla 500g", brand: "Barilla", category: "Epicerie", unit: "500g", image: "", ean: "8076802085905" },
  { id: "p022b", name: "Vinaigre balsamique Maille 25cl", brand: "Maille", category: "Epicerie", unit: "25cl", image: "", ean: "8712100238307" },
  { id: "p023b", name: "Couscous moyen Tipiak 500g", brand: "Tipiak", category: "Epicerie", unit: "500g", image: "", ean: "3108000000135" },
  { id: "p024b", name: "Sauce soja Kikkoman 250ml", brand: "Kikkoman", category: "Epicerie", unit: "250ml", image: "", ean: "8848806005312" },
  { id: "p025b", name: "Ketchup Heinz 570g", brand: "Heinz", category: "Epicerie", unit: "570g", image: "", ean: "8762548007832" },
  { id: "p026b", name: "Lentilles vertes Vivien Paille 500g", brand: "Vivien Paille", category: "Epicerie", unit: "500g", image: "", ean: "3167567085006" },

  // ── Conserves ──
  { id: "p027", name: "Thon entier Petit Navire 200g", brand: "Petit Navire", category: "Conserves", unit: "200g", image: "", ean: "3023084202008" },
  { id: "p028", name: "Haricots verts extra-fins Bonduelle 440g", brand: "Bonduelle", category: "Conserves", unit: "440g", image: "", ean: "3083680002967" },
  { id: "p029", name: "Maïs doux Géant Vert 285g", brand: "Géant Vert", category: "Conserves", unit: "285g", image: "", ean: "3023082500055" },
  { id: "p030", name: "Petits pois extra-fins Cassegrain 400g", brand: "Cassegrain", category: "Conserves", unit: "400g", image: "", ean: "3083681025705" },
  { id: "p031", name: "Ravioli pur boeuf Panzani 800g", brand: "Panzani", category: "Conserves", unit: "800g", image: "", ean: "3038350055408" },
  { id: "p027b", name: "Sardines huile olive Parmentier 135g", brand: "Parmentier", category: "Conserves", unit: "135g", image: "", ean: "3113906014355" },
  { id: "p028b", name: "Champignons de Paris émincés 230g", brand: "Bonduelle", category: "Conserves", unit: "230g", image: "", ean: "3083680004343" },
  { id: "p029b", name: "Tomates pelées Mutti 400g", brand: "Mutti", category: "Conserves", unit: "400g", image: "", ean: "8011048000080" },
  { id: "p030b", name: "Cassoulet William Saurin 420g", brand: "William Saurin", category: "Conserves", unit: "420g", image: "", ean: "3270350008108" },

  // ── Hygiène & Beauté ──
  { id: "p032", name: "Gel douche Dove soin nourrissant 250ml", brand: "Dove", category: "Hygiène & Beauté", unit: "250ml", image: "", ean: "8717163237786" },
  { id: "p033", name: "Shampooing Head & Shoulders Classic 280ml", brand: "Head & Shoulders", category: "Hygiène & Beauté", unit: "280ml", image: "", ean: "8001090197764" },
  { id: "p034", name: "Dentifrice Colgate Total 75ml", brand: "Colgate", category: "Hygiène & Beauté", unit: "75ml", image: "", ean: "8718951080027" },
  { id: "p035", name: "Déodorant Nivea Men Fresh Active 200ml", brand: "Nivea", category: "Hygiène & Beauté", unit: "200ml", image: "", ean: "4005900035776" },
  { id: "p036", name: "Papier toilette Lotus Confort x6", brand: "Lotus", category: "Hygiène & Beauté", unit: "6 rouleaux", image: "", ean: "5029053002231" },
  { id: "p032b", name: "Gel douche Le Petit Marseillais Lait 250ml", brand: "Le Petit Marseillais", category: "Hygiène & Beauté", unit: "250ml", image: "", ean: "3025447000121" },
  { id: "p033b", name: "Shampooing Elsève Huile Extraordinaire 250ml", brand: "L'Oréal", category: "Hygiène & Beauté", unit: "250ml", image: "", ean: "3600540043476" },
  { id: "p034b", name: "Mouchoirs Kleenex Original x80", brand: "Kleenex", category: "Hygiène & Beauté", unit: "80 mouchoirs", image: "", ean: "5086300160023" },
  { id: "p035b", name: "Savon de Marseille Le Petit Marseillais 200g", brand: "Le Petit Marseillais", category: "Hygiène & Beauté", unit: "200g", image: "", ean: "3025447000862" },

  // ── Surgelés ──
  { id: "p037", name: "Pizza 4 Fromages Marie 400g", brand: "Marie", category: "Surgelés", unit: "400g", image: "", ean: "3285020601030" },
  { id: "p038", name: "Frites allumettes McCain 1kg", brand: "McCain", category: "Surgelés", unit: "1kg", image: "", ean: "8710438091304" },
  { id: "p039", name: "Glace Vanilla Häagen-Dazs 460ml", brand: "Häagen-Dazs", category: "Surgelés", unit: "460ml", image: "", ean: "3415581094008" },
  { id: "p040", name: "Nuggets de poulet Findus x20", brand: "Findus", category: "Surgelés", unit: "400g", image: "", ean: "7613034287090" },
  { id: "p037b", name: "Poêlée campagnarde Bonduelle 750g", brand: "Bonduelle", category: "Surgelés", unit: "750g", image: "", ean: "3083680058027" },
  { id: "p038b", name: "Cordon bleu de poulet Le Gaulois x2", brand: "Le Gaulois", category: "Surgelés", unit: "200g", image: "", ean: "3266740104003" },
  { id: "p039b", name: "Magnum Classic x4", brand: "Magnum", category: "Surgelés", unit: "4x110ml", image: "", ean: "8717146040483" },

  // ── Fruits & Légumes ──
  { id: "p041", name: "Bananes 1kg", brand: "Origine", category: "Fruits & Légumes", unit: "1kg", image: "", ean: "2840000000038" },
  { id: "p042", name: "Tomates grappe 1kg", brand: "Origine", category: "Fruits & Légumes", unit: "1kg", image: "", ean: "2090000011002" },
  { id: "p043", name: "Pommes Golden 1kg", brand: "Origine", category: "Fruits & Légumes", unit: "1kg", image: "", ean: "2094000000150" },
  { id: "p044", name: "Carottes 1kg", brand: "Origine", category: "Fruits & Légumes", unit: "1kg", image: "", ean: "2080000000074" },
  { id: "p045", name: "Pommes de terre 2.5kg", brand: "Origine", category: "Fruits & Légumes", unit: "2.5kg", image: "", ean: "3271750000025" },
  { id: "p046", name: "Salade Iceberg", brand: "Origine", category: "Fruits & Légumes", unit: "pièce", image: "", ean: "2086000000091" },
  { id: "p047", name: "Oignons jaunes 1kg", brand: "Origine", category: "Fruits & Légumes", unit: "1kg", image: "", ean: "2082000000038" },
  { id: "p041b", name: "Citrons jaunes filet x5", brand: "Origine", category: "Fruits & Légumes", unit: "5 pièces", image: "", ean: "2096000000124" },
  { id: "p042b", name: "Concombre", brand: "Origine", category: "Fruits & Légumes", unit: "pièce", image: "", ean: "2087000000098" },
  { id: "p043b", name: "Courgettes 1kg", brand: "Origine", category: "Fruits & Légumes", unit: "1kg", image: "", ean: "2088000000090" },
  { id: "p044b", name: "Poivrons rouges", brand: "Origine", category: "Fruits & Légumes", unit: "pièce", image: "", ean: "2092000000175" },
  { id: "p045b", name: "Avocat Hass", brand: "Origine", category: "Fruits & Légumes", unit: "pièce", image: "", ean: "2097000000123" },

  // ── Viandes & Poissons ──
  { id: "p048", name: "Escalopes de poulet x2", brand: "Origine", category: "Viandes & Poissons", unit: "250g", image: "", ean: "3266740300001" },
  { id: "p049", name: "Steak haché 5% MG Charal x4", brand: "Charal", category: "Viandes & Poissons", unit: "4x100g", image: "", ean: "3181238938505" },
  { id: "p050", name: "Jambon blanc Herta Le Bon Paris x4", brand: "Herta", category: "Viandes & Poissons", unit: "4 tranches", image: "", ean: "7613036502054" },
  { id: "p051", name: "Saumon fumé Labeyrie x4 tranches", brand: "Labeyrie", category: "Viandes & Poissons", unit: "4 tranches", image: "", ean: "3033610045724" },
  { id: "p052", name: "Lardons fumés Herta 2x100g", brand: "Herta", category: "Viandes & Poissons", unit: "200g", image: "", ean: "7613036507035" },
  { id: "p048b", name: "Knacki Original Herta x10", brand: "Herta", category: "Viandes & Poissons", unit: "350g", image: "", ean: "7613036506717" },
  { id: "p049b", name: "Filets de cabillaud surgelés x4", brand: "Findus", category: "Viandes & Poissons", unit: "400g", image: "", ean: "7613034269508" },

  // ── Boulangerie & Viennoiseries ──
  { id: "p053", name: "Pain de mie Harry's American Sandwich 500g", brand: "Harry's", category: "Boulangerie & Viennoiseries", unit: "500g", image: "", ean: "3228857000507" },
  { id: "p054", name: "Baguette de tradition", brand: "Artisan", category: "Boulangerie & Viennoiseries", unit: "pièce", image: "", ean: "2500115800012" },
  { id: "p055", name: "Croissants pur beurre x6", brand: "Artisan", category: "Boulangerie & Viennoiseries", unit: "6 pièces", image: "", ean: "3247775071089" },
  { id: "p056", name: "Brioche tressée Pasquier 500g", brand: "Pasquier", category: "Boulangerie & Viennoiseries", unit: "500g", image: "", ean: "3281580065014" },
  { id: "p053b", name: "Pain complet Harry's 500g", brand: "Harry's", category: "Boulangerie & Viennoiseries", unit: "500g", image: "", ean: "3228857007704" },
  { id: "p054b", name: "Pains au chocolat x8", brand: "Artisan", category: "Boulangerie & Viennoiseries", unit: "8 pièces", image: "", ean: "3247775071072" },

  // ── Snacks & Confiserie ──
  { id: "p057", name: "Chips Lay's Nature 150g", brand: "Lay's", category: "Snacks & Confiserie", unit: "150g", image: "", ean: "8710398527905" },
  { id: "p058", name: "Nutella 400g", brand: "Ferrero", category: "Snacks & Confiserie", unit: "400g", image: "", ean: "3017620422003" },
  { id: "p059", name: "Kinder Bueno x6 barres", brand: "Ferrero", category: "Snacks & Confiserie", unit: "6 barres", image: "", ean: "8000500062883" },
  { id: "p060", name: "M&M's Peanut 330g", brand: "Mars", category: "Snacks & Confiserie", unit: "330g", image: "", ean: "5000159461122" },
  { id: "p061", name: "BN Chocolat 295g", brand: "BN", category: "Snacks & Confiserie", unit: "295g", image: "", ean: "7622210713100" },
  { id: "p057b", name: "Pringles Original 175g", brand: "Pringles", category: "Snacks & Confiserie", unit: "175g", image: "", ean: "5000184268727" },
  { id: "p058b", name: "Milka Noisettes 100g", brand: "Milka", category: "Snacks & Confiserie", unit: "100g", image: "", ean: "7622210449571" },
  { id: "p059b", name: "Granola Cookies Chocolat 184g", brand: "LU", category: "Snacks & Confiserie", unit: "184g", image: "", ean: "7622210102706" },
  { id: "p060b", name: "Haribo Orangina Pik 250g", brand: "Haribo", category: "Snacks & Confiserie", unit: "250g", image: "", ean: "4030085057366" },
  { id: "p061b", name: "Twix x6 barres", brand: "Mars", category: "Snacks & Confiserie", unit: "6 barres", image: "", ean: "5000159568327" },

  // ── Petit-déjeuner ──
  { id: "p062", name: "Céréales Chocapic 430g", brand: "Nestlé", category: "Petit-déjeuner", unit: "430g", image: "", ean: "7613034626844" },
  { id: "p063", name: "Confiture fraises Bonne Maman 370g", brand: "Bonne Maman", category: "Petit-déjeuner", unit: "370g", image: "", ean: "3045320094602" },
  { id: "p064", name: "Café moulu Carte Noire Classique 250g", brand: "Carte Noire", category: "Petit-déjeuner", unit: "250g", image: "", ean: "7622300428228" },
  { id: "p065", name: "Thé Earl Grey Lipton x25 sachets", brand: "Lipton", category: "Petit-déjeuner", unit: "25 sachets", image: "", ean: "8722700055525" },
  { id: "p066", name: "Miel de fleurs Lune de Miel 500g", brand: "Lune de Miel", category: "Petit-déjeuner", unit: "500g", image: "", ean: "3088543600017" },
  { id: "p062b", name: "Céréales Trésor Chocolat Kellogg's 400g", brand: "Kellogg's", category: "Petit-déjeuner", unit: "400g", image: "", ean: "5000159353928" },
  { id: "p063b", name: "Capsules L'Or Espresso Ristretto x10", brand: "L'Or", category: "Petit-déjeuner", unit: "10 capsules", image: "", ean: "8761000070421" },
  { id: "p064b", name: "Spéculoos Lotus Biscoff 250g", brand: "Lotus", category: "Petit-déjeuner", unit: "250g", image: "", ean: "5410032000764" },
  { id: "p065b", name: "Biscottes Heudebert 34 tranches", brand: "Lu", category: "Petit-déjeuner", unit: "300g", image: "", ean: "7622210088960" },

  // ── Entretien ménager ──
  { id: "p067", name: "Lessive liquide Skip Active Clean 1.4L", brand: "Skip", category: "Entretien ménager", unit: "1.4L", image: "", ean: "8717163770467" },
  { id: "p068", name: "Liquide vaisselle Paic Citron 750ml", brand: "Paic", category: "Entretien ménager", unit: "750ml", image: "", ean: "3015810770750" },
  { id: "p069", name: "Éponges Scotch-Brite x3", brand: "Scotch-Brite", category: "Entretien ménager", unit: "3 pièces", image: "", ean: "4046719195367" },
  { id: "p070", name: "Sacs poubelle Handy Bag 50L x20", brand: "Handy Bag", category: "Entretien ménager", unit: "20 sacs", image: "", ean: "3400300152001" },
  { id: "p067b", name: "Nettoyant multi-surfaces Mr Propre 750ml", brand: "Mr Propre", category: "Entretien ménager", unit: "750ml", image: "", ean: "8001090966705" },
  { id: "p068b", name: "Javel La Croix 2L", brand: "La Croix", category: "Entretien ménager", unit: "2L", image: "", ean: "3160090011020" },
  { id: "p069b", name: "Tablettes lave-vaisselle Finish All-in-1 x26", brand: "Finish", category: "Entretien ménager", unit: "26 tablettes", image: "", ean: "5059900013827" },

  // ── Bébé & Enfant ──
  { id: "p071", name: "Couches Pampers Baby-Dry T4 x86", brand: "Pampers", category: "Bébé & Enfant", unit: "86 couches", image: "", ean: "8001090971242" },
  { id: "p072", name: "Petits pots Blédina légumes poulet 2x200g", brand: "Blédina", category: "Bébé & Enfant", unit: "2x200g", image: "", ean: "3263970122130" },
  { id: "p073", name: "Lait infantile Gallia 2ème âge 800g", brand: "Gallia", category: "Bébé & Enfant", unit: "800g", image: "", ean: "3263970242043" },
  { id: "p074", name: "Compotes pomme Pom'Potes x4", brand: "Materne", category: "Bébé & Enfant", unit: "4x90g", image: "", ean: "3175680016119" },

  // ── Alcools & Vins ──
  { id: "p075", name: "Bière Heineken 33cl x6", brand: "Heineken", category: "Alcools & Vins", unit: "6x33cl", image: "", ean: "8714980000786" },
  { id: "p076", name: "Bière 1664 Blonde 33cl x6", brand: "Kronenbourg", category: "Alcools & Vins", unit: "6x33cl", image: "", ean: "3450013500111" },
  { id: "p077", name: "Bière Leffe Blonde 33cl x6", brand: "Leffe", category: "Alcools & Vins", unit: "6x33cl", image: "", ean: "5089969018137" },
  { id: "p078", name: "Champagne Moët & Chandon Brut 75cl", brand: "Moët & Chandon", category: "Alcools & Vins", unit: "75cl", image: "", ean: "3515584000053" },
  { id: "p079", name: "Whisky Jack Daniel's 70cl", brand: "Jack Daniel's", category: "Alcools & Vins", unit: "70cl", image: "", ean: "5082210154020" },
];

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
  // New products
  "p011b": 0.39, "p012b": 1.89, "p013b": 1.79, "p014b": 1.59, "p015b": 1.69,
  "p016b": 1.19, "p017b": 2.29, "p018b": 2.49, "p019b": 2.49, "p020b": 1.49,
  "p021b": 1.29, "p022b": 3.29, "p023b": 1.49, "p024b": 2.89, "p025b": 2.69,
  "p026b": 2.19, "p027b": 2.29, "p028b": 1.49, "p029b": 1.79, "p030b": 2.69,
  "p032b": 2.79, "p033b": 4.49, "p034b": 1.99, "p035b": 2.29,
  "p037b": 3.79, "p038b": 2.99, "p039b": 4.99,
  "p041b": 1.99, "p042b": 0.89, "p043b": 1.49, "p044b": 2.29, "p045b": 1.79,
  "p048b": 3.29, "p049b": 5.49,
  "p053b": 1.89, "p054b": 2.99,
  "p057b": 2.49, "p058b": 1.39, "p059b": 1.99, "p060b": 1.89, "p061b": 3.29,
  "p062b": 3.69, "p063b": 3.49, "p064b": 2.19, "p065b": 1.79,
  "p067b": 2.99, "p068b": 1.49, "p069b": 7.49,
  p071: 22.99, p072: 2.29, p073: 14.99, p074: 2.49,
  p075: 5.99, p076: 5.49, p077: 6.99, p078: 34.99, p079: 24.99,
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
  let s = 42;
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
