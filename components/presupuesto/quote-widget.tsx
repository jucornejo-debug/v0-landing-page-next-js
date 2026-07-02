"use client"

import { useMemo, useState } from "react"
import dynamic from "next/dynamic"
import { MapPin, Plus, Trash2, X, Check, LayoutGrid, Loader2 } from "lucide-react"
import {
  CATEGORY_COLORS,
  CATEGORIES,
  getPricingType,
  type BudgetItem,
  type Category,
  type SextuplesItem,
  type Soporte,
} from "@/lib/presupuesto/types"

// Leaflet must render on the client only.
const QuoteMap = dynamic(() => import("./quote-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
      Cargando mapa…
    </div>
  ),
})

const SEXTUPLES_MIN = 15
const SEXTUPLES_MAX = 250
const SEXTUPLES_MIN_DAYS = 15

interface QuoteWidgetProps {
  soportes: Soporte[]
}

export function QuoteWidget({ soportes }: QuoteWidgetProps) {
  const [activeCategories, setActiveCategories] = useState<Category[]>([...CATEGORIES])
  const [items, setItems] = useState<BudgetItem[]>([])
  const [pending, setPending] = useState<Soporte | null>(null)
  const [sextuples, setSextuples] = useState<SextuplesItem | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const addedIds = useMemo(() => items.map((i) => i.id), [items])

  const visibleSoportes = useMemo(
    () => soportes.filter((s) => activeCategories.includes(s.category)),
    [soportes, activeCategories],
  )

  function toggleCategory(cat: Category) {
    setActiveCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]))
  }

  function handleAddPending(s: Soporte) {
    // Rule: no duplicate locations.
    if (addedIds.includes(s.id)) return
    setPending(s)
  }

  function confirmPending(item: BudgetItem) {
    setItems((prev) => [...prev, item])
    setPending(null)
  }

  function removeItem(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // Simulate a network request.
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  const totalItems = items.length + (sextuples ? 1 : 0)

  return (
    <div className="w-full font-sans text-[#333]">
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        {/* LEFT: Map + Séxtuples */}
        <div className="flex flex-col gap-6">
          {/* Category legend / filters */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = activeCategories.includes(cat)
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "border-transparent bg-white text-[#333] shadow-sm"
                      : "border-gray-200 bg-transparent text-gray-400"
                  }`}
                  aria-pressed={active}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: active ? CATEGORY_COLORS[cat] : "#cbd5e1" }}
                  />
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Map */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm md:h-[520px]">
            <QuoteMap soportes={visibleSoportes} addedIds={addedIds} onAdd={handleAddPending} />
          </div>

          {/* Séxtuples */}
          <SextuplesSection sextuples={sextuples} onChange={setSextuples} />
        </div>

        {/* RIGHT: Summary + checkout */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <h3 className="text-base font-bold uppercase tracking-wide text-[#8b1e24]">Tu presupuesto</h3>
              <span className="rounded-full bg-[#8b1e24] px-2.5 py-0.5 text-xs font-semibold text-white">
                {totalItems}
              </span>
            </div>

            <div className="max-h-[340px] overflow-y-auto px-5 py-4">
              {totalItems === 0 ? (
                <p className="py-6 text-center text-sm text-gray-400">
                  Seleccioná puntos en el mapa o agregá una campaña de séxtuples para comenzar.
                </p>
              ) : (
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: CATEGORY_COLORS[item.category] }}
                      >
                        <MapPin className="h-3.5 w-3.5 text-white" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-[#333]">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          {item.pricingType === "digital"
                            ? `${item.passesPerDay} pases/día · ${item.campaignDays} días`
                            : `${item.rentalMonths} ${item.rentalMonths === 1 ? "mes" : "meses"} de alquiler`}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 transition-colors hover:text-[#8b1e24]"
                        aria-label={`Quitar ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  ))}

                  {sextuples && (
                    <li className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#333]">
                        <LayoutGrid className="h-3.5 w-3.5 text-white" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#333]">Campaña de Séxtuples</p>
                        <p className="text-xs text-gray-500">
                          {sextuples.quantity} unidades · {sextuples.durationDays} días
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSextuples(null)}
                        className="text-gray-400 transition-colors hover:text-[#8b1e24]"
                        aria-label="Quitar campaña de séxtuples"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  )}
                </ul>
              )}
            </div>

            {/* Checkout form */}
            <div className="border-t border-gray-100 px-5 py-4">
              {submitted ? (
                <div className="flex flex-col items-center gap-2 py-4 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-6 w-6 text-green-600" />
                  </span>
                  <p className="text-sm font-semibold text-[#333]">¡Solicitud enviada!</p>
                  <p className="text-xs text-gray-500">Te contactaremos a la brevedad con tu cotización.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setItems([])
                      setSextuples(null)
                    }}
                    className="mt-2 text-xs font-medium text-[#8b1e24] underline"
                  >
                    Armar un nuevo presupuesto
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Nombre y apellido"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#8b1e24]"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#8b1e24]"
                  />
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#8b1e24]"
                  />
                  <button
                    type="submit"
                    disabled={totalItems === 0 || submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8b1e24] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6d1619] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
                      </>
                    ) : (
                      "Solicitar cotización"
                    )}
                  </button>
                  {totalItems === 0 && (
                    <p className="text-center text-[11px] text-gray-400">Agregá al menos un ítem al presupuesto.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Config modal for a pending map point */}
      {pending && (
        <ConfigModal soporte={pending} onCancel={() => setPending(null)} onConfirm={confirmPending} />
      )}
    </div>
  )
}

