import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      {age > 18 && <Age age={age}></Age>}
      {age && <Age age={age}></Age>}
      {age > 18 && age < 65 && <Age age={age}></Age>}
      {age > 18 && name === 'John' && <Age age={age}></Age>}
      <Message age={age}></Message>
    </div>
  );
}

function Message({ age }) {
  return (
    <div>
      {age > 18 ? <Age age={age}></Age> : <p>You are very young!</p>}
    </div>
  );
}
function Age({ age }) {
  return <p>Your age is {age}</p>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Welcome name={'John'} age={18}></Welcome>
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
  );
}

export default App;
