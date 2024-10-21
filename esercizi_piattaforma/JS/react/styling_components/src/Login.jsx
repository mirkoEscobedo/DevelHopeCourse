import { useState } from 'react';
export function onLogin(event) {
  console.log(JSON.stringify(event.target.value));
}
function Login({ onLogin }) {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  function handleUserData(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setUserData((data) => {
      const updated = { ...data };
      updated[name] = value;
      return updated;
    });
  }
  function isFilled() {
    if (!userData.username || !userData.password) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <form onSubmit={handleUserData}>
        <input
          name="username"
          type="text"
          onChange={handleUserData}
          value={userData.username}
          placeholder="username"
        ></input>
        <input
          type="password"
          name="password"
          onChange={handleUserData}
          value={userData.password}
          placeholder="password"
        ></input>
        <input
          name="remember"
          type="checkbox"
          onChange={handleUserData}
          value={userData.remember}
        ></input>
        <button
          className={`${userData.password.length < 8 ? 'red' : 'green'}`}
          disabled={isFilled()}
          onClick={onLogin}
          type="submit"
          name="submit"
        >
          Login
        </button>
        <button
          onClick={() => {
            setUserData({ username: '', password: '', remember: false });
          }}
        >
          Reset
        </button>
      </form>
    </>
  );
}

export default Login;
