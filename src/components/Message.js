import React from 'react'

function Message({message, isFromBot}) {
  return (
      <p style={isFromBot ? {textAlign: 'end'} : {textAlign: 'start'}}>
        {message}
      </p>
  )
}

export default Message