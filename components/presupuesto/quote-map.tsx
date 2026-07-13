"use client"

import { useMemo } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { CATEGORY_COLORS, getPricingType, type Soporte } from "@/lib/presupuesto/types"

/** Builds a colored teardrop pin as a divIcon so we avoid missing default asset URLs. */
function pinIcon(color: string, dimmed: boolean) {
  const html = `
    <div style="transform: translate(-50%, -100%); opacity:${dimmed ? 0.4 : 1};">
      <svg width="20" height="28" viewBox="0 0 30 42" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.7 0 0 6.7 0 15c0 10.5 15 27 15 27s15-16.5 15-27C30 6.7 23.3 0 15 0z" fill="${color}"/>
        <circle cx="15" cy="15" r="6" fill="#ffffff"/>
      </svg>
    </div>`
  return L.divIcon({
    html,
    className: "",
    iconSize: [20, 28],      // <-- Coincide con el SVG
    iconAnchor: [10, 28],    // <-- Centra la base del pin en la coordenada exacta
    popupAnchor: [0, -28],   // <-- El cartelito aparece justo arriba del pin
  })
}

interface QuoteMapProps {
  soportes: Soporte[]
  addedIds: number[]
  onAdd: (s: Soporte) => void
}

export default function QuoteMap({ soportes, addedIds, onAdd }: QuoteMapProps) {
  const center = useMemo<[number, number]>(() => {
    if (soportes.length === 0) return [-24.7859, -65.4117]
    const lat = soportes.reduce((a, s) => a + s.lat, 0) / soportes.length
    const lng = soportes.reduce((a, s) => a + s.lng, 0) / soportes.length
    return [lat, lng]
  }, [soportes])

  return (
    <>
      {/* Overrides globales para agrandar el popup de Leaflet (sus estilos default son muy chicos/rígidos) */}
      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          padding: 2px;
        }
        .leaflet-popup-content {
          margin: 14px 16px;
          width: auto !important;
        }
        .soporte-popup {
          font-family: inherit;
        }
      `}</style>

      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {soportes.filter((s) => s.category !== "Vallados").map((s) => {
          const added = addedIds.includes(s.id)
          const pricing = getPricingType(s.category)
          const color = CATEGORY_COLORS[s.category]
          return (
            <Marker key={s.id} position={[s.lat, s.lng]} icon={pinIcon(color, added)}>
              <Popup minWidth={260} maxWidth={320}>
                <div className="soporte-popup w-[260px] font-sans">
                  {s.imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={s.imageUrl || "/placeholder.svg"}
                      alt={s.name}
                      className="mb-3 h-40 w-full rounded-md object-cover"
                      loading="lazy"
                    />
                  )}

                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                      {s.category}
                    </span>
                  </div>

                  <p className="mt-1 text-base font-bold leading-snug text-[#8b1e24]">{s.name}</p>

                  <div className="mt-2 space-y-1 rounded-md bg-gray-50 p-2.5 text-xs text-gray-600">
                    {s.size && (
                      <p>
                        <span className="font-semibold text-gray-700">Tamaño: </span>
                        {s.size}
                      </p>
                    )}
                    <p>
                      <span className="font-semibold text-gray-700">Modalidad: </span>
                      {pricing === "digital"
                        ? "Se cotiza por pases/día y días de campaña."
                        : "Se cotiza por meses de alquiler."}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Lat: {s.lat.toFixed(5)} · Lng: {s.lng.toFixed(5)}
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={added}
                    onClick={() => onAdd(s)}
                    className="mt-3 w-full rounded-md bg-[#8b1e24] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#6d1619] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {added ? "Ya está en el presupuesto" : "Agregar al presupuesto"}
                  </button>

                  {s.soporteUrl && (
                    <a
                      href={s.soporteUrl}
                      className="mt-2 flex w-full items-center justify-center gap-1 rounded-md border border-[#8b1e24] px-3 py-2 text-xs font-semibold text-[#8b1e24] transition-colors hover:bg-[#8b1e24]/5"
                    >
                      Ver detalles del cartel
                    </a>
                  )}
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </>
  )
}
