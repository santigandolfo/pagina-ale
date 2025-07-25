import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Celebrities from './components/Celebrities'
import Studio from './components/Studio'
import CV from './components/CV'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-mondrian-white text-mondrian-black font-sans">
      <Navigation />
      <Hero />
      <Celebrities />
      <Studio />
      <CV />
      <Contact />
    </div>
  )
}

export default App
