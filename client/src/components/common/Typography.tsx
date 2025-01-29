import React, { ReactNode } from 'react'

interface typographyProps {
    children: ReactNode;
    size?: string;
    fw?: string
}

const Typography = ({children, size, fw}:typographyProps) => {
  return (
    <div className={`text-${size} font-${fw}`}>
        {children}
    </div>
  )
}

export default Typography