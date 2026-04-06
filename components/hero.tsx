"use client"

import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Hipervallado 4.jpg"
          alt="Hipervallado"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight uppercase mb-6 md:mb-8">
          PUBLICIDAD EN
          <br />
          VÍA PÚBLICA Y DOOH
        </h1>

        <p className="text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
          Soluciones publicitarias de alto impacto para tu marca
        </p>

        <Link
          href="/soportes"
          className="inline-block bg-primary text-white font-sans text-base md:text-lg px-12 py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-lg"
        >
          Ver soportes
        </Link>
      </div>
    </section>
  )
}
