import React from 'react'

const Button = ({ 
  children, 
  variant = 'default', 
  className = '', 
  ...props 
}) => {
  const baseClasses = "inline-block px-8 py-4 border-4 border-mondrian-black font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-sm transform hover:scale-105"
  
  const variants = {
    default: "bg-mondrian-white text-mondrian-black hover:bg-mondrian-red hover:text-mondrian-white",
    primary: "bg-mondrian-blue text-mondrian-white border-mondrian-blue hover:bg-mondrian-red hover:border-mondrian-red",
    yellow: "bg-mondrian-yellow text-mondrian-black border-mondrian-black hover:bg-mondrian-red hover:text-mondrian-white"
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
