import { useState, useEffect } from 'react';
function Counter({ init, increment }) {
  const [count, setCount] = useState(init);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h2>count is: {count}</h2>
      <button onClick={() => setCount(count + increment)}></button>
    </>
  );
}

export default Counter;