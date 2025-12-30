"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    // Check if we're on the home page
    if (window.location.pathname === "/") {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setMobileMenuOpen(false)
      }
    } else {
      // Navigate to home with anchor
      window.location.href = `/#${id}`
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#8B1E24] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold font-sans tracking-tight">LOGO</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("nosotros")}
              className="font-sans text-base hover:opacity-80 transition-opacity"
            >
              Nosotros
            </button>
            <Link href="/soportes" className="font-sans text-base hover:opacity-80 transition-opacity">
              Soportes
            </Link>
            <button
              onClick={() => scrollToSection("contacto")}
              className="font-sans text-base hover:opacity-80 transition-opacity"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-[#8B1E24] border-t border-gray-200">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("nosotros")}
              className="font-sans text-lg text-left py-2 hover:opacity-80 transition-opacity"
            >
              Nosotros
            </button>
            <Link
              href="/soportes"
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-lg text-left py-2 hover:opacity-80 transition-opacity"
            >
              Soportes
            </Link>
            <button
              onClick={() => scrollToSection("contacto")}
              className="font-sans text-lg text-left py-2 hover:opacity-80 transition-opacity"
            >
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
