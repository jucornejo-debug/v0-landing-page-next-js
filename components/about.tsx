import Image from "next/image"

export function About() {
  return (
    <section id="nosotros" className="bg-background py-20 md:py-32 leading-3">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div className="pl-6 md:pl-12">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary uppercase mb-8 tracking-tight">
              QUIENES SOMOS
            </h2>

            <div className="space-y-2 font-serif text-base md:text-lg text-dark-text leading-relaxed">
              <p className="text-foreground font-sans">
                Somos una empresa líder en publicidad exterior con más de 25 años de trayectoria en el mercado argentino.
              </p>
              <p className="text-foreground font-sans">
                Contamos con una amplia red de soportes publicitarios estratégicamente ubicados en las principales ciudades y rutas del país.
              </p>
              <p className="text-foreground font-sans">
                Nuestro compromiso es brindar soluciones efectivas de comunicación que potencien la visibilidad de tu marca y generen un impacto real en tu audiencia.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md w-full">
              <Image
                src="/Gran Formato Centro 2.jpg"
                alt="Nuestro equipo"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
