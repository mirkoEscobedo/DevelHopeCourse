function Welcome({ name, age }) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      <Age age={age}></Age>
    </div>
  );
}

function Age({ age }) {
  return <p>Your age is {age}</p>;
}
export default Welcome;
