'use client'

import React, { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'estudio', label: 'ESTUDIO', color: 'bg-mondrian-yellow', textColor: 'text-mondrian-black' },
    { id: 'celebridades', label: 'CELEBRIDADES', color: 'bg-mondrian-blue', textColor: 'text-mondrian-white' },
    { id: 'pelarium', label: 'PELARIUM', color: 'bg-mondrian-red', textColor: 'text-mondrian-white' },
    { id: 'cv', label: 'CV', color: 'bg-mondrian-white', textColor: 'text-mondrian-black' },
    { id: 'turnos', label: 'TURNOS', color: 'bg-mondrian-red', textColor: 'text-mondrian-white' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-mondrian-white border-b-4 border-mondrian-black py-2' 
        : 'bg-mondrian-white border-b-4 border-mondrian-black py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <button 
          type="button"
          className="bg-mondrian-red px-6 py-3 border-4 border-mondrian-black cursor-pointer transition-all duration-300 hover:bg-mondrian-blue" 
          onClick={() => scrollToSection('home')}
        >
          <h2 className="text-mondrian-white text-xl font-black m-0 tracking-widest">MIGUEL GRANADO</h2>
        </button>
        
        <div className={`md:flex md:gap-2 md:items-center ${
          isMobileMenuOpen 
            ? 'absolute top-full left-0 right-0 bg-mondrian-white border-b-4 border-mondrian-black flex flex-col p-4 gap-2 opacity-100 visible translate-y-0' 
            : 'absolute top-full left-0 right-0 bg-mondrian-white border-b-4 border-mondrian-black flex flex-col p-4 gap-2 opacity-0 invisible -translate-y-full md:opacity-100 md:visible md:translate-y-0 md:relative md:top-auto md:left-auto md:right-auto md:bg-transparent md:p-0 md:flex-row md:border-0'
        } transition-all duration-300`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${item.color} ${item.textColor} border-4 border-mondrian-black font-black text-sm tracking-wider cursor-pointer px-4 py-2 uppercase transition-all duration-300 hover:scale-105 md:w-auto w-full`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          type="button"
          className="md:hidden bg-mondrian-yellow border-4 border-mondrian-black p-2 hover:bg-mondrian-red transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1">
            <span className="w-full h-1 bg-mondrian-black transition-all duration-300"></span>
            <span className="w-full h-1 bg-mondrian-black transition-all duration-300"></span>
            <span className="w-full h-1 bg-mondrian-black transition-all duration-300"></span>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navigation
