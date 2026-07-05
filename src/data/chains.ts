import { StoreChain } from "@/types";

export const storeChains: StoreChain[] = [
  {
    id: "carrefour",
    name: "Carrefour",
    logo: "🔴",
    color: "#004E9A",
  },
  {
    id: "leclerc",
    name: "E.Leclerc",
    logo: "🔵",
    color: "#005BAA",
  },
  {
    id: "lidl",
    name: "Lidl",
    logo: "🟡",
    color: "#0050AA",
  },
  {
    id: "aldi",
    name: "Aldi",
    logo: "🟠",
    color: "#00205C",
  },
  {
    id: "monoprix",
    name: "Monoprix",
    logo: "🟤",
    color: "#C41230",
  },
  {
    id: "franprix",
    name: "Franprix",
    logo: "🔶",
    color: "#E30613",
  },
  {
    id: "intermarche",
    name: "Intermarché",
    logo: "🟥",
    color: "#E2001A",
  },
  {
    id: "casino",
    name: "Casino",
    logo: "🟩",
    color: "#00A651",
  },
];

export function getChain(chainId: string): StoreChain | undefined {
  return storeChains.find((c) => c.id === chainId);
}
