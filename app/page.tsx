import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Metrics } from "@/components/metrics"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Metrics />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
