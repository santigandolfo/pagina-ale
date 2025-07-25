import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="bg-mondrian-white min-h-screen flex items-center justify-center relative overflow-hidden border-b-8 border-mondrian-black">
      {/* Mondrian-style geometric background */}
      <div className="absolute inset-0 mondrian-grid grid-cols-6 md:grid-cols-12 grid-rows-8">
        <div className="bg-mondrian-white"></div>
        <div className="bg-mondrian-red"></div>
        <div className="bg-mondrian-white col-span-2"></div>
        <div className="bg-mondrian-blue"></div>
        <div className="bg-mondrian-white col-span-3"></div>
        <div className="bg-mondrian-yellow md:block hidden"></div>
        <div className="bg-mondrian-white md:block hidden col-span-3"></div>
        
        <div className="bg-mondrian-white row-span-2"></div>
        <div className="bg-mondrian-yellow row-span-2"></div>
        <div className="bg-mondrian-white col-span-2 row-span-2"></div>
        <div className="bg-mondrian-white row-span-2"></div>
        <div className="bg-mondrian-red row-span-2 col-span-3"></div>
        <div className="bg-mondrian-white md:block hidden row-span-2"></div>
        <div className="bg-mondrian-blue md:block hidden row-span-2 col-span-3"></div>
        
        <div className="bg-mondrian-blue row-span-3 col-span-2"></div>
        <div className="bg-mondrian-white row-span-3 col-span-2"></div>
        <div className="bg-mondrian-yellow row-span-3"></div>
        <div className="bg-mondrian-white row-span-3 col-span-3"></div>
        <div className="bg-mondrian-red md:block hidden row-span-3 col-span-4"></div>
        
        <div className="bg-mondrian-white row-span-2 col-span-6 md:col-span-12"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <div className="bg-mondrian-white border-8 border-mondrian-black p-8 md:p-12 text-center">
          <div className="mondrian-grid grid-cols-1 md:grid-cols-3 gap-1 mb-8">
            <div className="bg-mondrian-red p-4">
              <div className="image-placeholder">
                MIGUEL GRANADO
                <br />
                PORTRAIT
              </div>
            </div>
            <div className="bg-mondrian-white p-4 md:col-span-2">
              <h1 className="font-black text-3xl md:text-5xl mb-4 text-mondrian-black tracking-wider">
                MIGUEL GRANADO
              </h1>
              <p className="text-lg md:text-xl mb-6 font-bold text-mondrian-black uppercase tracking-wide">
                Estudio de Imagen y Personalidad
              </p>
            </div>
          </div>
          
          <div className="mondrian-grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="bg-mondrian-yellow p-6 text-mondrian-black">
              <p className="font-bold text-base md:text-lg leading-tight">
                "La imagen no es solo cuestión de moda, sino de personalidad."
              </p>
            </div>
            <div className="bg-mondrian-blue p-6 text-mondrian-white">
              <p className="font-bold text-base md:text-lg leading-tight">
                "Nuestras elecciones nos identifican, nos definen y nos descubren."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-mondrian-red border-4 border-mondrian-black p-2 animate-bounce">
        <span className="text-mondrian-white text-2xl font-black">↓</span>
      </div>
    </section>
  )
}

export default Hero
