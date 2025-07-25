import React from 'react'

const Contact = () => {
  return (
    <section id="turnos" className="section bg-mondrian-red">
      <div className="container">
        <div className="mondrian-grid grid-cols-1 lg:grid-cols-3 gap-1 mb-16">
          <div className="bg-mondrian-white p-8 border-4 border-mondrian-black">
            <h2 className="font-black text-3xl md:text-5xl text-center text-mondrian-black tracking-wider">
              TURNOS
            </h2>
          </div>
          <div className="bg-mondrian-yellow p-8">
            <h2 className="font-black text-3xl md:text-5xl text-center text-mondrian-black tracking-wider">
              Y
            </h2>
          </div>
          <div className="bg-mondrian-blue p-8">
            <h2 className="font-black text-3xl md:text-5xl text-center text-mondrian-white tracking-wider">
              CONTACTO
            </h2>
          </div>
        </div>
        
        <div className="mondrian-grid grid-cols-1 md:grid-cols-2 gap-1 mb-12">
          <div className="bg-mondrian-white border-4 border-mondrian-black p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-mondrian-blue p-4 mr-4">
                <span className="text-mondrian-white text-3xl font-black">📧</span>
              </div>
              <div className="bg-mondrian-yellow p-2">
                <div className="image-placeholder w-20 h-20">
                  EMAIL
                  <br />
                  ICON
                </div>
              </div>
            </div>
            
            <h3 className="font-black text-2xl mb-6 text-mondrian-black uppercase text-center">
              Solicitar Turno
            </h3>
            <div className="bg-mondrian-red p-4 mb-6 border-4 border-mondrian-black">
              <p className="font-black text-mondrian-white text-center text-lg">
                turnos@granado.com.ar
              </p>
            </div>
            <p className="text-mondrian-black mb-6 font-medium text-center">
              Proponer día y dos horarios alternativos
            </p>
            <div className="text-center">
              <a 
                href="mailto:turnos@granado.com.ar?subject=Solicitud%20de%20Turno&body=Hola,%20me%20gustaría%20solicitar%20un%20turno.%20Mis%20horarios%20disponibles%20son:%0A%0A1.%20%0A2.%20%0A%0AGracias."
                className="btn btn-primary inline-block"
              >
                Enviar Email
              </a>
            </div>
          </div>
          
          <div className="bg-mondrian-white border-4 border-mondrian-black p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-mondrian-red p-4 mr-4">
                <span className="text-mondrian-white text-3xl font-black">📍</span>
              </div>
              <div className="bg-mondrian-blue p-2">
                <div className="image-placeholder w-20 h-20">
                  MAP
                  <br />
                  LOCATION
                </div>
              </div>
            </div>
            
            <h3 className="font-black text-2xl mb-6 text-mondrian-black uppercase text-center">
              Dirección
            </h3>
            <div className="bg-mondrian-yellow p-4 mb-6 border-4 border-mondrian-black">
              <p className="font-black text-mondrian-black text-center text-lg">
                Av. Corrientes 1719
                <br />
                Piso 6°
              </p>
            </div>
            <p className="text-mondrian-black mb-6 font-medium text-center">
              Ciudad Autónoma de Buenos Aires
            </p>
            <div className="text-center">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Av.+Corrientes+1719,+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-yellow inline-block"
              >
                Ver en Mapa
              </a>
            </div>
          </div>
        </div>
        
        <div className="mondrian-grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="bg-mondrian-blue p-6">
            <div className="image-placeholder">
              OFFICE
              <br />
              INTERIOR
            </div>
          </div>
          <div className="bg-mondrian-white border-4 border-mondrian-black p-8 text-center">
            <h3 className="font-black text-xl mb-4 text-mondrian-black uppercase">
              Horarios de Atención
            </h3>
            <p className="text-mondrian-black font-medium">
              Para coordinar una cita, por favor envíe un email con su disponibilidad.
              <br />
              Responderemos a la brevedad para confirmar el encuentro.
            </p>
          </div>
          <div className="bg-mondrian-yellow p-6">
            <div className="image-placeholder">
              CONSULTATION
              <br />
              ROOM
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