/* ---------------- Config modal ---------------- */

function ConfigModal({
  soporte,
  onCancel,
  onConfirm,
}: {
  soporte: Soporte
  onCancel: () => void
  onConfirm: (item: BudgetItem) => void
}) {
  const pricing = getPricingType(soporte.category)
  const [passesPerDay, setPassesPerDay] = useState(24)
  const [campaignDays, setCampaignDays] = useState(15)
  const [rentalMonths, setRentalMonths] = useState(1)

  function submit() {
    if (pricing === "digital") {
      onConfirm({
        id: soporte.id,
        name: soporte.name,
        category: soporte.category,
        pricingType: "digital",
        passesPerDay,
        campaignDays,
      })
    } else {
      onConfirm({
        id: soporte.id,
        name: soporte.name,
        category: soporte.category,
        pricingType: "rental",
        rentalMonths,
      })
    }
  }

  return (
    <div className="fixed inset-0 z-[1000] flex items-end justify-center bg-black/40 p-4 sm:items-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide" style={{ color: CATEGORY_COLORS[soporte.category] }}>
              {soporte.category}
            </p>
            <h4 className="text-lg font-bold text-[#333]">{soporte.name}</h4>
          </div>
          <button type="button" onClick={onCancel} className="text-gray-400 hover:text-[#8b1e24]" aria-label="Cerrar">
            <X className="h-5 w-5" />
          </button>
        </div>

        {pricing === "digital" ? (
          <div className="flex flex-col gap-4">
            <NumberField
              label="Pases por día"
              value={passesPerDay}
              min={1}
              onChange={(n) => setPassesPerDay(n === "" ? 1 : n)}
            />
            <NumberField
              label="Días de campaña"
              value={campaignDays}
              min={1}
              onChange={(n) => setCampaignDays(n === "" ? 1 : n)}
            />
          </div>
        ) : (
          <NumberField
            label="Meses de alquiler"
            value={rentalMonths}
            min={1}
            onChange={(n) => setRentalMonths(n === "" ? 1 : n)}
          />
        )}

        <button
          type="button"
          onClick={submit}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#8b1e24] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6d1619]"
        >
          <Plus className="h-4 w-4" /> Agregar al presupuesto
        </button>
      </div>
    </div>
  )
}

