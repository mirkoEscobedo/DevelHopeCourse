import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import GithubUser from './GithubUser';
import GithubUsers from './GithubUsers';
import { Counter } from './Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/users">Users</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome name="Guest" />} />

          <Route path="/counter" element={<Counter />} />

          <Route path="/users" element={<GithubUsers />}>
            <Route index element={<p>Add a user and select it</p>} />

            <Route path=":username" element={<GithubUser />} />
          </Route>

          <Route path="*" element={<h2>404 - Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
