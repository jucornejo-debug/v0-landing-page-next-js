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
  const [errorMsg, setErrorMsg] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status !== "idle") setStatus("idle")
    if (errorMsg) setErrorMsg("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    try {
      const payload = {
        ...formData,
        // Formspree helpers:
        _replyto: formData.email,
        subject: `Consulta web - ${formData.nombre}${formData.empresa ? ` (${formData.empresa})` : ""}`,
      }

      const res = await fetch("https://formspree.io/f/mqearaky", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      // Intentamos leer JSON para obtener detalle si falla
      let json: any = null
      try {
        json = await res.json()
      } catch {}

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
        // Mensaje útil si Formspree devuelve detalle
        const msg =
          json?.errors?.[0]?.message ||
          json?.error ||
          "Formspree rechazó el envío (revisá endpoint / activación del formulario)."
        setErrorMsg(msg)
      }
    } catch (err: any) {
      setStatus("error")
      setErrorMsg("Error de red/CORS. Probá desde el sitio publicado (no desde localhost) y revisá Formspree.")
    }
  }

  return (
    <section id="contacto" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl text-primary uppercase mb-4 tracking-tight md:text-5xl">
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
              className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-primary/50 font-sans"
            />

            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-primary/50 font-sans"
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
              className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-primary/50 font-sans"
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-primary/50 font-sans"
            />
          </div>

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-6 py-4 bg-background border-2 border-primary rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-primary/50 resize-none font-sans"
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
                ❌ Error al enviar. {errorMsg ? `(${errorMsg})` : "Intentá nuevamente en unos minutos."}
              </p>
            )}
          </div>
        </form>

        {/* ICONOS */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/company/dominiovisual"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:opacity-80 transition-opacity"
          >
            <Linkedin size={24} />
          </a>

          <a href="mailto:carteles.noa@outlook.com" className="text-primary hover:opacity-80 transition-opacity">
            <Mail size={24} />
          </a>

          <a
            href="https://wa.me/543875193941?text=Hola%20NOA%20Publicidad%2C%20quiero%20hacer%20una%20consulta."
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:opacity-80 transition-opacity"
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
