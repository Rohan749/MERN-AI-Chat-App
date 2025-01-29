import React from 'react'
import Button from './common/Button'
import Typography from './common/Typography'

const Header = () => {
  return (
    <div className='flex items-center justify-between w-full p-3'>
        <div>
            <Typography size='lg' fw="bold">
                RCODE CHAT
            </Typography>
        </div>
        <div>
            <Button>Logout</Button>
        </div>
    </div>
  )
}

export default Header