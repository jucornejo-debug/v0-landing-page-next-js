"use client"

import Image from "next/image"
import { useState } from "react"

export function SupportsFull() {
  const grandesFormatos = [
    {
      title: "GRANDES FORMATOS",
      location: "Ingreso/Salida ciudad",
      images: ["/Publicación 5_1200x900.jpg", "/Publicación 6_1200x900.jpg"],
    },
    {
      title: "GRANDES FORMATOS",
      location: "Centro de la ciudad",
      images: ["/Gran Formato Centro 4.jpg", "/Gran Formato centro 3.jpg"],
    },
    {
      title: "GRANDES FORMATOS",
      location: "Variado",
      images: ["/Gran Formato Centro 2.jpg", "/highway-prism-billboard.jpg"],
    },
  ]

  const vallados = [
    {
      title: "VALLADOS",
      location: "Obras en construcción",
      images: ["/Vallado 2.jpg", "/Vallado 3-jpg"],
    },
    {
      title: "HIPER VALLADOS",
      location: "Eventos especiales",
      images: ["/Hiper-Vallado 2.jpg", "/Hiper Vallado 5.jpg"],
    },
    {
      title: "VALLADOS DOBLE",
      location: "Centro",
      images: ["/Sextuple doble 1_1200x900.jpg", "/Sextuple doble_1200x900.jp"],
    },
  ]

  const digitales = [
    {
      title: "DIGITALES",
      location: "Centros comerciales",
      images: ["/large-led-screen-outdoor-advertising.jpg", "/digital-display-outdoor-billboard.jpg"],
    },
    {
      title: "DIGITALES",
      location: "Vía pública",
      images: ["/digital-display-outdoor-billboard.jpg", "/led-totem-digital-advertising.jpg"],
    },
    {
      title: "DIGITALES",
      location: "Shopping centers",
      images: ["/led-totem-digital-advertising.jpg", "/large-led-screen-outdoor-advertising.jpg"],
    },
  ]

  return (
    <section id="soportes" className="bg-background">
      <div className="bg-primary w-full">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8 py-12 md:py-16">
            <div className="text-left pl-6 md:pl-16 lg:pl-24">
              <h2 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-white uppercase mb-4 md:mb-6 tracking-tight leading-tight">
                NUESTROS
                <br />
                SOPORTES
              </h2>
              <p className="font-serif text-base md:text-lg text-white mb-6 md:mb-8">
                Soportes de alto impacto diseñados para que tu marca se vea, se recuerde y se destaque en la calle.
              </p>
              <button className="bg-background text-primary font-sans text-base md:text-lg px-8 py-3 rounded-lg hover:bg-white transition-colors">
                Conocé más
              </button>
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
        {/* Grandes Formatos */}
        <div className="mb-16">
          <h3 className="font-sans font-bold text-2xl md:text-4xl text-primary uppercase mb-8 tracking-tight text-center">
            GRANDES FORMATOS
          </h3>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {grandesFormatos.map((item, index) => (
              <SupportCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Vallados */}
        <div className="mb-16">
          <h3 className="font-sans font-bold text-2xl md:text-4xl text-primary uppercase mb-8 tracking-tight text-center">
            VALLADOS
          </h3>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {vallados.map((item, index) => (
              <SupportCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Formatos Digitales */}
        <div>
          <h3 className="font-sans font-bold text-2xl md:text-4xl text-primary uppercase mb-8 tracking-tight text-center">
            DIGITALES
          </h3>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {digitales.map((item, index) => (
              <SupportCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SupportCard({ item }: { item: { title: string; location: string; images: string[] } }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % item.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + item.images.length) % item.images.length)
  }

  return (
    <div className="w-full max-w-[280px]">
      <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg bg-white mb-4 group">
        <Image
          src={item.images[currentImage] || "/placeholder.svg"}
          alt={item.title}
          width={280}
          height={280}
          className="w-full h-full object-cover"
        />
        {item.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="text-center">
        <h4 className="font-sans font-bold text-lg md:text-xl text-primary uppercase mb-1 tracking-tight">
          {item.title}
        </h4>
        <p className="font-serif text-sm md:text-base text-primary">//Ubicación: {item.location}</p>
      </div>

      {item.images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {item.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImage ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
