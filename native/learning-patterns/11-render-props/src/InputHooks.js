import React, { useState } from 'react'
import './styles.css'

import { useMutation } from '@apollo/react-hooks'
import { ADD_MESSAGE } from './resolvers'

export default function Input() {
  const [message, setMessage] = useState('')
  const [addMessage] = useMutation(ADD_MESSAGE, {
    variables: { message },
    onCompleted: () => console.log(`Added with hook: ${message} `),
  })

  return (
    <div className="input-row">
      <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type something..." />
      <button onClick={addMessage}>Add</button>
    </div>
  )
}
