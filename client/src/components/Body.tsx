import React from 'react'
import Container from './common/Container'
import ContactList from './ContactList'
import ChatSection from './ChatSection'

const Body = () => {
  return (
    <div className='flex items-center justify-center h-[90vh] '>
        <Container>
            <div className='grid grid-cols-[30%_70%] w-full'>
                <div >
                  <ContactList />  
                </div>
                <div className=''>
                    <ChatSection />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Body