import { useState } from 'react'
import guru from '/guru.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src={guru} className="logo" alt="Vite logo" style={{ maxHeight: '70%', maxWidth: '80%'}}/>
          <h4>Salut, azi am instalat {count} prize</h4>
          <button onClick={() => setCount(count + 1)}>Dǎ o prizǎ!</button>
      </div>
    </>
  )
}

export default App
