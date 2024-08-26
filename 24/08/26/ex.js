let orderedArr = [];
let toDoList = [
  { task: 'Buy groceries', priority: 'High' },
  { task: 'Clean the house', priority: 'Medium' },
  { task: 'Pay bills', priority: 'High' },
  { task: 'Walk the dog', priority: 'Low' },
  { task: 'Call mom', priority: 'Medium' },
];
let high = [];
let medium = [];
let low = [];

toDoList.forEach((item) => {
  if (item.priority == 'High') {
    high.push(item);
  } else if (item.priority == 'Medium') {
    medium.push(item);
  } else {
    low.push(item);
  }
});

orderedArr = [...high, ...medium, ...low];

console.log(orderedArr);
