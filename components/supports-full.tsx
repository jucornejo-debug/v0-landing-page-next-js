export function SupportsFull() {
  const grandesFormatos = [
    { title: "Medianera Premium", location: "Av. 9 de Julio - CABA", image: "/large-building-wall-billboard.jpg" },
    { title: "Cartelera Gigante", location: "Panamericana Km 32", image: "/giant-highway-billboard.jpg" },
    { title: "Prisma Vial", location: "Acceso Oeste - Morón", image: "/highway-prism-billboard.jpg" },
  ]

  const vallados = [
    { title: "Vallado Obra", location: "Puerto Madero - CABA", image: "/construction-fence-advertising.jpg" },
    { title: "Cerco Perimetral", location: "Av. del Libertador", image: "/perimeter-fence-billboard.jpg" },
    { title: "Vallado Especial", location: "Palermo - CABA", image: "/special-construction-barrier-ads.jpg" },
  ]

  const digitales = [
    { title: "Pantalla LED XL", location: "Obelisco - CABA", image: "/large-led-screen-outdoor-advertising.jpg" },
    { title: "Display Digital", location: "Av. Corrientes", image: "/digital-display-outdoor-billboard.jpg" },
    { title: "Totem LED", location: "Shopping Unicenter", image: "/led-totem-digital-advertising.jpg" },
  ]

  return (
    <section id="soportes" className="bg-[#F6EFE6] py-20">
      <div className="container mx-auto px-4">
        {/* Header with Hero */}
        <div className="bg-[#8B1E24] rounded-3xl overflow-hidden mb-20">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-6 tracking-tight">
                TODOS NUESTROS
                <br />
                SOPORTES
              </h2>
              <button className="bg-white text-[#8B1E24] font-sans text-lg px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                Conocé más
              </button>
            </div>
            <div className="h-64 md:h-full min-h-[300px]">
              <img src="/outdoor-advertising-portfolio-showcase.jpg" alt="Soportes" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Grandes Formatos */}
        <div className="mb-20">
          <h3 className="font-sans font-bold text-3xl md:text-5xl text-[#8B1E24] uppercase mb-10 tracking-tight">
            GRANDES FORMATOS
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {grandesFormatos.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-sans font-bold text-xl text-[#8B1E24] uppercase mb-2 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="font-serif text-base text-[#333333]">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vallados */}
        <div className="mb-20">
          <h3 className="font-sans font-bold text-3xl md:text-5xl text-[#8B1E24] uppercase mb-10 tracking-tight">
            VALLADOS
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {vallados.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-sans font-bold text-xl text-[#8B1E24] uppercase mb-2 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="font-serif text-base text-[#333333]">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formatos Digitales */}
        <div>
          <h3 className="font-sans font-bold text-3xl md:text-5xl text-[#8B1E24] uppercase mb-10 tracking-tight">
            FORMATOS DIGITALES
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {digitales.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-sans font-bold text-xl text-[#8B1E24] uppercase mb-2 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="font-serif text-base text-[#333333]">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
