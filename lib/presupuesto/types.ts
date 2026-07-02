export type Category = "Grandes Formatos" | "Pantallas LED" | "Tótems LED" | "Vallados"

export interface Soporte {
  id: number
  name: string
  category: Category
  lat: number
  lng: number
}

/** "digital" -> pases por día + días de campaña. "rental" -> meses de alquiler. */
export type PricingType = "digital" | "rental"

export function getPricingType(category: Category): PricingType {
  if (category === "Tótems LED" || category === "Pantallas LED") return "digital"
  return "rental"
}

export const CATEGORIES: Category[] = ["Grandes Formatos", "Pantallas LED", "Tótems LED", "Vallados"]

/** Marker color per category, used for both the map pins and the legend. */
export const CATEGORY_COLORS: Record<Category, string> = {
  "Grandes Formatos": "#8b1e24",
  "Pantallas LED": "#1d4ed8",
  "Tótems LED": "#0f766e",
  Vallados: "#b45309",
}

/** A location added to the budget. */
export interface BudgetItem {
  id: number
  name: string
  category: Category
  pricingType: PricingType
  // digital
  passesPerDay?: number
  campaignDays?: number
  // rental
  rentalMonths?: number
}

/** The independent "Séxtuples" campaign line. */
export interface SextuplesItem {
  quantity: number
  durationDays: number
}
