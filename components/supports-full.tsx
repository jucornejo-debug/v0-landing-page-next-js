"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import type { Soporte } from "@/lib/presupuesto/types"

type Section = {
  title: string
  items: Soporte[]
}

export function SupportsFull({ soportes }: { soportes: Soporte[] }) {
  const byCategory = (category: Soporte["category"]) => soportes.filter((s) => s.category === category)

  // Four visual sections, dynamically populated from soportes.json.
  const sections: Section[] = [
    { title: "Formatos Digitales - Tótems", items: byCategory("Tótems LED") },
    { title: "Formatos Digitales - Pantallas LED", items: byCategory("Pantallas LED") },
    { title: "Grandes Formatos", items: byCategory("Grandes Formatos") },
    { title: "Vallados", items: byCategory("Vallados") },
  ]

  return (
    <section id="soportes" className="bg-background">
      <div className="bg-primary w-full">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-4 py-12 md:py-16">
            <div className="text-left pl-6 md:pl-16 lg:pl-24">
              <h2 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-white uppercase mb-4 md:mb-6 tracking-tight leading-tight">
                NUESTROS
                <br />
                SOPORTES
              </h2>
              <p className="text-base md:text-lg text-white mb-6 md:mb-8 font-sans">
                Soportes de alto impacto diseñados para que tu marca se vea, se recuerde y se destaque en la calle.
              </p>
              <Link
                href="/presupuesto"
                className="inline-block bg-background text-primary font-sans text-base md:text-lg px-8 py-3 rounded-lg hover:bg-white transition-colors"
              >
                Cotizá tu campaña
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl max-w-md w-full">
                <Image
                  src="/GRAN FORMATO E-S.jpg"
                  alt="Soporte publicitario"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {sections.map((section) =>
          section.items.length === 0 ? null : (
            <div key={section.title} className="mb-16">
              <h3 className="font-sans font-bold text-primary uppercase mb-8 tracking-tight text-center text-3xl md:text-5xl lg:text-6xl text-balance">
                {section.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-8 justify-items-center">
                {section.items.map((item) => (
                  <SupportCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ),
        )}

        <div className="flex justify-center mt-12">
          <Link
            href="https://wa.me/5493875193941"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-sans text-base md:text-lg px-10 py-4 rounded-lg hover:bg-primary-hover transition-colors inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  )
}

function SupportCard({ item }: { item: Soporte }) {
  const images = item.imageUrl ? [item.imageUrl] : ["/placeholder.svg"]
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  // Vallados are not shown on the map, so we omit the "Ver en el mapa" link for them.
  const showMapLink = item.category !== "Vallados"

  return (
    <div className="w-full max-w-[300px] flex flex-col">
      <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg bg-white mb-4 group">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={item.name}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Imagen siguiente"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="text-center px-1">
        <h4 className="font-sans font-bold text-lg md:text-xl text-primary uppercase mb-1 tracking-tight text-balance">
          {item.name}
        </h4>
        <p className="text-sm md:text-base text-primary font-sans">{item.category}</p>
        {item.size && <p className="text-sm text-dark-text font-sans mt-0.5">Tamaño: {item.size}</p>}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImage ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-col gap-2">
        <Link
          href={`/soportes/${item.id}`}
          className="w-full rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
        >
          Ver detalles
        </Link>
        {showMapLink ? (
          <Link
            href={`/presupuesto?soporte=${item.id}`}
            className="w-full rounded-lg border border-primary px-4 py-2.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            Ver ubicación en el mapa
          </Link>
        ) : (
          <span
            title="Próximamente en el mapa"
            aria-disabled="true"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-center text-sm font-semibold text-gray-400 cursor-not-allowed"
          >
            Ver ubicación en el mapa
          </span>
        )}
      </div>
    </div>
  )
}
