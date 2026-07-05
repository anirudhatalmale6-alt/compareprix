"use client";

import { useState } from "react";
import { PostalCodeLocation, searchPostalCodes, parisPostalCodes } from "@/data/postalCodes";

interface LocationStepProps {
  onLocationSelected: (location: PostalCodeLocation) => void;
}

export default function LocationStep({ onLocationSelected }: LocationStepProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PostalCodeLocation[]>([]);
  const [showResults, setShowResults] = useState(false);

  function handleSearch(value: string) {
    setQuery(value);
    if (value.trim().length >= 2) {
      const found = searchPostalCodes(value);
      setResults(found);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }

  function handleSelect(loc: PostalCodeLocation) {
    setQuery(`${loc.code} - ${loc.city}`);
    setShowResults(false);
    onLocationSelected(loc);
  }

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <span className="text-6xl block mb-4">📍</span>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Ou faites-vous vos courses ?
          </h2>
          <p className="text-slate-500 text-lg">
            Entrez votre code postal pour trouver les supermarches pres de chez vous
          </p>
        </div>

        <div className="relative">
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Code postal ou ville (ex: 75011, Bastille...)"
              className="w-full px-5 py-4 text-lg border-2 border-slate-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all bg-white shadow-sm"
              autoFocus
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
          </div>

          {showResults && results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-10 overflow-hidden">
              {results.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => handleSelect(loc)}
                  className="w-full text-left px-5 py-3 hover:bg-green-50 transition-colors border-b border-slate-100 last:border-b-0 flex items-center gap-3"
                >
                  <span className="text-green-600 text-lg">📍</span>
                  <div>
                    <span className="font-semibold text-slate-800">{loc.code}</span>
                    <span className="text-slate-400 mx-2">-</span>
                    <span className="text-slate-600">{loc.city}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {showResults && results.length === 0 && query.trim().length >= 2 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-10 p-5 text-center text-slate-500">
              Aucun resultat pour &quot;{query}&quot;. Essayez un code postal parisien (75001-75020).
            </div>
          )}
        </div>

        <div className="mt-8">
          <p className="text-sm text-slate-400 text-center mb-3">Zones populaires :</p>
          <div className="flex flex-wrap justify-center gap-2">
            {parisPostalCodes.slice(0, 8).map((loc) => (
              <button
                key={loc.code}
                onClick={() => handleSelect(loc)}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:bg-green-50 hover:border-green-300 transition-colors shadow-sm"
              >
                {loc.code} {loc.city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
