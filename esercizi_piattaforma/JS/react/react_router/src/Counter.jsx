import { useState } from 'react';

export function Counter({ init, increment }) {
  const [count, setCount] = useState(init);
  function counter() {
    setCount(count + increment);
  }
  return (
    <button onClick={counter}>
      Add {increment} to {count}
    </button>
  );
}
