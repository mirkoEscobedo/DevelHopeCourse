import { useEffect, useState } from 'react';
export function Clock() {
  const currentTime = new Date();

  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    console.log('qui');
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <h2>{time.toLocaleTimeString()}</h2>;
}
