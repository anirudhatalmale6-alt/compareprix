"use client";

import { useState, useMemo } from "react";
import { PostalCodeLocation } from "@/data/postalCodes";
import { ShoppingListItem, StoreComparison } from "@/types";
import { getStoresNearby } from "@/data/stores";
import { getProductPrice } from "@/data/products";
import { storeChains, getChain } from "@/data/chains";
import { ArrowLeft, ChevronDown, ChevronUp, Store, Package, Trophy, Sparkles, AlertCircle, Check } from "lucide-react";
import ProductImage from "@/components/ProductImage";

interface ComparisonStepProps {
  location: PostalCodeLocation;
  shoppingList: ShoppingListItem[];
  onBack: () => void;
}

type ViewMode = "total" | "detail";

export default function ComparisonStep({ location, shoppingList, onBack }: ComparisonStepProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("total");
  const [expandedChain, setExpandedChain] = useState<string | null>(null);

  const nearbyStores = useMemo(() => getStoresNearby(location.lat, location.lng, 10), [location]);

  const comparisons = useMemo(() => {
    const chainMap = new Map<string, StoreComparison>();
    for (const store of nearbyStores) {
      const chain = getChain(store.chainId);
      if (!chain || chainMap.has(store.chainId)) continue;
      const items = shoppingList.map((listItem) => {
        const priceData = getProductPrice(listItem.product.id, store.chainId);
        const available = priceData?.available ?? false;
        const price = available ? (priceData?.price ?? 0) : 0;
        return { product: listItem.product, quantity: listItem.quantity, price: available ? price : null, available };
      });
      const total = items.reduce((sum, item) => sum + (item.price ? item.price * item.quantity : 0), 0);
      const availableCount = items.filter((i) => i.available).length;
      const missingCount = items.filter((i) => !i.available).length;
      chainMap.set(store.chainId, { store, chain, items, total, availableCount, missingCount });
    }
    return Array.from(chainMap.values()).sort((a, b) => {
      if (a.missingCount !== b.missingCount) return a.missingCount - b.missingCount;
      return a.total - b.total;
    });
  }, [nearbyStores, shoppingList]);

  const cheapestTotal = comparisons.length > 0 ? comparisons[0].total : 0;
  const mostExpensiveTotal = comparisons.length > 0 ? comparisons[comparisons.length - 1].total : 0;

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

  const optimizedTotal = bestPerProduct.reduce((sum, item) => sum + (item.bestPrice ? item.bestPrice * item.quantity : 0), 0);
  const savings = mostExpensiveTotal - cheapestTotal;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Modifier ma liste
        </button>
        <div className="flex bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <TabButton active={viewMode === "total"} onClick={() => setViewMode("total")} icon={Store} label="Par enseigne" />
          <TabButton active={viewMode === "detail"} onClick={() => setViewMode("detail")} icon={Package} label="Par produit" />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl p-5 shadow-lg shadow-emerald-200">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-emerald-200" />
            <span className="text-emerald-100 text-xs font-semibold uppercase tracking-wider">Meilleure enseigne</span>
          </div>
          <div className="text-2xl font-extrabold">{comparisons[0]?.chain.name || "-"}</div>
          <div className="text-xl font-bold mt-1 text-emerald-100">{cheapestTotal.toFixed(2)} EUR</div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Panier optimise</span>
          </div>
          <div className="text-2xl font-extrabold text-amber-600">{optimizedTotal.toFixed(2)} EUR</div>
          <p className="text-xs text-slate-400 mt-1">
            Economie max: <span className="font-semibold text-emerald-600">{(cheapestTotal - optimizedTotal).toFixed(2)} EUR</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Store className="w-4 h-4 text-blue-500" />
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Enseignes</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-800">{comparisons.length}</div>
          <p className="text-xs text-slate-400 mt-1">
            Economie vs plus cher: <span className="font-semibold text-emerald-600">{savings.toFixed(2)} EUR</span>
          </p>
        </div>
      </div>

      {viewMode === "total" ? (
        <div className="space-y-3">
          {comparisons.map((comp, index) => {
            const diff = comp.total - cheapestTotal;
            const isExpanded = expandedChain === comp.chain.id;
            const isCheapest = index === 0;
            return (
              <div key={comp.chain.id} className={`bg-white rounded-2xl border overflow-hidden transition-all shadow-sm ${
                isCheapest ? "border-emerald-200 ring-2 ring-emerald-100" : "border-slate-200"
              }`}>
                <button onClick={() => setExpandedChain(isExpanded ? null : comp.chain.id)} className="w-full text-left">
                  <div className="flex items-center gap-4 p-4 sm:p-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold ${
                      isCheapest ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-500"
                    }`}>
                      {index + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-slate-800">{comp.chain.name}</span>
                        {isCheapest && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                            Moins cher
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 truncate">{comp.store.address}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                          <Check className="w-3 h-3" /> {comp.availableCount}
                        </span>
                        {comp.missingCount > 0 && (
                          <span className="flex items-center gap-1 text-[11px] text-red-400 font-medium">
                            <AlertCircle className="w-3 h-3" /> {comp.missingCount}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`text-xl font-extrabold ${isCheapest ? "text-emerald-600" : "text-slate-800"}`}>
                        {comp.total.toFixed(2)} EUR
                      </div>
                      {diff > 0 && <p className="text-xs text-red-400 font-semibold mt-0.5">+{diff.toFixed(2)} EUR</p>}
                    </div>

                    <div className="text-slate-300 ml-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/50">
                    <div className="divide-y divide-slate-100">
                      {comp.items.map((item) => (
                        <div key={item.product.id} className="flex items-center gap-3 px-5 py-2.5 text-sm">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                            <ProductImage src={item.product.image} alt={item.product.name} category={item.product.category} size="sm" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-slate-700 text-xs font-medium">{item.product.name}</span>
                            <span className="text-slate-300 text-xs ml-1.5">x{item.quantity}</span>
                          </div>
                          {item.available ? (
                            <span className="text-xs font-bold text-slate-700">{(item.price! * item.quantity).toFixed(2)} EUR</span>
                          ) : (
                            <span className="text-[10px] text-red-400 font-semibold bg-red-50 px-2 py-0.5 rounded-full">Indisponible</span>
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
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-800">Meilleur prix par produit</h3>
            <p className="text-xs text-slate-400 mt-0.5">Le meilleur prix de chaque article est en surbrillance</p>
          </div>

          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 sticky left-0 bg-white">Produit</th>
                  <th className="text-center px-2 py-3 text-xs font-semibold text-slate-400">Qte</th>
                  {comparisons.map((comp) => (
                    <th key={comp.chain.id} className="text-center px-3 py-3 text-[10px] font-bold text-slate-500 whitespace-nowrap uppercase tracking-wider">
                      {comp.chain.name}
                    </th>
                  ))}
                  <th className="text-center px-4 py-3 text-xs font-bold text-emerald-700 bg-emerald-50 whitespace-nowrap">Meilleur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {bestPerProduct.map((bpp) => (
                  <tr key={bpp.product.id} className="hover:bg-slate-50/50">
                    <td className="px-4 py-2.5 sticky left-0 bg-white">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                          <ProductImage src={bpp.product.image} alt={bpp.product.name} category={bpp.product.category} size="sm" />
                        </div>
                        <span className="text-xs font-medium text-slate-700 whitespace-nowrap">{bpp.product.name}</span>
                      </div>
                    </td>
                    <td className="px-2 py-2.5 text-xs text-slate-400 text-center">{bpp.quantity}</td>
                    {comparisons.map((comp) => {
                      const item = comp.items.find((i) => i.product.id === bpp.product.id);
                      const isBest = comp.chain.id === bpp.bestChainId;
                      return (
                        <td key={comp.chain.id} className={`px-3 py-2.5 text-center text-xs ${
                          isBest ? "bg-emerald-50 font-bold text-emerald-700" : "text-slate-500"
                        }`}>
                          {item?.available ? item.price!.toFixed(2) : <span className="text-slate-300">-</span>}
                        </td>
                      );
                    })}
                    <td className="px-4 py-2.5 text-center bg-emerald-50">
                      <span className="text-xs font-bold text-emerald-700">{bpp.bestPrice ? bpp.bestPrice.toFixed(2) : "-"}</span>
                      <span className="block text-[9px] text-emerald-500">{bpp.bestChain?.name}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-slate-200">
                  <td className="px-4 py-3 text-xs font-bold text-slate-700" colSpan={2}>Total</td>
                  {comparisons.map((comp) => (
                    <td key={comp.chain.id} className="px-3 py-3 text-center text-xs font-bold text-slate-700">
                      {comp.total.toFixed(2)}
                    </td>
                  ))}
                  <td className="px-4 py-3 text-center font-bold text-emerald-700 bg-emerald-50 text-xs">
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

function TabButton({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: React.ComponentType<{className?: string}>; label: string }) {
  return (
    <button onClick={onClick} className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold transition-colors ${
      active ? "bg-emerald-500 text-white" : "text-slate-500 hover:bg-slate-50"
    }`}>
      <Icon className="w-3.5 h-3.5" />
      {label}
    </button>
  );
}
