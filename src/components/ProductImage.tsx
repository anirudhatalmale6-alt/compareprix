"use client";

import { useState } from "react";
import { Package, Droplets, Milk, Wheat, Sparkles, Snowflake, Apple, Drumstick, Croissant, Cookie, Coffee, SprayCan, Baby, Wine } from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{className?: string}>> = {
  "Boissons": Droplets,
  "Produits laitiers": Milk,
  "Epicerie": Wheat,
  "Conserves": Package,
  "Hygiène & Beauté": Sparkles,
  "Surgelés": Snowflake,
  "Fruits & Légumes": Apple,
  "Viandes & Poissons": Drumstick,
  "Boulangerie & Viennoiseries": Croissant,
  "Snacks & Confiserie": Cookie,
  "Petit-déjeuner": Coffee,
  "Entretien ménager": SprayCan,
  "Bébé & Enfant": Baby,
  "Alcools & Vins": Wine,
};

const categoryColors: Record<string, {bg: string; fg: string}> = {
  "Boissons": { bg: "bg-sky-50", fg: "text-sky-400" },
  "Produits laitiers": { bg: "bg-blue-50", fg: "text-blue-400" },
  "Epicerie": { bg: "bg-amber-50", fg: "text-amber-400" },
  "Conserves": { bg: "bg-orange-50", fg: "text-orange-400" },
  "Hygiène & Beauté": { bg: "bg-pink-50", fg: "text-pink-400" },
  "Surgelés": { bg: "bg-cyan-50", fg: "text-cyan-400" },
  "Fruits & Légumes": { bg: "bg-green-50", fg: "text-green-400" },
  "Viandes & Poissons": { bg: "bg-red-50", fg: "text-red-400" },
  "Boulangerie & Viennoiseries": { bg: "bg-yellow-50", fg: "text-yellow-500" },
  "Snacks & Confiserie": { bg: "bg-purple-50", fg: "text-purple-400" },
  "Petit-déjeuner": { bg: "bg-stone-50", fg: "text-stone-400" },
  "Entretien ménager": { bg: "bg-teal-50", fg: "text-teal-400" },
  "Bébé & Enfant": { bg: "bg-rose-50", fg: "text-rose-400" },
  "Alcools & Vins": { bg: "bg-violet-50", fg: "text-violet-400" },
};

interface ProductImageProps {
  src: string;
  alt: string;
  category?: string;
  size?: "sm" | "md";
}

export default function ProductImage({ src, alt, category, size = "md" }: ProductImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const Icon = (category && categoryIcons[category]) || Package;
  const colors = (category && categoryColors[category]) || { bg: "bg-slate-50", fg: "text-slate-300" };

  if (error || !src) {
    return (
      <div className={`flex items-center justify-center rounded-lg w-full h-full ${colors.bg}`}>
        <Icon className={`${size === "sm" ? "w-4 h-4" : "w-8 h-8"} ${colors.fg}`} />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${colors.bg} rounded-lg`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`${size === "sm" ? "w-4 h-4" : "w-6 h-6"} ${colors.fg} opacity-30`} />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`object-contain ${size === "sm" ? "w-8 h-8" : "w-full h-full p-1"} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
}
