"use client";

import { useState } from "react";
import { Product, ShoppingListItem } from "@/types";
import { products, categories, searchProducts, getProductsByCategory, getCheapestChain } from "@/data/products";
import { getChain } from "@/data/chains";
import { Search, Plus, Minus, X, ShoppingBag, Trash2, BarChart3 } from "lucide-react";
import ProductImage from "@/components/ProductImage";

interface ShoppingListStepProps {
  shoppingList: ShoppingListItem[];
  setShoppingList: (list: ShoppingListItem[]) => void;
  onCompare: () => void;
}

export default function ShoppingListStep({ shoppingList, setShoppingList, onCompare }: ShoppingListStepProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayProducts = searchQuery.trim()
    ? searchProducts(searchQuery)
    : selectedCategory
    ? getProductsByCategory(selectedCategory)
    : products.slice(0, 24);

  function addToList(product: Product) {
    const existing = shoppingList.find((item) => item.product.id === product.id);
    if (existing) {
      setShoppingList(
        shoppingList.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setShoppingList([...shoppingList, { product, quantity: 1 }]);
    }
  }

  function removeFromList(productId: string) {
    setShoppingList(shoppingList.filter((item) => item.product.id !== productId));
  }

  function updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) { removeFromList(productId); return; }
    setShoppingList(
      shoppingList.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function getItemQuantity(productId: string): number {
    return shoppingList.find((i) => i.product.id === productId)?.quantity ?? 0;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Catalog */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-100">
              <div className="relative mb-4">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); if (e.target.value) setSelectedCategory(null); }}
                  placeholder="Rechercher un produit..."
                  className="w-full pl-10 pr-10 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 text-sm bg-slate-50 transition-all"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors">
                    <X className="w-3 h-3 text-slate-500" />
                  </button>
                )}
              </div>

              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                <CategoryPill label="Tout" active={!selectedCategory && !searchQuery} onClick={() => { setSelectedCategory(null); setSearchQuery(""); }} />
                {categories.map((cat) => (
                  <CategoryPill key={cat} label={cat} active={selectedCategory === cat} onClick={() => { setSelectedCategory(cat); setSearchQuery(""); }} />
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="p-4 sm:p-5 max-h-[65vh] overflow-y-auto scrollbar-thin">
              {displayProducts.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Aucun produit trouve</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {displayProducts.map((product) => {
                    const qty = getItemQuantity(product.id);
                    const cheapest = getCheapestChain(product.id);
                    const chain = cheapest ? getChain(cheapest.chainId) : null;
                    return (
                      <div
                        key={product.id}
                        className={`relative bg-white border rounded-xl p-3 transition-all hover:shadow-md ${
                          qty > 0 ? "border-emerald-300 ring-1 ring-emerald-100" : "border-slate-150 hover:border-slate-300"
                        }`}
                      >
                        {qty > 0 && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-md z-10">
                            {qty}
                          </div>
                        )}

                        <div className="w-full aspect-square bg-slate-50 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                          <ProductImage src={product.image} alt={product.name} category={product.category} />
                        </div>

                        <div className="mb-2">
                          <h3 className="text-xs font-semibold text-slate-800 leading-tight line-clamp-2 mb-0.5">
                            {product.name}
                          </h3>
                          <p className="text-[10px] text-slate-400">{product.brand} · {product.unit}</p>
                        </div>

                        {cheapest && chain && (
                          <div className="mb-2">
                            <span className="text-sm font-bold text-emerald-600">{cheapest.price.toFixed(2)} EUR</span>
                            <span className="text-[10px] text-slate-400 ml-1">{chain.name}</span>
                          </div>
                        )}

                        {qty === 0 ? (
                          <button
                            onClick={() => addToList(product)}
                            className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                          >
                            <Plus className="w-3.5 h-3.5" /> Ajouter
                          </button>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <button onClick={() => updateQuantity(product.id, qty - 1)} className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
                              <Minus className="w-3.5 h-3.5 text-slate-600" />
                            </button>
                            <span className="w-6 text-center font-bold text-sm text-slate-800">{qty}</span>
                            <button onClick={() => updateQuantity(product.id, qty + 1)} className="w-8 h-8 rounded-lg bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                              <Plus className="w-3.5 h-3.5 text-white" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Shopping List Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-20">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-amber-600" />
                </div>
                <h2 className="text-sm font-bold text-slate-800">Ma liste</h2>
              </div>
              {shoppingList.length > 0 && (
                <span className="bg-emerald-100 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-bold">
                  {shoppingList.length} article{shoppingList.length > 1 ? "s" : ""}
                </span>
              )}
            </div>

            {shoppingList.length === 0 ? (
              <div className="p-8 text-center">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-6 h-6 text-slate-300" />
                </div>
                <p className="text-sm text-slate-400 font-medium">Liste vide</p>
                <p className="text-xs text-slate-300 mt-1">Ajoutez des produits depuis le catalogue</p>
              </div>
            ) : (
              <>
                <div className="divide-y divide-slate-50 max-h-[45vh] overflow-y-auto scrollbar-thin">
                  {shoppingList.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-2.5 px-4 py-3 hover:bg-slate-50 transition-colors">
                      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                        <ProductImage src={item.product.image} alt={item.product.name} category={item.product.category} size="sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-700 truncate">{item.product.name}</p>
                        <p className="text-[10px] text-slate-400">{item.product.unit}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-6 h-6 rounded-md bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
                          <Minus className="w-3 h-3 text-slate-500" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-slate-700">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-6 h-6 rounded-md bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center transition-colors">
                          <Plus className="w-3 h-3 text-emerald-600" />
                        </button>
                      </div>
                      <button onClick={() => removeFromList(item.product.id)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-slate-100 space-y-3">
                  <button onClick={() => setShoppingList([])} className="w-full flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-red-500 transition-colors py-1">
                    <Trash2 className="w-3 h-3" /> Vider la liste
                  </button>
                  <button
                    onClick={onCompare}
                    className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 active:scale-[0.98]"
                  >
                    <BarChart3 className="w-4 h-4" />
                    Comparer les prix
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
        active
          ? "bg-emerald-500 text-white shadow-sm"
          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
      }`}
    >
      {label}
    </button>
  );
}
