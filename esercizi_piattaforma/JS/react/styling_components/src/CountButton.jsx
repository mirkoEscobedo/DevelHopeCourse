import { useState } from 'react';

export function CountButton({ init, increment }) {
  const [count, setCount] = useState(init);
  function counter() {
    setCount(count + increment);
  }
  return (
    <button style={{ fontSize: 32, color: 'yellow' }} onClick={counter}>
      Add {increment} to {count}
    </button>
  );
}
