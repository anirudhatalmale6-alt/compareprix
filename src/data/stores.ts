import { Store } from "@/types";

export const stores: Store[] = [
  // Carrefour
  { id: "car-1", chainId: "carrefour", name: "Carrefour City Bastille", address: "6 Rue de la Roquette, 75011 Paris", postalCode: "75011", lat: 48.8534, lng: 2.3706 },
  { id: "car-2", chainId: "carrefour", name: "Carrefour Market Nation", address: "30 Rue de Montreuil, 75011 Paris", postalCode: "75011", lat: 48.8495, lng: 2.3891 },
  { id: "car-3", chainId: "carrefour", name: "Carrefour Express Châtelet", address: "12 Rue de Rivoli, 75004 Paris", postalCode: "75004", lat: 48.8566, lng: 2.3477 },
  { id: "car-4", chainId: "carrefour", name: "Carrefour City Montmartre", address: "5 Rue des Abbesses, 75018 Paris", postalCode: "75018", lat: 48.8843, lng: 2.3384 },

  // Leclerc
  { id: "lec-1", chainId: "leclerc", name: "E.Leclerc Paris Porte d'Auteuil", address: "1 Rue d'Auteuil, 75016 Paris", postalCode: "75016", lat: 48.8477, lng: 2.2576 },
  { id: "lec-2", chainId: "leclerc", name: "E.Leclerc Levallois", address: "106 Rue du Président Wilson, 92300 Levallois-Perret", postalCode: "92300", lat: 48.8946, lng: 2.2873 },
  { id: "lec-3", chainId: "leclerc", name: "E.Leclerc Ivry", address: "3 Quai Marcel Boyer, 94200 Ivry-sur-Seine", postalCode: "94200", lat: 48.8152, lng: 2.3875 },

  // Lidl
  { id: "lid-1", chainId: "lidl", name: "Lidl Paris Voltaire", address: "155 Boulevard Voltaire, 75011 Paris", postalCode: "75011", lat: 48.8597, lng: 2.3818 },
  { id: "lid-2", chainId: "lidl", name: "Lidl Paris Belleville", address: "70 Boulevard de Belleville, 75020 Paris", postalCode: "75020", lat: 48.8695, lng: 2.3824 },
  { id: "lid-3", chainId: "lidl", name: "Lidl Clichy", address: "98 Boulevard Jean Jaurès, 92110 Clichy", postalCode: "92110", lat: 48.9037, lng: 2.3053 },

  // Aldi
  { id: "ald-1", chainId: "aldi", name: "Aldi Paris La Chapelle", address: "52 Rue Marx Dormoy, 75018 Paris", postalCode: "75018", lat: 48.8903, lng: 2.3596 },
  { id: "ald-2", chainId: "aldi", name: "Aldi Saint-Ouen", address: "34 Avenue Gabriel Péri, 93400 Saint-Ouen", postalCode: "93400", lat: 48.9067, lng: 2.3310 },

  // Monoprix
  { id: "mon-1", chainId: "monoprix", name: "Monoprix Opéra", address: "52 Avenue de l'Opéra, 75002 Paris", postalCode: "75002", lat: 48.8706, lng: 2.3325 },
  { id: "mon-2", chainId: "monoprix", name: "Monoprix République", address: "31 Place de la République, 75003 Paris", postalCode: "75003", lat: 48.8674, lng: 2.3637 },
  { id: "mon-3", chainId: "monoprix", name: "Monoprix Saint-Germain", address: "50 Rue de Rennes, 75006 Paris", postalCode: "75006", lat: 48.8505, lng: 2.3289 },

  // Franprix
  { id: "fra-1", chainId: "franprix", name: "Franprix Bastille", address: "22 Rue du Faubourg Saint-Antoine, 75012 Paris", postalCode: "75012", lat: 48.8529, lng: 2.3719 },
  { id: "fra-2", chainId: "franprix", name: "Franprix Oberkampf", address: "95 Rue Oberkampf, 75011 Paris", postalCode: "75011", lat: 48.8651, lng: 2.3774 },
  { id: "fra-3", chainId: "franprix", name: "Franprix Marais", address: "35 Rue des Archives, 75004 Paris", postalCode: "75004", lat: 48.8590, lng: 2.3555 },

  // Intermarché
  { id: "int-1", chainId: "intermarche", name: "Intermarché Charonne", address: "88 Rue de Charonne, 75011 Paris", postalCode: "75011", lat: 48.8556, lng: 2.3835 },
  { id: "int-2", chainId: "intermarche", name: "Intermarché Ménilmontant", address: "15 Rue de Ménilmontant, 75020 Paris", postalCode: "75020", lat: 48.8648, lng: 2.3868 },

  // Casino
  { id: "cas-1", chainId: "casino", name: "Casino Supermarché Daumesnil", address: "200 Avenue Daumesnil, 75012 Paris", postalCode: "75012", lat: 48.8401, lng: 2.3902 },
  { id: "cas-2", chainId: "casino", name: "Casino Shop Belleville", address: "42 Rue de Belleville, 75020 Paris", postalCode: "75020", lat: 48.8722, lng: 2.3803 },
];

export function getStoresNearby(lat: number, lng: number, radiusKm: number): Store[] {
  return stores.filter((store) => {
    const dist = haversineDistance(lat, lng, store.lat, store.lng);
    return dist <= radiusKm;
  });
}

export function haversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
