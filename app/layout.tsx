import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N6JJJ5FG');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>

      <body className={`${poppins.variable} ${lora.variable} font-serif antialiased`}>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6JJJ5FG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
