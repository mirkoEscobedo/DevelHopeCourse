import { useState } from 'react';

export function useCounter(init = 0) {
  const [count, setCount] = useState(init);

  const handleIncrement = (by) => {
    setCount((c) => c + by);
  };
  const handleDecrement = (by) => {
    setCount((c) => c - by);
  };

  const handleReset = () => {
    setCount(init);
  };

  return {
    counter: count,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}
