import React from 'react'

const ImagePlaceholder = ({ 
  children, 
  height = '200px',
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`bg-gradient-to-br from-gray-200 to-gray-300 border-4 border-mondrian-black flex items-center justify-center text-gray-600 font-bold text-xs text-center ${className}`}
      style={{ minHeight: height }}
      {...props}
    >
      {children}
    </div>
  )
}

export default ImagePlaceholder
