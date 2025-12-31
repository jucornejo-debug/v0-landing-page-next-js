"use client"

import Link from "next/link"
import Image from "next/image"

export function SupportsPreview() {
  const supports = [
    {
      title: "GRANDES FORMATOS",
      description: "Carteles de gran formato en rutas y avenidas de alta visibilidad.",
      image: "/images/image.png",
    },
    {
      title: "VALLADOS",
      description: "Vallados publicitarios en zonas urbanas con alto tránsito.",
      image: "/images/image.png",
    },
    {
      title: "DIGITALES",
      description: "Pantallas digitales en puntos estratégicos de gran circulación.",
      image: "/images/image.png",
    },
  ]

  return (
    <section className="bg-[#F6EFE6] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-[#8B1E24] uppercase mb-3 tracking-tight">
            NUESTROS SOPORTES
          </h2>
          <p className="font-serif text-base md:text-lg text-[#8B1E24]">
            Una amplia variedad de formatos publicitarios para cada necesidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {supports.map((support, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={support.image || "/placeholder.svg"}
                  alt={support.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-sans font-bold text-lg md:text-xl text-[#8B1E24] uppercase mb-2 tracking-tight">
                  {support.title}
                </h3>
                <p className="font-serif text-sm md:text-base text-[#333333] leading-relaxed">{support.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/soportes"
            className="inline-block bg-[#8B1E24] text-white font-sans text-base md:text-lg px-8 py-3 rounded-lg hover:bg-[#6d1619] transition-colors shadow-lg"
          >
            Ver todos los soportes
          </Link>
        </div>
      </div>
    </section>
  )
}
