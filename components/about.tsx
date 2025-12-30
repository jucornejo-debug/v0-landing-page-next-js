export function About() {
  return (
    <section id="nosotros" className="bg-[#F6EFE6] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="font-sans font-bold text-4xl md:text-6xl text-[#8B1E24] uppercase mb-8 tracking-tight">
              QUIENES
              <br />
              SOMOS
            </h2>

            <div className="space-y-6 font-serif text-lg md:text-xl text-[#333333] leading-relaxed">
              <p>
                Somos una empresa líder en publicidad exterior con más de 25 años de trayectoria en el mercado
                argentino.
              </p>
              <p>
                Contamos con una amplia red de soportes publicitarios estratégicamente ubicados en las principales
                ciudades y rutas del país.
              </p>
              <p>
                Nuestro compromiso es brindar soluciones efectivas de comunicación que potencien la visibilidad de tu
                marca y generen un impacto real en tu audiencia.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/professional-outdoor-advertising-team.jpg" alt="Nuestro equipo" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
