"use client"

import type React from "react"

import { useState } from "react"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="bg-[#F6EFE6] py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-4xl md:text-6xl text-[#8B1E24] uppercase mb-4 tracking-tight">
            CONTÁCTANOS
          </h2>
          <p className="font-serif text-lg md:text-xl text-[#333333]">Estamos para ayudarte con tu próxima campaña</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mb-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-[#F6EFE6] border-2 border-[#8B1E24] rounded-lg font-serif text-lg focus:outline-none focus:ring-2 focus:ring-[#8B1E24] text-[#333333] placeholder:text-[#8B1E24]/50"
              />
            </div>
            <div>
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-[#F6EFE6] border-2 border-[#8B1E24] rounded-lg font-serif text-lg focus:outline-none focus:ring-2 focus:ring-[#8B1E24] text-[#333333] placeholder:text-[#8B1E24]/50"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-[#F6EFE6] border-2 border-[#8B1E24] rounded-lg font-serif text-lg focus:outline-none focus:ring-2 focus:ring-[#8B1E24] text-[#333333] placeholder:text-[#8B1E24]/50"
              />
            </div>
            <div>
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-[#F6EFE6] border-2 border-[#8B1E24] rounded-lg font-serif text-lg focus:outline-none focus:ring-2 focus:ring-[#8B1E24] text-[#333333] placeholder:text-[#8B1E24]/50"
              />
            </div>
          </div>

          <div>
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-6 py-4 bg-[#F6EFE6] border-2 border-[#8B1E24] rounded-lg font-serif text-lg focus:outline-none focus:ring-2 focus:ring-[#8B1E24] text-[#333333] placeholder:text-[#8B1E24]/50 resize-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#8B1E24] text-white font-sans text-lg px-12 py-4 rounded-lg hover:bg-[#6d1619] transition-colors shadow-lg"
            >
              Enviar
            </button>
          </div>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a href="#" className="text-[#8B1E24] hover:opacity-80 transition-opacity">
            <Facebook size={32} />
          </a>
          <a href="#" className="text-[#8B1E24] hover:opacity-80 transition-opacity">
            <Instagram size={32} />
          </a>
          <a href="#" className="text-[#8B1E24] hover:opacity-80 transition-opacity">
            <Linkedin size={32} />
          </a>
          <a href="#" className="text-[#8B1E24] hover:opacity-80 transition-opacity">
            <Mail size={32} />
          </a>
          <a href="#" className="text-[#8B1E24] hover:opacity-80 transition-opacity">
            <Phone size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}
