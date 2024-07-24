const student = {
  name: 'Laura',
  age: 20,
  classRoom: 'classRoom',
  address: {
    street: 'Duomo',
    city: 'Milano',
  },
};

Object.freeze(student);

student.name = 'Piero';
student.surname = 'mauro';
console.log(student);

for ( let key in student) {
    console.log(key, student[key]);
}
