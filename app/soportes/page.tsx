import { readFile } from "node:fs/promises"
import path from "node:path"
import { Header } from "@/components/header"
import { SupportsFull } from "@/components/supports-full"
import { Footer } from "@/components/footer"
import type { Soporte } from "@/lib/presupuesto/types"

async function getSoportes(): Promise<Soporte[]> {
  const file = path.join(process.cwd(), "public", "data", "soportes.json")
  const raw = await readFile(file, "utf-8")
  return JSON.parse(raw) as Soporte[]
}

export default async function SoportesPage() {
  const soportes = await getSoportes()

  return (
    <main className="min-h-screen">
      <Header />
      {/* Spacer for fixed header */}
      <div className="h-20" />
      <SupportsFull soportes={soportes} />
      <Footer />
    </main>
  )
}
