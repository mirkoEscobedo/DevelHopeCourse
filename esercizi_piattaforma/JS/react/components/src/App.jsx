import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Hello() {
  return (<div><h2>Hello, World!</h2><Message></Message></div>)
}

function Message() {
  return <p>What a beautiful day!</p>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hello></Hello>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// yes the component return a template that you can use in another component so the number of components is irrelevant, if you use the medage component within App you can render it 

export default App
