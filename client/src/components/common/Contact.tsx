import React from 'react'
import Typography from './Typography'

const Contact = () => {
  return (
    <div className='border-b-2 border-b-red-300 py-2 flex items-center justify-between'>
        <div className='flex gap-1 items-center'>
            <div className='rounded-full bg-red-300 h-5 w-5'/>
            <Typography size='xs'>
                Rohan
            </Typography>
        </div>
        <div className='h-1 w-1 bg-green-500 p-1 rounded-full'/>
    </div>
  )
}

export default Contact