import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const images = [
    { placeholder: 'BEFORE/AFTER\nTRANSFORMATION 1' },
    { placeholder: 'STYLE CONSULTATION\nPROCESS' },
    { placeholder: 'WARDROBE\nEXAMPLES' },
    { placeholder: 'COLOR ANALYSIS\nSESSION' },
    { placeholder: 'PROFESSIONAL\nMAKEOVER' },
    { placeholder: 'PERSONAL STYLING\nRESULTS' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

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
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="bg-mondrian-white border-8 border-mondrian-black p-8 md:p-12">
          
          {/* Main Title Section - Stacked Vertically */}
          <div className="text-center mb-12">
            <div className="mondrian-grid grid-cols-1 gap-1 max-w-md mx-auto">
              <div className="bg-mondrian-red p-6">
                <h1 className="font-black text-4xl md:text-6xl text-mondrian-white tracking-wider">
                  GRANADO
                </h1>
              </div>
              <div className="bg-mondrian-yellow p-4">
                <p className="text-xl md:text-2xl font-bold text-mondrian-black uppercase tracking-wide">
                  Artista de la cabeza
                </p>
              </div>
            </div>
          </div>
          
          {/* Full Text Blocks Side by Side */}
          <div className="mondrian-grid grid-cols-1 lg:grid-cols-2 gap-1 mb-12">
            <div className="bg-mondrian-blue p-8 text-mondrian-white">
              <p className="font-bold text-lg leading-relaxed">
                La imagen no es solo cuestión de moda, sino de personalidad.
                <br /><br />
                El buen gusto tiene que ver con una actitud frente a la vida y como elegimos llevarla.
                <br /><br />
                Nuestras elecciones nos identifican, nos definen y nos descubren.
              </p>
            </div>
            <div className="bg-mondrian-yellow p-8 text-mondrian-black">
              <p className="font-bold text-lg leading-relaxed">
                Nuestras elecciones nos identifican, nos definen y nos descubren.
                <br /><br />
                El estilo esta presente en todas las cosas: en los colores, en la indumentaria, en los perfumes y en los espacios. Cada una de estas elecciones cotidianas encierra el secreto de una personalidad única.
              </p>
            </div>
          </div>
          
          {/* ESTUDIO Section with Image Carousel */}
          <div id="estudio" className="mondrian-grid grid-cols-1 gap-1">
            <div className="bg-mondrian-red p-6">
              <h2 className="font-black text-3xl md:text-5xl text-center text-mondrian-white tracking-wider">
                ESTUDIO
              </h2>
            </div>
            
            {/* Image Carousel */}
            <div className="bg-mondrian-black p-4">
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="image-placeholder mx-2" style={{ minHeight: '400px' }}>
                          {image.placeholder}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Controls */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-mondrian-red border-4 border-mondrian-white p-3 hover:bg-mondrian-blue transition-colors duration-300"
                >
                  <span className="text-mondrian-white font-black text-xl">←</span>
                </button>
                
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-mondrian-red border-4 border-mondrian-white p-3 hover:bg-mondrian-blue transition-colors duration-300"
                >
                  <span className="text-mondrian-white font-black text-xl">→</span>
                </button>
                
                {/* Slide Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 border-2 border-mondrian-white transition-colors duration-300 ${
                        currentSlide === index ? 'bg-mondrian-yellow' : 'bg-mondrian-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
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
