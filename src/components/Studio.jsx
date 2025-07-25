import React from 'react'

const Studio = () => {
  return (
    <section id="pelarium" className="section bg-mondrian-yellow">
      <div className="container">
        <div className="mondrian-grid grid-cols-1 lg:grid-cols-3 gap-1">
          <div className="bg-mondrian-black p-8 text-mondrian-white">
            <h2 className="font-black text-4xl md:text-5xl mb-8 tracking-wider">
              PELARIUM
            </h2>
            <p className="font-bold text-xl leading-tight">
              Un Concepto Único
            </p>
          </div>
          
          <div className="bg-mondrian-white p-8 border-4 border-mondrian-black">
            <div className="image-placeholder mb-6">
              THEATER
              <br />
              PERFORMANCE
            </div>
            <p className="text-mondrian-black leading-relaxed font-medium">
              PELARIUM representa la fusión entre teatro, imagen y personalidad. 
              Un espacio donde convergen la experiencia teatral y el desarrollo 
              de la imagen personal, creando una experiencia transformadora única.
            </p>
          </div>
          
          <div className="bg-mondrian-red p-8 text-mondrian-white">
            <div className="image-placeholder mb-6">
              ARTISTIC
              <br />
              COLLABORATION
            </div>
            <p className="leading-relaxed font-medium">
              Más que un servicio, es una experiencia que integra el arte escénico 
              con el desarrollo de la identidad visual personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Studio
