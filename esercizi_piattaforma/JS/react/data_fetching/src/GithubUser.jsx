import { useEffect } from 'react';
import { useState } from 'react';

const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);
  async function fetchUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setUserData(json);
    } catch (e) {
      console.log(`${e} has occurred`);
      setUserData(null);
    }
  }
  useEffect(() => {
    fetchUser(username);
  }, [username]);

  return (
    <>
      {userData && (
        <div>
          <h1>{userData.name}</h1>
          <h3>{userData.login}</h3>
          <img src={`${userData.avatar_url}`} />
        </div>
      )}
    </>
  );
};
export default GithubUser;
