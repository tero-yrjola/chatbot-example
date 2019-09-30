import React, {useRef, useEffect} from 'react';
import ChatBot from './components/ChatBot'

function App() {
  const chatBotRef = useRef();
  const sendMessage = (message, isFromBot) => chatBotRef.current.addMessageFromOutside(message, isFromBot);

  useEffect(() =>
      //Here you could do some kind of fetch.then() combo. For example
      //axios.get('someurl').then(() =>
      sendMessage('This message was sent from App.js / useEffect (same as the old componentDidMount)', true)
      //)
  );

  return (
      <>
        <ChatBot ref={chatBotRef}/>

        <div style={{width: '100%', height: 3, backgroundColor: 'black', marginTop: 50}}/>
        <button onClick={() => sendMessage('Hello I am a message sent from App.js', true)}>Click me</button>
      </>
  );
}

export default App;
