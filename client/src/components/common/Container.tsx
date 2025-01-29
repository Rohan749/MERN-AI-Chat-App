import React, { ReactNode } from 'react'

interface containerProps {
    children: ReactNode;
}

const Container = ({children}: containerProps) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}

export default Container