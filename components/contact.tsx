"use client"

import type React from "react"
import { useState } from "react"
import { Linkedin, Mail, MessageCircle } from "lucide-react"

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
    if (status !== "idle") setStatus("idle")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const data = new FormData()
      Object.entries(formData).forEach(([key, value]) => data.append(key, value))

      const res = await fetch("https://formspree.io/f/xldvvopo", {
        method: "POST",
        headers: {
          Accept: "application/json", // 🔴 CLAVE para que Formspree responda OK
        },
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
    } catch (err) {
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
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-primary/50"
            />

            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-primary/50"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-primary/50"
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-primary/50"
            />
          </div>

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-primary/50 resize-none"
          />

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
                ✅ Mensaje enviado correctamente. Te contactamos a la brevedad.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-700">
                ❌ Error al enviar. Intentá nuevamente en unos minutos.
              </p>
            )}
          </div>
        </form>

        {/* ICONOS */}
        <div className="flex justify-center gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:opacity-80 transition-opacity"
          >
            <Linkedin size={24} />
          </a>

          {/* Email */}
          <a
            href="mailto:carteles.noa@outlook.com"
            className="text-primary hover:opacity-80 transition-opacity"
          >
            <Mail size={24} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/543875193941?text=Hola%20NOA%20Publicidad%2C%20quiero%20hacer%20una%20consulta."
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:opacity-80 transition-opacity"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
