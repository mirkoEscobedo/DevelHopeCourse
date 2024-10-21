import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
  };

  const resetTodo = () => {
    setTodos([]);
  };
  return (
    <>
      <input
        name="todo"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      ></input>
      <button onClick={addTodo}>Add todo</button>
      <button onClick={resetTodo}>Reset todos</button>
      <ul>
        {todos.map((todo, index) => {
          <li key={index}>
            {todo}
            <button onClick={removeTodo}>Remove todo</button>;
          </li>;
        })}
      </ul>
    </>
  );
};
export default TodoList;
