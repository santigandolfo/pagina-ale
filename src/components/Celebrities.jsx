import React from 'react'

const Celebrities = () => {
  const celebrities = [
    { name: 'MARÍA ELENA WALSH', placeholder: 'CELEBRITY\nPORTRAIT 1' },
    { name: 'SUSANA GIMÉNEZ', placeholder: 'CELEBRITY\nPORTRAIT 2' },
    { name: 'MORIA CASÁN', placeholder: 'CELEBRITY\nPORTRAIT 3' },
    { name: 'MIRTHA LEGRAND', placeholder: 'CELEBRITY\nPORTRAIT 4' },
    { name: 'MARÍA JULIA OLIVÁN', placeholder: 'CELEBRITY\nPORTRAIT 5' },
    { name: 'ANDREA POLITTI', placeholder: 'CELEBRITY\nPORTRAIT 6' },
    { name: 'GEORGINA BARBAROSSA', placeholder: 'CELEBRITY\nPORTRAIT 7' },
    { name: 'LIZY TAGLIANI', placeholder: 'CELEBRITY\nPORTRAIT 8' }
  ]

  return (
    <section id="celebridades" className="section bg-mondrian-blue">
      <div className="container">
        <div className="mondrian-grid grid-cols-1 gap-1 mb-16">
          <div className="bg-mondrian-white border-4 border-mondrian-black p-8">
            <h2 className="font-black text-4xl md:text-6xl text-center text-mondrian-black tracking-wider">
              CELEBRIDADES
            </h2>
          </div>
        </div>
        
        <div className="mondrian-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {celebrities.map((celebrity, index) => {
            const colors = ['bg-mondrian-white', 'bg-mondrian-yellow', 'bg-mondrian-red', 'bg-mondrian-white'];
            const textColors = ['text-mondrian-black', 'text-mondrian-black', 'text-mondrian-white', 'text-mondrian-black'];
            const borderColors = ['border-mondrian-black', 'border-mondrian-black', 'border-mondrian-white', 'border-mondrian-black'];
            
            return (
              <div key={index} className={`${colors[index % colors.length]} p-6 border-4 ${borderColors[index % borderColors.length]}`}>
                <div className="image-placeholder mb-4" style={{ minHeight: '250px' }}>
                  {celebrity.placeholder}
                </div>
                <div className={`${colors[index % colors.length] === 'bg-mondrian-red' ? 'bg-mondrian-yellow' : 'bg-mondrian-red'} p-3 border-4 border-mondrian-black`}>
                  <h3 className={`font-black text-sm md:text-base ${colors[index % colors.length] === 'bg-mondrian-red' ? 'text-mondrian-black' : 'text-mondrian-white'} text-center uppercase tracking-wide`}>
                    {celebrity.name}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mondrian-grid grid-cols-1 md:grid-cols-3 gap-1 mt-12">
          <div className="bg-mondrian-yellow p-6 border-4 border-mondrian-black">
            <div className="image-placeholder">
              GROUP PHOTO
              <br />
              CELEBRITIES
            </div>
          </div>
          <div className="bg-mondrian-white border-4 border-mondrian-black p-6 text-center">
            <h3 className="font-black text-xl mb-4 text-mondrian-black uppercase">
              Trabajo con Figuras Públicas
            </h3>
            <p className="text-mondrian-black font-medium">
              Experiencia profesional en imagen y styling para personalidades del espectáculo, 
              televisión y teatro argentino.
            </p>
          </div>
          <div className="bg-mondrian-red p-6 border-4 border-mondrian-black">
            <div className="image-placeholder">
              BEHIND SCENES
              <br />
              STYLING
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Celebrities
