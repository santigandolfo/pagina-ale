import React from 'react'

const MondrianGrid = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`grid gap-1 bg-mondrian-black p-1 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default MondrianGrid
