"use client";

import { PostalCodeLocation } from "@/data/postalCodes";

interface HeaderProps {
  step: string;
  location: PostalCodeLocation | null;
  itemCount: number;
  onChangeLocation: () => void;
}

export default function Header({ step, location, itemCount, onChangeLocation }: HeaderProps) {
  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛒</span>
            <div>
              <h1 className="text-xl font-bold tracking-tight">ComparePrix</h1>
              <p className="text-green-100 text-xs">Comparez, economisez !</p>
            </div>
          </div>

          {location && step !== "location" && (
            <div className="flex items-center gap-4">
              <button
                onClick={onChangeLocation}
                className="flex items-center gap-1 text-sm bg-green-700 hover:bg-green-800 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span>📍</span>
                <span>{location.city}</span>
              </button>
              {itemCount > 0 && (
                <div className="flex items-center gap-1 bg-orange-500 px-3 py-1.5 rounded-lg text-sm font-medium">
                  <span>🧾</span>
                  <span>{itemCount} article{itemCount > 1 ? "s" : ""}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {step !== "location" && (
          <div className="mt-3 flex gap-1">
            <StepIndicator label="Localisation" number={1} active={step === "location"} done={step !== "location"} />
            <StepIndicator label="Liste de courses" number={2} active={step === "shopping"} done={step === "comparison"} />
            <StepIndicator label="Comparaison" number={3} active={step === "comparison"} done={false} />
          </div>
        )}
      </div>
    </header>
  );
}

function StepIndicator({ label, number, active, done }: { label: string; number: number; active: boolean; done: boolean }) {
  return (
    <div className={`flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
      active ? "bg-white/20 text-white" : done ? "bg-green-700/50 text-green-200" : "bg-green-700/20 text-green-300"
    }`}>
      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
        active ? "bg-white text-green-700" : done ? "bg-green-400 text-green-900" : "bg-green-700/40 text-green-300"
      }`}>
        {done ? "✓" : number}
      </span>
      <span className="hidden sm:inline">{label}</span>
    </div>
  );
}
