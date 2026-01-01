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
    <section id="contacto" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary uppercase mb-4 tracking-tight">
            CONTÁCTANOS
          </h2>
          <p className="text-base md:text-lg text-foreground font-sans leading-8">Estamos para ayudarte con tu próxima campaña</p>
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
                className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary text-dark-text placeholder:text-primary/50"
              />
            </div>
            <div>
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary text-dark-text placeholder:text-primary/50"
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
                className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary text-dark-text placeholder:text-primary/50"
              />
            </div>
            <div>
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary text-dark-text placeholder:text-primary/50"
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
              className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary text-dark-text placeholder:text-primary/50 resize-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white font-sans text-base px-12 py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-lg"
            >
              Enviar
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-6">
          <a href="#" className="text-primary hover:opacity-80 transition-opacity">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-primary hover:opacity-80 transition-opacity">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-primary hover:opacity-80 transition-opacity">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-primary hover:opacity-80 transition-opacity">
            <Mail size={24} />
          </a>
          <a href="#" className="text-primary hover:opacity-80 transition-opacity">
            <Phone size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
