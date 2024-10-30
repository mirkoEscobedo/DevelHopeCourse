import { useState } from 'react';

const Container = ({ children, title }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          border: '4px solid red',
          color: 'black',
        }}
      >
        <h1 onClick={() => setCollapsed(collapsed === false ? true : false)}>
          {title}
        </h1>
        {collapsed && <div>{children}</div>}
      </div>
    </>
  );
};

export default Container;
