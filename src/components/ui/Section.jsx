import React from 'react'

const Section = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <section 
      className={`py-16 relative border-b-4 border-mondrian-black ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}

export default Section
