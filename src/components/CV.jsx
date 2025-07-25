import React from 'react'

const CV = () => {
  const education = [
    { year: '2008', content: 'Marketing y comercialización USVC' },
    { year: '2006', content: 'Dirección de actores Prof. Siro Zorzoli' },
    { year: '2005', content: 'Dramaturgia teatral Prof. Mauricio Kartun' },
    { year: '2004', content: 'Puesta en escena Prof. R. Schumajer' },
    { year: '2003', content: 'Puesta en escena Prof. R. Schumajer' },
    { year: '2003', content: 'Iluminación Prof. Gonzalo Cordova' },
    { year: '2002', content: 'Iluminación Prof. M. Rinaldi' },
    { year: '2001', content: 'Dirección Prof. Juan Carlos Gene' },
    { year: '2001/2', content: 'Escenografía Prof. Gastón Breyer' },
    { year: '2000/4', content: 'Pintura Prof. Carlos Gorriarena' },
    { year: '1999', content: 'Heurística U.B.A. Cátedra Facultad de Arquitectura' },
    { year: '1999/0', content: 'Semiótica U.B.A. Cátedra Facultad de Arquitectura' },
    { year: '1998/9', content: 'Escenografía Prof. Gastón Breyer' },
    { year: '1998/7', content: 'Vestuario Prof. Evelin Bernsorkof / Jorge Morages' },
    { year: '1996', content: 'Iluminación U.B.A. Cátedra Facultad de Cine' },
    { year: '1995', content: 'Caracterización y Maquillaje Teatral Prof. O. Paz' },
    { year: '1994', content: 'Clown Prof. Raquel Socolovich' },
    { year: '1992/3/4', content: 'Teatro Prof. Benjamín Telias' }
  ]

  const workExperience = [
    { year: '2014', content: 'Prod. Ejec. Teatral de La Ogresa de Barracas / Gonzalo Demaria' },
    { year: '2013', content: 'Prod. Ejec. Teatral La maestra serial de Gonzalo Demaria' },
    { year: '2011', content: 'Fundador del periódico recomendador de artes y espectáculos Planeando sobre BUE' },
    { year: '2008', content: 'Dirección del periódico BA Voice' },
    { year: '2007', content: 'Prod. ejec. Ópera de San Isidro. L´italiana en Argel.' },
    { year: '2006', content: 'Prod. Ejec. "Novia con tulipanes" Portón de Sanchez. Dir .G Demaria' },
    { year: '2005', content: 'Actor "Estirpe Salvaje" T. Patio de actores. Dirección Helena Tritek' },
    { year: '2004', content: 'Actor "Estirpe Salvaje" T. Abasto Club Social. Dirección Helena Tritek' },
    { year: '2004', content: 'Prod. Ejec. "Lo Que Habló El Pescado". Dir .Gonzalo Demaria.' },
    { year: '2004', content: 'Dirección "Pelarium" Teatro Maipo' },
    { year: '2002', content: 'Asistente de Dirección "Para que las canciones" Dir. Helena Tritek' },
    { year: '2001', content: 'Asistente de Dir. y producción "En la Columna" Dir. Helena Tritek' },
    { year: '2001', content: 'Escenografía "Los Justos" de Albert Camus' },
    { year: '2000', content: 'Asistente de dirección "El Pobre Hombre" T.M.G.S.M. Dir. Tritek' },
    { year: '2000', content: 'Escenografía "Quien quiere mucho a mama" Dir. Luís Ciceros' },
    { year: '1999/98', content: 'Dirección Espectáculo PELOSHOW Teatro Maipo' },
    { year: '1997', content: 'Dirección Espectáculo Net Hair Bishop T. P. Mitre' }
  ]

  return (
    <section id="cv" className="section bg-mondrian-white">
      <div className="container">
        <div className="mondrian-grid grid-cols-1 lg:grid-cols-2 gap-1 mb-16">
          <div className="bg-mondrian-blue p-8">
            <h2 className="font-black text-4xl md:text-6xl text-center text-mondrian-white tracking-wider">
              CURRÍCULUM
            </h2>
          </div>
          <div className="bg-mondrian-red p-8">
            <h2 className="font-black text-4xl md:text-6xl text-center text-mondrian-white tracking-wider">
              VITAE
            </h2>
          </div>
        </div>
        
        <div className="mondrian-grid grid-cols-1 lg:grid-cols-3 gap-1 mb-12">
          <div className="bg-mondrian-yellow p-6">
            <div className="image-placeholder">
              PROFESSIONAL
              <br />
              HEADSHOTS
            </div>
          </div>
          <div className="bg-mondrian-white p-6 border-4 border-mondrian-black lg:col-span-2">
            <h3 className="font-black text-2xl mb-6 text-mondrian-black uppercase text-center">
              Trayectoria Profesional
            </h3>
            <p className="text-mondrian-black text-center font-medium">
              Más de 25 años de experiencia en teatro, producción y desarrollo de imagen personal
            </p>
          </div>
        </div>
        
        <div className="mondrian-grid grid-cols-1 lg:grid-cols-2 gap-1">
          <div className="bg-mondrian-white border-4 border-mondrian-black p-8">
            <div className="flex items-center mb-8">
              <div className="bg-mondrian-red p-4 mr-4">
                <h3 className="font-black text-xl text-mondrian-white uppercase">Formación</h3>
              </div>
              <div className="bg-mondrian-yellow p-2">
                <div className="image-placeholder w-16 h-16">
                  STUDY
                </div>
              </div>
            </div>
            
            <div className="timeline-mondrian">
              {education.slice(0, 10).map((item) => (
                <div key={`edu-${item.year}-${item.content.substring(0, 10)}`} className="timeline-item-mondrian">
                  <div className="bg-mondrian-white border-4 border-mondrian-black p-4 mb-4">
                    <div className="font-black text-mondrian-red text-lg mb-2">{item.year}</div>
                    <p className="text-mondrian-black text-sm font-medium">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-mondrian-white border-4 border-mondrian-black p-8">
            <div className="flex items-center mb-8">
              <div className="bg-mondrian-blue p-4 mr-4">
                <h3 className="font-black text-xl text-mondrian-white uppercase">Experiencia</h3>
              </div>
              <div className="bg-mondrian-red p-2">
                <div className="image-placeholder w-16 h-16">
                  WORK
                </div>
              </div>
            </div>
            
            <div className="timeline-mondrian">
              {workExperience.slice(0, 10).map((item) => (
                <div key={`work-${item.year}-${item.content.substring(0, 10)}`} className="timeline-item-mondrian">
                  <div className="bg-mondrian-white border-4 border-mondrian-black p-4 mb-4">
                    <div className="font-black text-mondrian-blue text-lg mb-2">{item.year}</div>
                    <p className="text-mondrian-black text-sm font-medium">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mondrian-grid grid-cols-1 md:grid-cols-4 gap-1 mt-12">
          <div className="bg-mondrian-red p-6">
            <div className="image-placeholder">
              THEATER
              <br />
              WORK
            </div>
          </div>
          <div className="bg-mondrian-blue p-6">
            <div className="image-placeholder">
              PRODUCTIONS
              <br />
              GALLERY
            </div>
          </div>
          <div className="bg-mondrian-yellow p-6">
            <div className="image-placeholder">
              AWARDS &
              <br />
              RECOGNITION
            </div>
          </div>
          <div className="bg-mondrian-white border-4 border-mondrian-black p-6">
            <div className="image-placeholder">
              PRESS &
              <br />
              MEDIA
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV
