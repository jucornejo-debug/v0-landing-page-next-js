"use client"

import type React from "react"
import { useState } from "react"
import { Linkedin, Mail, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status !== "idle") setStatus("idle") // si el usuario vuelve a escribir, limpiamos el mensaje
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus("sending")

    try {
      const data = new FormData()
      Object.entries(formData).forEach(([key, value]) => data.append(key, value))

      const res = await fetch("https://formspree.io/f/xldvvopo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })

      if (res.ok) {
        setFormData({
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          mensaje: "",
        })
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contacto" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary uppercase mb-4 tracking-tight">
            CONTÁCTANOS
          </h2>
          <p className="text-base md:text-lg text-foreground font-sans leading-8">
            Estamos para ayudarte con tu próxima campaña
          </p>
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
              disabled={status === "sending"}
              className="bg-primary text-white font-sans text-base px-12 py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-lg disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Enviar"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm text-green-700">
                Enviado ✅ Tu consulta se envió correctamente. Te vamos a contactar a la brevedad.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-700">
                Error ❌ No se pudo enviar. Probá de nuevo en unos minutos.
              </p>
            )}
          </div>
        </form>

        <div className="flex justify-center gap-6">
          {/* LinkedIn (cambiá por tu URL real) */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          {/* Mail */}
          <a
            href="mailto:carteles.noa@outlook.com"
            className="text-primary hover:opacity-80 transition-opacity"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>

          {/* Teléfono */}
          <a
            href="tel:+543875193941"
            className="text-primary hover:opacity-80 transition-opacity"
            aria-label="Teléfono"
          >
            <Phone size={24} />
          </a>

          {/* WhatsApp (opcional: si preferís que el ícono Phone sea WhatsApp, lo cambiamos después) */}
          <a
            href="https://wa.me/543875193941?text=Hola%20NOA%20Publicidad%2C%20quiero%20hacer%20una%20consulta."
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:opacity-80 transition-opacity"
            aria-label="WhatsApp"
          >
            <span className="sr-only">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
