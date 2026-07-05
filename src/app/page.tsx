"use client";

import { useState } from "react";
import { PostalCodeLocation } from "@/data/postalCodes";
import { ShoppingListItem } from "@/types";
import LocationStep from "@/components/LocationStep";
import ShoppingListStep from "@/components/ShoppingListStep";
import ComparisonStep from "@/components/ComparisonStep";
import Header from "@/components/Header";

type AppStep = "location" | "shopping" | "comparison";

export default function Home() {
  const [step, setStep] = useState<AppStep>("location");
  const [location, setLocation] = useState<PostalCodeLocation | null>(null);
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);

  function handleLocationSelected(loc: PostalCodeLocation) {
    setLocation(loc);
    setStep("shopping");
  }

  function handleGoToComparison() {
    if (shoppingList.length > 0) {
      setStep("comparison");
    }
  }

  function handleBackToShopping() {
    setStep("shopping");
  }

  function handleBackToLocation() {
    setStep("location");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        step={step}
        location={location}
        itemCount={shoppingList.length}
        onChangeLocation={handleBackToLocation}
      />

      <main className="flex-1">
        {step === "location" && (
          <LocationStep onLocationSelected={handleLocationSelected} />
        )}

        {step === "shopping" && (
          <ShoppingListStep
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
            onCompare={handleGoToComparison}
          />
        )}

        {step === "comparison" && location && (
          <ComparisonStep
            location={location}
            shoppingList={shoppingList}
            onBack={handleBackToShopping}
          />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        ComparePrix v1.0 - Comparez les prix des supermarches pres de chez vous
      </footer>
    </div>
  );
}
