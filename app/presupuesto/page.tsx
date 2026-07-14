	import { readFile } from "node:fs/promises"
import path from "node:path"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CATEGORY_COLORS, getPricingType, type Soporte } from "@/lib/presupuesto/types"

async function getSoportes(): Promise<Soporte[]> {
  const file = path.join(process.cwd(), "public", "data", "soportes.json")
  const raw = await readFile(file, "utf-8")
  return JSON.parse(raw) as Soporte[]
}

export async function generateStaticParams() {
  const soportes = await getSoportes()
  return soportes.map((s) => ({ id: String(s.id) }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const soportes = await getSoportes()
  const soporte = soportes.find((s) => s.id === Number(id))

  return {
    title: soporte ? `${soporte.name} | Publicidad en Vía Pública` : "Soporte no encontrado",
    description: soporte ? `Detalles de ${soporte.name} (${soporte.category}).` : undefined,
  }
}

export default async function SoportePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const soportes = await getSoportes()
  const soporte = soportes.find((s) => s.id === Number(id))

  if (!soporte) {
    notFound()
  }

  const pricing = getPricingType(soporte.category)
  const color = CATEGORY_COLORS[soporte.category]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="h-20" />

      <section className="container mx-auto px-4 py-10 md:py-14">
        <Link
          href="/soportes"
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          ← Volver a todos los soportes
        </Link>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Imagen */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            {soporte.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={soporte.imageUrl || "/placeholder.svg"}
                alt={soporte.name}
                className="h-full max-h-[480px] w-full object-cover"
              />
            )}
          </div>

          {/* Info */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                {soporte.category}
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-bold uppercase tracking-tight text-primary md:text-4xl">
              {soporte.name}
            </h1>

            <div className="mb-6 space-y-2 rounded-xl bg-gray-50 p-5 text-sm text-dark-text">
              {soporte.size && (
                <p>
                  <span className="font-semibold">Tamaño: </span>
                  {soporte.size}
                </p>
              )}
              <p>
                <span className="font-semibold">Modalidad: </span>
                {pricing === "digital"
                  ? "Se cotiza por pases/día y días de campaña."
                  : "Se cotiza por meses de alquiler."}
              </p>
              <p className="text-xs text-gray-400">
                Lat: {soporte.lat.toFixed(5)} · Lng: {soporte.lng.toFixed(5)}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/presupuesto?soporte=${soporte.id}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Ver ubicación en el mapa
              </Link>
              <Link
                href="https://wa.me/5493875193941"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
