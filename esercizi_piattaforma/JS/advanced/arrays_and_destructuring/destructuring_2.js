const student = {
  info: { name: 'Bob', age: 25 },
  grades: { math: 95, science: 89 },
};

// const name = student.info.name;
// const age = student.info.age;
const voto = student.grades;

const { info, grades } = student;
const { name, age } = info;

console.log(name, age, voto);
