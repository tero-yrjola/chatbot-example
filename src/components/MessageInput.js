import React, {useState} from 'react'

function MessageInput({addNewMessage}) {
  const [input, setInput] = useState('');

  const onSubmit = value => {
    setInput('');
    addNewMessage({text: value, isFromBot: false});
  };

  return (
      <div className="user-input">
        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
        <button onClick={() => onSubmit(input)}>Submit</button>
      </div>
  )
}

export default MessageInput