"use client";

import { useState } from "react";
import { PostalCodeLocation, searchPostalCodes, parisPostalCodes } from "@/data/postalCodes";
import { MapPin, Search, Navigation } from "lucide-react";

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
      setResults(searchPostalCodes(value));
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
    <div className="flex-1 flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Navigation className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Trouvez les meilleurs prix
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-md mx-auto">
            Entrez votre code postal pour decouvrir les supermarches les moins chers pres de chez vous
          </p>
        </div>

        <div className="relative mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Code postal ou ville..."
              className="w-full pl-12 pr-5 py-4 text-base border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 transition-all bg-white shadow-sm placeholder:text-slate-300"
              autoFocus
            />
          </div>

          {showResults && results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-10 overflow-hidden">
              {results.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => handleSelect(loc)}
                  className="w-full text-left px-5 py-3.5 hover:bg-emerald-50 transition-colors border-b border-slate-50 last:border-b-0 flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800">{loc.code}</span>
                    <span className="text-slate-300 mx-2">·</span>
                    <span className="text-slate-600">{loc.city}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {showResults && results.length === 0 && query.trim().length >= 2 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-10 p-6 text-center text-slate-500">
              Aucun resultat. Essayez un code postal parisien (75001-75020).
            </div>
          )}
        </div>

        <div>
          <p className="text-xs text-slate-400 text-center mb-3 font-medium uppercase tracking-wider">
            Acces rapide
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {parisPostalCodes.slice(0, 10).map((loc) => (
              <button
                key={loc.code}
                onClick={() => handleSelect(loc)}
                className="group px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all shadow-sm"
              >
                <span className="font-semibold">{loc.code}</span>
                <span className="text-slate-400 group-hover:text-emerald-500 ml-1">{loc.city}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
