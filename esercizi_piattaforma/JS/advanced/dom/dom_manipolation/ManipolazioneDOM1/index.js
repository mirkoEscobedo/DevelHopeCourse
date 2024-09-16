const input = document.getElementById('input');
const list = document.getElementById('list');

const addProduct = () => {
  const value = input.value.trim();

  const newTask = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const text = document.createElement('span');
  text.textContent = value;

  newTask.appendChild(checkbox);
  newTask.appendChild(text);

  list.appendChild(newTask);
  input.value = '';
};
