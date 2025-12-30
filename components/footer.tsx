"use client"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#8B1E24] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div>
            <div className="text-3xl font-bold font-sans mb-4">LOGO</div>
          </div>

          {/* Links */}
          <div>
            <nav className="flex flex-col gap-3 font-sans">
              <button onClick={scrollToTop} className="text-left hover:opacity-80 transition-opacity">
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-left hover:opacity-80 transition-opacity"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("soportes")}
                className="text-left hover:opacity-80 transition-opacity"
              >
                Soportes
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left hover:opacity-80 transition-opacity"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="font-serif">
            <p className="mb-2">📧 info@publicidadvp.com</p>
            <p className="mb-2">📞 +54 11 1234-5678</p>
            <p>📍 Buenos Aires, Argentina</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center font-serif text-sm">
          <p>© 2025 Publicidad en Vía Pública. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
