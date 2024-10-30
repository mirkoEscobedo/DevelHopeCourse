import { useState } from 'react';
import GithubUser from './GithubUser';

const GithubUsers = () => {
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState('');

  function handleOnSubmit(event) {
    event.preventDefault();
    setUserList([...userList, name]);
    setName('');
  }
  return (
    <>
      <form
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <input
          name="username"
          type="text"
          placeholder="username"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <button type="submit">Fetch</button>
      </form>
      {userList.map((user, index) => {
        return <GithubUser key={index} username={user}></GithubUser>;
      })}
    </>
  );
};
export default GithubUsers;
