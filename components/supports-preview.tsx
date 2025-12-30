"use client"

export function SupportsPreview() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const supports = [
    {
      title: "Grandes Formatos",
      description: "Estructuras de gran tamaño ubicadas en puntos estratégicos de alta circulación vehicular.",
      image: "/large-outdoor-billboard-advertising.jpg",
    },
    {
      title: "Vallados",
      description: "Cerramientos perimetrales ideales para obras en construcción y eventos especiales.",
      image: "/construction-fence-advertising-panels.jpg",
    },
    {
      title: "Digitales",
      description: "Pantallas LED de última generación con contenido dinámico y programable.",
      image: "/digital-led-outdoor-advertising-screen.jpg",
    },
  ]

  return (
    <section className="bg-[#F6EFE6] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-6xl text-[#8B1E24] uppercase mb-4 tracking-tight">
            NUESTROS SOPORTES
          </h2>
          <p className="font-serif text-lg md:text-xl text-[#333333]">Variedad de formatos para cada necesidad</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-12">
          {supports.map((support, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={support.image || "/placeholder.svg"}
                  alt={support.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-sans font-bold text-2xl text-[#8B1E24] uppercase mb-3 tracking-tight">
                  {support.title}
                </h3>
                <p className="font-serif text-base text-[#333333] leading-relaxed">{support.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection("soportes")}
            className="bg-[#8B1E24] text-white font-sans text-lg px-10 py-4 rounded-lg hover:bg-[#6d1619] transition-colors shadow-lg"
          >
            Ver todos los soportes
          </button>
        </div>
      </div>
    </section>
  )
}
