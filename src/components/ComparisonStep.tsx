"use client";

import { useState, useMemo } from "react";
import { PostalCodeLocation } from "@/data/postalCodes";
import { ShoppingListItem, StoreComparison } from "@/types";
import { getStoresNearby } from "@/data/stores";
import { getProductPrice } from "@/data/products";
import { storeChains, getChain } from "@/data/chains";

interface ComparisonStepProps {
  location: PostalCodeLocation;
  shoppingList: ShoppingListItem[];
  onBack: () => void;
}

type ViewMode = "total" | "detail";

export default function ComparisonStep({ location, shoppingList, onBack }: ComparisonStepProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("total");
  const [expandedChain, setExpandedChain] = useState<string | null>(null);

  const nearbyStores = useMemo(
    () => getStoresNearby(location.lat, location.lng, 10),
    [location]
  );

  const comparisons = useMemo(() => {
    const chainMap = new Map<string, StoreComparison>();

    for (const store of nearbyStores) {
      const chain = getChain(store.chainId);
      if (!chain) continue;
      if (chainMap.has(store.chainId)) continue;

      const items = shoppingList.map((listItem) => {
        const priceData = getProductPrice(listItem.product.id, store.chainId);
        const available = priceData?.available ?? false;
        const price = available ? (priceData?.price ?? 0) : 0;

        return {
          product: listItem.product,
          quantity: listItem.quantity,
          price: available ? price : null,
          available,
        };
      });

      const total = items.reduce(
        (sum, item) => sum + (item.price ? item.price * item.quantity : 0),
        0
      );
      const availableCount = items.filter((i) => i.available).length;
      const missingCount = items.filter((i) => !i.available).length;

      chainMap.set(store.chainId, {
        store,
        chain,
        items,
        total,
        availableCount,
        missingCount,
      });
    }

    return Array.from(chainMap.values()).sort((a, b) => {
      if (a.missingCount !== b.missingCount) return a.missingCount - b.missingCount;
      return a.total - b.total;
    });
  }, [nearbyStores, shoppingList]);

  const cheapestTotal = comparisons.length > 0 ? comparisons[0].total : 0;

  const bestPerProduct = useMemo(() => {
    return shoppingList.map((listItem) => {
      let bestChainId = "";
      let bestPrice = Infinity;

      for (const comp of comparisons) {
        const item = comp.items.find((i) => i.product.id === listItem.product.id);
        if (item && item.available && item.price !== null && item.price < bestPrice) {
          bestPrice = item.price;
          bestChainId = comp.chain.id;
        }
      }

      return {
        product: listItem.product,
        quantity: listItem.quantity,
        bestChainId,
        bestPrice: bestPrice === Infinity ? null : bestPrice,
        bestChain: bestChainId ? getChain(bestChainId) : null,
      };
    });
  }, [shoppingList, comparisons]);

  const optimizedTotal = bestPerProduct.reduce(
    (sum, item) => sum + (item.bestPrice ? item.bestPrice * item.quantity : 0),
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm"
        >
          <span>←</span> Modifier ma liste
        </button>

        <div className="flex bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => setViewMode("total")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              viewMode === "total"
                ? "bg-green-600 text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            🏪 Par enseigne
          </button>
          <button
            onClick={() => setViewMode("detail")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              viewMode === "detail"
                ? "bg-green-600 text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            📦 Par produit
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-600 text-white rounded-xl p-4 shadow-lg">
          <div className="text-green-100 text-xs font-medium mb-1">Meilleure enseigne</div>
          <div className="text-2xl font-bold">{comparisons[0]?.chain.name || "-"}</div>
          <div className="text-lg font-semibold mt-1">{cheapestTotal.toFixed(2)} EUR</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div className="text-slate-400 text-xs font-medium mb-1">Panier optimise (multi-enseigne)</div>
          <div className="text-2xl font-bold text-orange-600">{optimizedTotal.toFixed(2)} EUR</div>
          <div className="text-xs text-slate-400 mt-1">
            Economie: {(cheapestTotal - optimizedTotal).toFixed(2)} EUR
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div className="text-slate-400 text-xs font-medium mb-1">Enseignes trouvees</div>
          <div className="text-2xl font-bold text-slate-800">{comparisons.length}</div>
          <div className="text-xs text-slate-400 mt-1">
            dans un rayon de 10km autour de {location.city}
          </div>
        </div>
      </div>

      {viewMode === "total" ? (
        <div className="space-y-3">
          {comparisons.map((comp, index) => {
            const diff = comp.total - cheapestTotal;
            const isExpanded = expandedChain === comp.chain.id;
            const isCheapest = index === 0;

            return (
              <div
                key={comp.chain.id}
                className={`bg-white rounded-xl border shadow-sm overflow-hidden transition-all ${
                  isCheapest ? "border-green-300 ring-2 ring-green-100" : "border-slate-200"
                }`}
              >
                <button
                  onClick={() => setExpandedChain(isExpanded ? null : comp.chain.id)}
                  className="w-full text-left"
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className={`text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center ${
                      isCheapest ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"
                    }`}>
                      {index + 1}
                    </div>

                    <div className="text-2xl">{comp.chain.logo}</div>

                    <div className="flex-1">
                      <div className="font-bold text-slate-800 flex items-center gap-2">
                        {comp.chain.name}
                        {isCheapest && (
                          <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                            MOINS CHER
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {comp.store.address}
                      </div>
                      <div className="text-xs mt-1">
                        <span className="text-green-600">{comp.availableCount} disponible{comp.availableCount > 1 ? "s" : ""}</span>
                        {comp.missingCount > 0 && (
                          <span className="text-red-400 ml-2">{comp.missingCount} indisponible{comp.missingCount > 1 ? "s" : ""}</span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`text-xl font-bold ${isCheapest ? "text-green-600" : "text-slate-800"}`}>
                        {comp.total.toFixed(2)} EUR
                      </div>
                      {diff > 0 && (
                        <div className="text-xs text-red-400 font-medium">
                          +{diff.toFixed(2)} EUR
                        </div>
                      )}
                    </div>

                    <div className="text-slate-300 text-lg">{isExpanded ? "▲" : "▼"}</div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-slate-100">
                    <div className="divide-y divide-slate-50">
                      {comp.items.map((item) => (
                        <div key={item.product.id} className="flex items-center gap-3 px-4 py-2 text-sm">
                          <span className="text-lg">{item.product.image}</span>
                          <div className="flex-1">
                            <span className="text-slate-700">{item.product.name}</span>
                            <span className="text-slate-300 ml-1">x{item.quantity}</span>
                          </div>
                          {item.available ? (
                            <span className="font-semibold text-slate-800">
                              {(item.price! * item.quantity).toFixed(2)} EUR
                            </span>
                          ) : (
                            <span className="text-xs text-red-400 font-medium">Indisponible</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-slate-800">
              Meilleur prix par produit
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Pour chaque produit, l&apos;enseigne la moins chere
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 text-xs text-slate-400 font-medium">
                  <th className="text-left px-4 py-2">Produit</th>
                  <th className="text-left px-4 py-2">Qte</th>
                  {comparisons.map((comp) => (
                    <th key={comp.chain.id} className="text-center px-3 py-2 whitespace-nowrap">
                      <div>{comp.chain.logo}</div>
                      <div className="mt-0.5">{comp.chain.name}</div>
                    </th>
                  ))}
                  <th className="text-center px-4 py-2 bg-green-50">Meilleur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bestPerProduct.map((bpp) => (
                  <tr key={bpp.product.id} className="hover:bg-slate-50">
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        <span>{bpp.product.image}</span>
                        <span className="text-sm text-slate-700 font-medium">{bpp.product.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm text-slate-500 text-center">{bpp.quantity}</td>
                    {comparisons.map((comp) => {
                      const item = comp.items.find((i) => i.product.id === bpp.product.id);
                      const isBest = comp.chain.id === bpp.bestChainId;
                      return (
                        <td
                          key={comp.chain.id}
                          className={`px-3 py-2 text-center text-sm ${
                            isBest ? "bg-green-50 font-bold text-green-700" : "text-slate-600"
                          }`}
                        >
                          {item?.available ? `${item.price!.toFixed(2)}` : "-"}
                        </td>
                      );
                    })}
                    <td className="px-4 py-2 text-center bg-green-50">
                      <div className="text-sm font-bold text-green-700">
                        {bpp.bestPrice ? bpp.bestPrice.toFixed(2) : "-"} EUR
                      </div>
                      <div className="text-[10px] text-green-600">
                        {bpp.bestChain?.name}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-slate-200 font-bold">
                  <td className="px-4 py-3 text-sm" colSpan={2}>Total</td>
                  {comparisons.map((comp) => (
                    <td key={comp.chain.id} className="px-3 py-3 text-center text-sm">
                      {comp.total.toFixed(2)} EUR
                    </td>
                  ))}
                  <td className="px-4 py-3 text-center text-green-700 bg-green-50">
                    {optimizedTotal.toFixed(2)} EUR
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
