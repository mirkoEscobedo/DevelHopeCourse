import { useState } from 'react';

export function Button({ init, increment }) {
  const [count, setCount] = useState(init);
  function counter() {
    setCount((count) => count + increment);
  }
  return (
    <button onClick={counter}>
      Add {increment} to {count}
    </button>
  );
}
