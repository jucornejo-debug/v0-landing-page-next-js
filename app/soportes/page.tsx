import { Header } from "@/components/header"
import { SupportsFull } from "@/components/supports-full"
import { Footer } from "@/components/footer"

export default function SoportesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Spacer for fixed header */}
      <div className="h-20" />
      <SupportsFull />
      <Footer />
    </main>
  )
}
