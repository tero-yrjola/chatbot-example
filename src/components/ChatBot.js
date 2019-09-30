import React, {useState, forwardRef, useImperativeHandle} from 'react'
import MessageDisplayer from './MessageDisplayer'
import MessageInput from './MessageInput'

const ChatBot = forwardRef((props, ref) =>  {
  const [messages, setMessages] = useState([{text: 'This message was from the initial state in ChatBot.js', isFromBot: true}]);
  const addNewMessage = message => setMessages([...messages, message]);

  useImperativeHandle(ref, () => ({
    addMessageFromOutside(message, isFromBot) {
      setMessages([...messages, {text: message, isFromBot: isFromBot}]);
    }
  }));

  return (
      <div style={{textAlign: 'center'}}>
        <MessageDisplayer messages={messages}/>
        <MessageInput addNewMessage={addNewMessage}/>
      </div>
  )
});

export default ChatBot