import React, { ReactNode } from 'react'

interface buttonProps {
    children: ReactNode
}

const Button = ({children, ...otherProps}: buttonProps) => {
  return (
    <button {...otherProps} className='custom_btn'>
        {children}
    </button>
  )
}

export default Button