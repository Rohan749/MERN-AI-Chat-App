import React from 'react'
import Button from './common/Button'
import InputField from './common/InputField'
import ChatBubble from './common/ChatBubble'

const ChatSection = () => {
  return (
    <div className='p-5 relative h-full'>
        <div className='h-full overflow-y-scroll max-h-[30rem]'>
        <ChatBubble user={false} text="hey what's up"/>
        <ChatBubble user={true} text="I'm good how are you?"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        <ChatBubble user={false} text="I'm good too"/>
        </div>
        <div className='absolute bottom-1 left-1 flex gap-2'>
            <InputField label='Type your message...'  />
            <Button>Send</Button>
        </div>
    </div>
  )
}

export default ChatSection