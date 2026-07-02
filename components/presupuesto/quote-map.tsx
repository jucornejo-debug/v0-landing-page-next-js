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
      <svg width="30" height="42" viewBox="0 0 30 42" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.7 0 0 6.7 0 15c0 10.5 15 27 15 27s15-16.5 15-27C30 6.7 23.3 0 15 0z" fill="${color}"/>
        <circle cx="15" cy="15" r="6" fill="#ffffff"/>
      </svg>
    </div>`
  return L.divIcon({
    html,
    className: "",
    iconSize: [30, 42],
    iconAnchor: [0, 0],
    popupAnchor: [0, -38],
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
      {soportes.map((s) => {
        const added = addedIds.includes(s.id)
        const pricing = getPricingType(s.category)
        return (
          <Marker key={s.id} position={[s.lat, s.lng]} icon={pinIcon(CATEGORY_COLORS[s.category], added)}>
            <Popup>
              <div className="min-w-[190px] font-sans">
                <p className="text-sm font-bold text-[#8b1e24] leading-snug">{s.name}</p>
                <p className="text-xs text-gray-600 mt-0.5">{s.category}</p>
                <p className="text-[11px] text-gray-500 mt-1">
                  {pricing === "digital"
                    ? "Se cotiza por pases/día y días de campaña."
                    : "Se cotiza por meses de alquiler."}
                </p>
                <button
                  type="button"
                  disabled={added}
                  onClick={() => onAdd(s)}
                  className="mt-2 w-full rounded-md bg-[#8b1e24] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#6d1619] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {added ? "Ya está en el presupuesto" : "Agregar al presupuesto"}
                </button>
              </div>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}
