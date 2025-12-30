export function Metrics() {
  return (
    <section className="bg-[#F6EFE6] py-16 md:py-20 rounded-t-[3rem] -mt-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
          {/* Metric 1 */}
          <div className="text-center">
            <div className="font-sans font-bold text-6xl md:text-7xl text-[#8B1E24] mb-4 uppercase tracking-tight">
              +25 AÑOS
            </div>
            <p className="font-serif text-lg md:text-xl text-[#333333]">De experiencia en el mercado</p>
          </div>

          {/* Metric 2 */}
          <div className="text-center">
            <div className="font-sans font-bold text-6xl md:text-7xl text-[#8B1E24] mb-4 uppercase tracking-tight">
              +300
            </div>
            <p className="font-serif text-lg md:text-xl text-[#333333]">Soportes publicitarios disponibles</p>
          </div>
        </div>
      </div>
    </section>
  )
}
