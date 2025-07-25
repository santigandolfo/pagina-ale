import React from 'react'

const Container = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`max-w-6xl mx-auto px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
