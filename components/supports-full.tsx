"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export function SupportsFull() {
  
    const digitales = [
    {
      title: "FORMATO DIGITAL",
      location: "Centro comercial - San Lorenzo Chico",
      images: ["/Imagen Tótems (2).jpeg", "/Caracteristicas.png"],
    },
    {
      title: "FORMATOS DIGITAL",
      location: "Galería Comercial - Centro Salta",
      images: ["/Galeria Margaled.png", "/Caracteristicas.png"],
    },
    {
      title: "FORMATO DIGITAL",
      location: "Galería Comercial - Centro Salta",
      images: ["/Imagen Tótems.jpeg", "/Caracteristicas.png"],
    },
  ]
    const pantallasLED = [
    {
      title: "FORMATO DIGITAL",
      location: "Centro comercial - San Lorenzo Chico",
      images: ["/Pantalla Grande.jpg", "/Caracteristicas.png"],
    },
    {
      title: "FORMATOS DIGITAL",
      location: "Galería Comercial - Centro Salta",
      images: ["/Galeria Margaled.png", "/Caracteristicas.png"],
    },
    {
      title: "FORMATO DIGITAL",
      location: "Galería Comercial - Centro Salta",
      images: ["/Imagen Tótems.jpeg", "/Caracteristicas.png"],
    },
  ]
  const grandesFormatos = [
    {
      title: "GRANDES FORMATOS",
      location: "Ingreso/Salida ciudad",
      images: ["/IngresoCiudad1.jpg", "/Publicación 6_1200x900.jpg"],
    },
    {
      title: "GRANDES FORMATOS",
      location: "Centro de la ciudad",
      images: ["/Gran Formato Centro 4.jpg", "/GraformatoCentro.jpg"],
    },
    {
      title: "GRANDES FORMATOS",
      location: "Variado",
      images: ["/Gran Formato Centro 2.jpg", "/GRAN FORMATO E-S.jpg"],
    },
  ]

  const vallados = [
    {
      title: "VALLADOS",
      location: "Simple",
      images: ["/Valladosimple.jpg", "/Valladosimple1.jpg"],
    },
    {
      title: "HIPER VALLADOS",
      location: "Hiper Vallado",
      images: ["/HiperVallado2.jpeg", "/HiperVallado3.jpg"],
    },
    {
      title: "VALLADOS DOBLE",
      location: "Vallado Doble",
      images: ["/ValladoDoble.jpg", "/ValladoDoble1.jpg"],
    },
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
                {/* Formatos Digitales */}
        <div className="mb-16">
          <h3 className="font-sans font-bold text-primary uppercase mb-8 tracking-tight text-6xl text-center">
            FORMATOS DIGITALES - Tótems
          </h3>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {digitales.map((item, index) => (
              <SupportCard key={index} item={item} />
            ))}
          </div>
        </div>
        {/* Formatos Digitales Pantallas*/}
        <div className="mb-16">
          <h3 className="font-sans font-bold text-3xl text-primary uppercase mb-8 tracking-tight md:text-6xl text-center">
            Formatos Digitales - Pantallas LED
          </h3>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {vallados.map((item, index) => (
              <SupportCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Grandes Formatos */}
        <div className="mb-16">
          <h3 className="font-sans font-bold text-primary uppercase mb-8 tracking-tight text-center text-6xl">
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
          <h3 className="font-sans font-bold text-3xl text-primary uppercase mb-8 tracking-tight md:text-6xl text-center">
            VALLADOS
          </h3>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {vallados.map((item, index) => (
              <SupportCard key={index} item={item} />
            ))}
          </div>
        </div>

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
        <p className="text-sm md:text-base text-primary font-sans">Tipo: {item.location}</p>
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
