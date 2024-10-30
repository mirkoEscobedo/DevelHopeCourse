import { useCallback, useState } from 'react';

export function useCounter(init = 0) {
  const [count, setCount] = useState(init);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount((c) => c - 1);
  }, []);
  const reset = useCallback(() => {
    setCount(init);
  }, [init]);
  return { count, increment, decrement, reset };
}