/* ---------------- Séxtuples ---------------- */

function SextuplesSection({
  sextuples,
  onChange,
}: {
  sextuples: SextuplesItem | null
  onChange: (s: SextuplesItem | null) => void
}) {
  const [quantity, setQuantity] = useState<number | "">(sextuples?.quantity ?? "")
  const [durationDays, setDurationDays] = useState(sextuples?.durationDays ?? SEXTUPLES_MIN_DAYS)

  const qtyValid = quantity !== "" && quantity >= SEXTUPLES_MIN && quantity <= SEXTUPLES_MAX
  const daysValid = durationDays >= SEXTUPLES_MIN_DAYS

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-1 flex items-center gap-2">
        <LayoutGrid className="h-5 w-5 text-[#8b1e24]" />
        <h3 className="text-base font-bold uppercase tracking-wide text-[#8b1e24]">Campaña de Séxtuples</h3>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        Opción independiente del mapa. Cantidad entre {SEXTUPLES_MIN} y {SEXTUPLES_MAX} unidades, con una duración
        mínima de {SEXTUPLES_MIN_DAYS} días.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <NumberField
            label={`Cantidad (${SEXTUPLES_MIN}–${SEXTUPLES_MAX})`}
            value={quantity}
            min={SEXTUPLES_MIN}
            max={SEXTUPLES_MAX}
            placeholder={`Mín. ${SEXTUPLES_MIN}`}
            onChange={setQuantity}
          />
          {quantity !== "" && !qtyValid && (
            <p className="mt-1 text-[11px] text-[#8b1e24]">
              Debe estar entre {SEXTUPLES_MIN} y {SEXTUPLES_MAX}.
            </p>
          )}
        </div>
        <div>
          <NumberField
            label={`Duración en días (mín. ${SEXTUPLES_MIN_DAYS})`}
            value={durationDays}
            min={SEXTUPLES_MIN_DAYS}
            onChange={(n) => setDurationDays(n === "" ? SEXTUPLES_MIN_DAYS : n)}
          />
          {!daysValid && <p className="mt-1 text-[11px] text-[#8b1e24]">Mínimo {SEXTUPLES_MIN_DAYS} días.</p>}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          disabled={!qtyValid || !daysValid}
          onClick={() => quantity !== "" && onChange({ quantity, durationDays })}
          className="flex items-center gap-2 rounded-lg bg-[#8b1e24] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6d1619] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
          {sextuples ? "Actualizar campaña" : "Agregar campaña"}
        </button>
        {sextuples && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600">
            <Check className="h-4 w-4" /> Agregada al presupuesto
          </span>
        )}
      </div>
    </div>
  )
}

/* ---------------- Shared number field ---------------- */

function NumberField({
  label,
  value,
  min,
  max,
  placeholder,
  onChange,
}: {
  label: string
  value: number | ""
  min: number
  max?: number
  placeholder?: string
  onChange: (n: number | "") => void
}) {
  function step(delta: number) {
    // If empty, stepping starts from the minimum allowed value.
    let next = (value === "" ? min : value) + delta
    if (next < min) next = min
    if (max !== undefined && next > max) next = max
    onChange(next)
  }

  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-gray-600">{label}</span>
      <div className="flex items-center rounded-lg border border-gray-200">
        <button
          type="button"
          onClick={() => step(-1)}
          className="px-3 py-2 text-lg leading-none text-gray-500 hover:text-[#8b1e24]"
          aria-label="Disminuir"
        >
          −
        </button>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          placeholder={placeholder}
          onChange={(e) => {
            const raw = e.target.value
            onChange(raw === "" ? "" : Number(raw))
          }}
          className="w-full [appearance:textfield] border-x border-gray-200 py-2 text-center text-sm outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          onClick={() => step(1)}
          className="px-3 py-2 text-lg leading-none text-gray-500 hover:text-[#8b1e24]"
          aria-label="Aumentar"
        >
          +
        </button>
      </div>
    </label>
  )
}
