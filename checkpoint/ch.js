let students = [
  { name: 'Alice', age: 20, grades: [85, 92, 88] },
  { name: 'Bob', age: 22, grades: [70, 80, 75] },
  { name: 'Charlie', age: 23, grades: [95, 90, 93] },
  { name: 'David', age: 21, grades: [60, 65, 70] },
  { name: 'Eve', age: 20, grades: [78, 82, 85] },
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + ' ' + students[i].age);
}

students.forEach((student) => {
  console.log('La media dello studente è ' + media(student.grades));
});

function media(numArray) {
  let count = 0;
  for (let i = 0; i < numArray.length; i++) {
    count += numArray[i];
  }
  return count / numArray.length;
}
