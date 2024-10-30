import { useState } from 'react';

export function useGithubuser(username) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      if (response.status !== 200) {
        setError(new Error());
      }
      setUserData(json);
    } catch (e) {
      console.log(`${e} has occurred`);
      setUserData(null);
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchUser(username);
  }, [username]);

  return { userData, isLoading: loading, error, onFetch: fetchUser };
}
