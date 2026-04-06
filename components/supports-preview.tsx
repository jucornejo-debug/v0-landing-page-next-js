"use client"

import type React from "react"
import Image from "next/image"

export function SupportsPreview() {
  const supports = [
    {
      title: "GRANDES FORMATOS",
      description: "Carteles de gran formato en rutas y avenidas de alta visibilidad.",
      image: "/Gran Formato Acceso a ciudad 5.jpg",
    },
    {
      title: "VALLADOS",
      description: "Vallados publicitarios en zonas urbanas con alto tránsito.",
      image: "/ValladoAltura.jpg",
    },
    {
      title: "FORMATOS DIGITALES",
      description: "Pantallas digitales en puntos estratégicos de gran circulación.",
      image: "/public/images/Diseño sin título (6).jpg",
    },
  ]

  const handleScrollToSupports = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const supportsSection = document.getElementById("soportes-detalle")
    if (supportsSection) {
      supportsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-primary uppercase mb-3 tracking-tight">
            NUESTROS SOPORTES
          </h2>
          <p className="text-base md:text-lg text-primary font-sans">
            Una amplia variedad de formatos publicitarios para cada necesidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {supports.map((support, index) => (
            <div key={index} className="rounded-3xl overflow-hidden shadow-lg bg-background">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={support.image || "/GRAN FORMATO E-S.jpg"}
                  alt={support.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center bg-background">
                <h3 className="font-sans font-bold text-lg md:text-xl text-primary uppercase mb-2 tracking-tight">
                  {support.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-foreground bg-background font-sans">
                  {support.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/soportes#soportes-detalle"
            className="inline-block bg-primary text-white font-sans text-base md:text-lg px-8 py-3 rounded-lg hover:bg-primary-hover transition-colors shadow-lg"
          >
            Ver soportes
          </a>
        </div>
      </div>
    </section>
  )
}
