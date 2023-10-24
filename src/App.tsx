import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(new Date().toTimeString())

  useEffect(() => {
    setTimeout(() => {
      setCount(new Date().toTimeString())
    }, 1000)
  }, [count])

  return (
    <>
      <div>
        Hello World {count}
      </div>
    </>
  )
}

export default App
