import { useState } from 'react';
import Welcome from './Welcome';

function InteractiveWelcome() {
  const [name, setName] = useState('');

  function handleNameInputChange(event) {
    const value = event.target.value;
    setName(value);
  }
  return (
    <>
      <input value={name} onChange={handleNameInputChange}></input>
      <Welcome name={name}></Welcome>
    </>
  );
}
export default InteractiveWelcome;
