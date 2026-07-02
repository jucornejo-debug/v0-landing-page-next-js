import { readFile } from "node:fs/promises"
import path from "node:path"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteWidget } from "@/components/presupuesto/quote-widget"
import type { Soporte } from "@/lib/presupuesto/types"

export const metadata = {
  title: "Armá tu presupuesto | Publicidad en Vía Pública",
  description:
    "Seleccioná soportes de publicidad exterior en el mapa, agregá una campaña de séxtuples y solicitá tu cotización.",
}

async function getSoportes(): Promise<Soporte[]> {
  const file = path.join(process.cwd(), "public", "data", "soportes.json")
  const raw = await readFile(file, "utf-8")
  return JSON.parse(raw) as Soporte[]
}

export default async function PresupuestoPage() {
  const soportes = await getSoportes()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="h-20" />
      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="mb-8 max-w-2xl">
          <h1 className="mb-3 text-3xl font-bold uppercase tracking-tight text-primary md:text-5xl">
            Armá tu presupuesto
          </h1>
          <p className="font-sans text-base text-dark-text md:text-lg">
            Explorá nuestros soportes en el mapa, elegí los que más te interesen y sumá una campaña de séxtuples. Al
            finalizar, dejanos tus datos y te enviamos la cotización.
          </p>
        </div>
        <QuoteWidget soportes={soportes} />
      </section>
      <Footer />
    </main>
  )
}
