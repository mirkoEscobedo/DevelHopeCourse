import { useState } from 'react';

export function useLogin() {
  const [userData, setUserData] = useState({ username: '', password: '' });
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setUserData((data) => {
      const updated = { ...data };
      updated[name] = value;
      return updated;
    });
  }
  return { userData, onSubmit: handleSubmit, onChange: handleSubmit };
}
