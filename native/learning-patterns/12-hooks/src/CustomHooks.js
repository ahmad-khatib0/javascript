import React from 'react'

export default function Input() {
  const [input, setInput] = React.useState('')
  const pressQ = useKeyPress('q')
  const pressW = useKeyPress('w')
  const pressL = useKeyPress('l')

  React.useEffect(() => {
    console.log(`The user pressed Q!`)
  }, [pressQ])

  React.useEffect(() => {
    console.log(`The user pressed W!`)
  }, [pressW])

  React.useEffect(() => {
    console.log(`The user pressed L!`)
  }, [pressL])

  return <input onChange={(e) => setInput(e.target.value)} value={input} placeholder="Type something..." />
}



export default function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = React.useState(false);

  function handleDown({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleDown);

    return () => {
      window.removeEventListener("keydown", handleDown);
    };
  }, []);

  return keyPressed;
}

