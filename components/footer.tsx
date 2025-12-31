"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const scrollToSection = (id: string) => {
    // Check if we're on the home page
    if (window.location.pathname === "/") {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Navigate to home with anchor
      window.location.href = `/#${id}`
    }
  }

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <Image src="/advertising-company-logo.jpg" alt="Logo" width={144} height={48} className="h-10 w-auto" />
          </div>

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

          <div className="font-serif text-sm">
            <p className="mb-2">📧 info@publicidadvp.com</p>
            <p className="mb-2">📞 +54 11 1234-5678</p>
            <p>📍 Buenos Aires, Argentina</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center font-serif text-xs">
          <p>© 2025 Publicidad en Vía Pública. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
