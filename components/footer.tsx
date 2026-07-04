"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const scrollToSection = (id: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.location.href = `/#${id}`
    }
  }

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div>
            <Image
              src="/Logo Blanco.png"
              alt="Logo"
              width={420}
              height={140}
              className="w-auto px-3.5 h-32 mx-7"
            />
          </div>

          {/* Navegación */}
          <div>
            <nav className="flex flex-col gap-3 font-sans text-sm">
              <Link href="/" className="text-left hover:opacity-80 transition-opacity">
                Inicio
              </Link>

              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-left hover:opacity-80 transition-opacity"
              >
                Nosotros
              </button>

              <Link href="/soportes" className="text-left hover:opacity-80 transition-opacity">
                Soportes
              </Link>

              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left hover:opacity-80 transition-opacity"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Contacto */}
          <div className="font-serif text-sm space-y-2">
            <p className="font-sans">
              Mail:{" "}
              <a
                href="mailto:contacto@dominio-visual.com"
                className="hover:underline"
              >
                contacto@dominio-visual.com
              </a>
            </p>

            <p className="font-sans">
              Teléfono:{" "}
              <a
                href="https://wa.me/543876022170?text=Hola%20NOA%20Publicidad%2C%20quiero%20hacer%20una%20consulta."
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                +54 387 022-170
              </a>
            </p>
            <p className="font-sans">
              Teléfono:{" "}
              <a
                href="https://wa.me/5493876859601?text=Hola%20NOA%20Publicidad%2C%20quiero%20hacer%20una%20consulta."
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                +54 9 3876 85-9601
              </a>
            </p>

            <p className="font-sans">📍 Salta, Argentina</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center font-serif text-xs">
          <p>© 2025 Publicidad en Vía Pública. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
