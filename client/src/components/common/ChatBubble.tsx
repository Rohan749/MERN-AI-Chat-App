import React from 'react'

interface chatBubbleProps {
    text: string;
    user: boolean;
}

const ChatBubble = ({text, user}:chatBubbleProps) => {
  return (
    <div className={`flex ${user ? "justify-end" : ""}`}>
    <div className={`p-3 my-1 rounded-2xl ${user ?  "bg-[#FFECEC] rounded-br-none text-[#8D5050]" :"bg-[#967BFF] rounded-bl-none text-white"}  text-white w-fit`}>
        {text}
    </div>
    </div>
  )
}

export default ChatBubble