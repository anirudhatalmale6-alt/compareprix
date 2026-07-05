export interface PostalCodeLocation {
  code: string;
  city: string;
  lat: number;
  lng: number;
}

export const parisPostalCodes: PostalCodeLocation[] = [
  { code: "75001", city: "Paris 1er", lat: 48.8606, lng: 2.3376 },
  { code: "75002", city: "Paris 2e", lat: 48.8687, lng: 2.3411 },
  { code: "75003", city: "Paris 3e", lat: 48.8637, lng: 2.3615 },
  { code: "75004", city: "Paris 4e", lat: 48.8544, lng: 2.3572 },
  { code: "75005", city: "Paris 5e", lat: 48.8449, lng: 2.3492 },
  { code: "75006", city: "Paris 6e", lat: 48.8495, lng: 2.3328 },
  { code: "75007", city: "Paris 7e", lat: 48.8566, lng: 2.3128 },
  { code: "75008", city: "Paris 8e", lat: 48.8748, lng: 2.3114 },
  { code: "75009", city: "Paris 9e", lat: 48.8768, lng: 2.3378 },
  { code: "75010", city: "Paris 10e", lat: 48.8770, lng: 2.3615 },
  { code: "75011", city: "Paris 11e", lat: 48.8596, lng: 2.3784 },
  { code: "75012", city: "Paris 12e", lat: 48.8413, lng: 2.3876 },
  { code: "75013", city: "Paris 13e", lat: 48.8323, lng: 2.3553 },
  { code: "75014", city: "Paris 14e", lat: 48.8282, lng: 2.3263 },
  { code: "75015", city: "Paris 15e", lat: 48.8419, lng: 2.2987 },
  { code: "75016", city: "Paris 16e", lat: 48.8637, lng: 2.2769 },
  { code: "75017", city: "Paris 17e", lat: 48.8872, lng: 2.3103 },
  { code: "75018", city: "Paris 18e", lat: 48.8919, lng: 2.3441 },
  { code: "75019", city: "Paris 19e", lat: 48.8847, lng: 2.3825 },
  { code: "75020", city: "Paris 20e", lat: 48.8640, lng: 2.3985 },
  { code: "92100", city: "Boulogne-Billancourt", lat: 48.8397, lng: 2.2399 },
  { code: "92110", city: "Clichy", lat: 48.9037, lng: 2.3053 },
  { code: "92120", city: "Montrouge", lat: 48.8174, lng: 2.3198 },
  { code: "92130", city: "Issy-les-Moulineaux", lat: 48.8243, lng: 2.2706 },
  { code: "92200", city: "Neuilly-sur-Seine", lat: 48.8846, lng: 2.2690 },
  { code: "92300", city: "Levallois-Perret", lat: 48.8946, lng: 2.2873 },
  { code: "93100", city: "Montreuil", lat: 48.8613, lng: 2.4433 },
  { code: "93200", city: "Saint-Denis", lat: 48.9362, lng: 2.3574 },
  { code: "93400", city: "Saint-Ouen", lat: 48.9067, lng: 2.3310 },
  { code: "94200", city: "Ivry-sur-Seine", lat: 48.8152, lng: 2.3875 },
  { code: "94300", city: "Vincennes", lat: 48.8475, lng: 2.4384 },
];

export function findPostalCode(code: string): PostalCodeLocation | undefined {
  return parisPostalCodes.find((p) => p.code === code);
}

export function searchPostalCodes(query: string): PostalCodeLocation[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return parisPostalCodes.filter(
    (p) => p.code.includes(q) || p.city.toLowerCase().includes(q)
  );
}
