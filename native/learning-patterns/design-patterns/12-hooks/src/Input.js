import React, { useState, useEffect } from 'react'

export default function Input() {
  const [input, setInput] = useState('')

  useEffect(() => {
    console.log(`The user typed ${input}`)
  }, [input])

  return <input onChange={(e) => setInput(e.target.value)} value={input} placeholder="Type something..." />
}


// useEffect:  The useEffect Hook is used to run code during major lifecycle events in a
// function component. The main body of a function component does not allow
// mutations, subscriptions, timers, logging, and other side effects. If they are
// allowed, it could lead to confusing bugs and inconsistencies within the UI. The useEffect hook prevents 
// all of these "side effects" and allows the UI to run smoothly. It is a combination of 
// componentDidMount , componentDidUpdate , and componentWillUnmount, all in one place.

export default function Input() {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`The user typed ${input}`);
  }, [input]);

  return (
    <input
      onChange={e => setInput(e.target.value)}
      value={input}
      placeholder="Type something..."
    />
  );
}

