import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Studio from './components/Studio'
import CV from './components/CV'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-mondrian-white text-mondrian-black font-sans">
      <Navigation />
      <Hero />
      <Studio />
      <CV />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
