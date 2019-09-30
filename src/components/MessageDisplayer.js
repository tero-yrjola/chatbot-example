import React from 'react'
import Message from './Message'

function MessageDisplayer({ messages }) {
  return (
      <div className="messages">
        {messages.map((message, index) => <Message key={index} message={message.text} isFromBot={message.isFromBot}/>)}
      </div>
  )
}

export default MessageDisplayer