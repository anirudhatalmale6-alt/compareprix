"use client";

import { PostalCodeLocation } from "@/data/postalCodes";
import { ShoppingCart, MapPin, ChevronRight, List } from "lucide-react";

interface HeaderProps {
  step: string;
  location: PostalCodeLocation | null;
  itemCount: number;
  onChangeLocation: () => void;
}

const steps = [
  { key: "location", label: "Localisation", icon: MapPin },
  { key: "shopping", label: "Liste de courses", icon: List },
  { key: "comparison", label: "Comparaison", icon: ShoppingCart },
];

export default function Header({ step, location, itemCount, onChangeLocation }: HeaderProps) {
  const stepIndex = steps.findIndex((s) => s.key === step);

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight tracking-tight">
                ComparePrix
              </h1>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
                Comparateur de supermarches
              </p>
            </div>
          </div>

          {step !== "location" && (
            <nav className="hidden md:flex items-center gap-1">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isCurrent = s.key === step;
                const isDone = i < stepIndex;
                return (
                  <div key={s.key} className="flex items-center">
                    {i > 0 && <ChevronRight className="w-4 h-4 text-slate-300 mx-1" />}
                    <div
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                        isCurrent
                          ? "bg-emerald-50 text-emerald-700"
                          : isDone
                          ? "text-emerald-600"
                          : "text-slate-400"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{s.label}</span>
                      {isDone && (
                        <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </nav>
          )}

          <div className="flex items-center gap-2">
            {location && step !== "location" && (
              <button
                onClick={onChangeLocation}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>{location.city}</span>
              </button>
            )}
            {itemCount > 0 && step !== "location" && (
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg text-xs font-semibold">
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>{itemCount}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
