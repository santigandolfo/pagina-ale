import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-mondrian-black border-t-8 border-mondrian-white">
      <div className="container py-12">
        <div className="mondrian-grid grid-cols-1 md:grid-cols-4 gap-1">
          <div className="bg-mondrian-red p-6">
            <div className="image-placeholder">
              MIGUEL
              <br />
              GRANADO
              <br />
              LOGO
            </div>
          </div>
          
          <div className="bg-mondrian-white border-4 border-mondrian-black p-6 md:col-span-2 text-center">
            <p className="font-black text-xl mb-4 text-mondrian-black uppercase tracking-wide">
              Miguel Granado
            </p>
            <p className="text-mondrian-black font-medium mb-4">
              Estudio de Imagen y Personalidad
            </p>
            <div className="mondrian-grid grid-cols-2 gap-1">
              <div className="bg-mondrian-yellow p-2">
                <p className="text-mondrian-black font-bold text-sm">
                  Teatro
                </p>
              </div>
              <div className="bg-mondrian-blue p-2">
                <p className="text-mondrian-white font-bold text-sm">
                  Imagen
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-mondrian-yellow p-6">
            <div className="image-placeholder">
              SOCIAL
              <br />
              MEDIA
              <br />
              LINKS
            </div>
          </div>
        </div>
        
        <div className="mondrian-grid grid-cols-1 gap-1 mt-8">
          <div className="bg-mondrian-white border-4 border-mondrian-black p-4 text-center">
            <p className="text-mondrian-black font-bold">
              © {currentYear} Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
