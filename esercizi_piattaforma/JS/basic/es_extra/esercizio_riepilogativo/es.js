const students = [
  { id: 1, name: 'Luca', surname: 'Rossi', age: 20, hobby: 'gamer' },
  { id: 2, name: 'Mario', surname: 'Bianchi', age: 24, hobby: 'sportsman' },
  { id: 3, name: 'Giovanna', surname: 'Brambilla', age: 26, hobby: 'gamer' },
  { id: 4, name: 'Carmelo', surname: 'Verdi', age: 18, hobby: 'photographer' },
];

function mottoSelector(student) {
  switch (student.hobby) {
    case 'gamer':
      return 'Life Is a Game, Play to Win!';
    case 'sportsman':
      return 'Never give up!';
    case 'photographer':
      return 'A picture is worth a thousand words!';
  }
}

function youngest(array) {
  let age = 200;
  let currentYoungest;
  for (let i = 0; i < array.length; i++) {
    if (array[i].age < age) {
      currentYoungest = array[i].name;
    }
  }
  return currentYoungest;
}

function longestSurname(array) {
  let longestSurname = '';

  for (let i = 0; i < array.length; i++) {
    if (array[i].surname.length > longestSurname.length) {
      longestSurname = array[i].surname;
    }
  }
  return longestSurname;
}

function arrayParser(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].name, mottoSelector(array[i]));
  }
  console.log('Il più giovane è ', youngest(array));
  console.log('Il cognome più lungo è ', longestSurname(array));
}

arrayParser(students);

students.splice(3, 0, {
  id: 5,
  name: 'Elena',
  surname: 'Pappalardo',
  age: 23,
  hobby: 'photographer',
});

arrayParser(students);
