"use client";

import { useState } from "react";
import { Product, ShoppingListItem } from "@/types";
import { products, categories, searchProducts, getProductsByCategory, getCheapestChain } from "@/data/products";
import { getChain } from "@/data/chains";

interface ShoppingListStepProps {
  shoppingList: ShoppingListItem[];
  setShoppingList: (list: ShoppingListItem[]) => void;
  onCompare: () => void;
}

export default function ShoppingListStep({ shoppingList, setShoppingList, onCompare }: ShoppingListStepProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCatalog, setShowCatalog] = useState(true);

  const displayProducts = searchQuery.trim()
    ? searchProducts(searchQuery)
    : selectedCategory
    ? getProductsByCategory(selectedCategory)
    : products.slice(0, 20);

  function addToList(product: Product) {
    const existing = shoppingList.find((item) => item.product.id === product.id);
    if (existing) {
      setShoppingList(
        shoppingList.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
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
    if (quantity <= 0) {
      removeFromList(productId);
      return;
    }
    setShoppingList(
      shoppingList.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function getItemQuantity(productId: string): number {
    const item = shoppingList.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Catalog */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <span>🏪</span> Catalogue produits
                </h2>
                <button
                  onClick={() => setShowCatalog(!showCatalog)}
                  className="lg:hidden text-sm text-green-600 font-medium"
                >
                  {showCatalog ? "Masquer" : "Afficher"}
                </button>
              </div>

              <div className="relative">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value) setSelectedCategory(null);
                  }}
                  placeholder="Rechercher un produit (ex: lait, coca, nutella...)"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-green-500 text-sm bg-white"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex gap-1.5 mt-3 overflow-x-auto pb-1">
                <button
                  onClick={() => { setSelectedCategory(null); setSearchQuery(""); }}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    !selectedCategory && !searchQuery
                      ? "bg-green-600 text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-green-50"
                  }`}
                >
                  Tout
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setSearchQuery(""); }}
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? "bg-green-600 text-white"
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-green-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {showCatalog && (
              <div className="divide-y divide-slate-100 max-h-[60vh] overflow-y-auto">
                {displayProducts.length === 0 ? (
                  <div className="p-8 text-center text-slate-400">
                    Aucun produit trouve pour &quot;{searchQuery}&quot;
                  </div>
                ) : (
                  displayProducts.map((product) => {
                    const qty = getItemQuantity(product.id);
                    const cheapest = getCheapestChain(product.id);
                    const chain = cheapest ? getChain(cheapest.chainId) : null;

                    return (
                      <div
                        key={product.id}
                        className={`flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors ${
                          qty > 0 ? "bg-green-50/50" : ""
                        }`}
                      >
                        <span className="text-2xl w-8 text-center">{product.image}</span>

                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-slate-800 truncate">
                            {product.name}
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-slate-400">{product.brand}</span>
                            <span className="text-xs text-slate-300">|</span>
                            <span className="text-xs text-slate-400">{product.unit}</span>
                          </div>
                        </div>

                        {cheapest && chain && (
                          <div className="text-right mr-2 hidden sm:block">
                            <div className="text-sm font-bold text-green-700">
                              {cheapest.price.toFixed(2)} EUR
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Moins cher: {chain.name}
                            </div>
                          </div>
                        )}

                        {qty === 0 ? (
                          <button
                            onClick={() => addToList(product)}
                            className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-1"
                          >
                            <span>+</span> Ajouter
                          </button>
                        ) : (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => updateQuantity(product.id, qty - 1)}
                              className="w-7 h-7 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-sm flex items-center justify-center transition-colors"
                            >
                              -
                            </button>
                            <span className="w-7 text-center font-bold text-sm text-green-700">
                              {qty}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, qty + 1)}
                              className="w-7 h-7 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold text-sm flex items-center justify-center transition-colors"
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </div>

        {/* Shopping List Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-4">
            <div className="p-4 border-b border-slate-200 bg-orange-50">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span>🧾</span> Ma liste de courses
                {shoppingList.length > 0 && (
                  <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {shoppingList.length}
                  </span>
                )}
              </h2>
            </div>

            {shoppingList.length === 0 ? (
              <div className="p-8 text-center">
                <span className="text-4xl block mb-2">📝</span>
                <p className="text-slate-400 text-sm">
                  Votre liste est vide. Ajoutez des produits depuis le catalogue !
                </p>
              </div>
            ) : (
              <>
                <div className="divide-y divide-slate-100 max-h-[50vh] overflow-y-auto">
                  {shoppingList.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-2 px-4 py-2.5">
                      <span className="text-lg">{item.product.image}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-slate-700 truncate">
                          {item.product.name}
                        </div>
                        <div className="text-xs text-slate-400">{item.product.unit}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-green-100 hover:bg-green-200 text-green-700 text-xs font-bold flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromList(item.product.id)}
                        className="text-slate-300 hover:text-red-500 transition-colors ml-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-slate-200">
                  <button
                    onClick={() => setShoppingList([])}
                    className="w-full text-sm text-slate-400 hover:text-red-500 mb-3 transition-colors"
                  >
                    Vider la liste
                  </button>
                  <button
                    onClick={onCompare}
                    className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-200"
                  >
                    <span>🔍</span> Comparer les prix ({shoppingList.length} article{shoppingList.length > 1 ? "s" : ""})
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
