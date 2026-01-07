import type React from "react"
import type { Metadata } from "next"
import { Poppins, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Publicidad en Vía Pública",
  description: "Más de 25 años de experiencia con más de 300 soportes publicitarios",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/Logo Nuevo PW.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Logo Nuevo PW.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Logo Nuevo PW.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/Logo Nuevo PW.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} ${lora.variable} font-serif antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
