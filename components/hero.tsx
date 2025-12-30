"use client"

import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=outdoor+billboard+advertising+city+skyline)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase mb-6 md:mb-8">
          PUBLICIDAD EN
          <br />
          VÍA PÚBLICA
        </h1>

        <p className="font-serif text-xl md:text-2xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Soluciones publicitarias de alto impacto para tu marca
        </p>

        <Link
          href="/soportes"
          className="inline-block bg-[#8B1E24] text-white font-sans text-lg md:text-xl px-12 py-4 rounded-lg hover:bg-[#6d1619] transition-colors shadow-lg"
        >
          Ver soportes
        </Link>
      </div>
    </section>
  )
}
