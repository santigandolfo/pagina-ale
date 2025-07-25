import React from 'react'

const Studio = () => {
  return (
    <>
      <section id="estudio" className="section bg-mondrian-white">
        <div className="container">
          <div className="mondrian-grid grid-cols-1 lg:grid-cols-4 gap-1 mb-16">
            <div className="bg-mondrian-red p-8 lg:col-span-4">
              <h2 className="font-black text-4xl md:text-6xl text-center text-mondrian-white tracking-wider">
                ESTUDIO
              </h2>
            </div>
          </div>
          
          <div className="mondrian-grid grid-cols-1 md:grid-cols-3 gap-1 mb-12">
            <div className="bg-mondrian-yellow p-8 text-mondrian-black">
              <div className="image-placeholder mb-6">
                BEFORE/AFTER
                <br />
                TRANSFORMATION
              </div>
              <p className="font-bold text-lg leading-tight">
                "El estilo está presente en todas las cosas: en los colores, en la indumentaria, 
                en los perfumes y en los espacios."
              </p>
            </div>
            
            <div className="bg-mondrian-white p-8 border-4 border-mondrian-black">
              <h3 className="font-black text-2xl mb-6 text-mondrian-black uppercase">
                Filosofía del Estilo
              </h3>
              <p className="text-mondrian-black leading-relaxed mb-6">
                Entendemos que la imagen va más allá de las tendencias. Se trata de encontrar 
                y expresar la esencia única de cada persona, creando un lenguaje visual que 
                comunique autenticidad y personalidad.
              </p>
              <div className="image-placeholder">
                STYLE CONSULTATION
                <br />
                PROCESS
              </div>
            </div>
            
            <div className="bg-mondrian-blue p-8 text-mondrian-white">
              <div className="image-placeholder mb-6">
                WARDROBE
                <br />
                EXAMPLES
              </div>
              <h3 className="font-black text-2xl mb-6 uppercase">
                Asesoramiento Integral
              </h3>
              <p className="leading-relaxed">
                Trabajamos de manera integral abordando todos los aspectos que conforman 
                la imagen personal: vestimenta, colores, proporciones, y el desarrollo 
                de un estilo personal coherente y auténtico.
              </p>
            </div>
          </div>
        </div>
      </section>

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
    </>
  )
}

export default Studio
