const studenti = [
  { nome: 'Alice', voto: 95 },
  { nome: 'Bob', voto: 88 },
  { nome: 'Carol', voto: 76 },
  { nome: 'David', voto: 92 },
  { nome: 'Eve', voto: 84 },
];

studenti.forEach((studente) => {
  console.log(studente.nome);
});

console.log(
  studenti.find((student) => {
    return student.voto > 90;
  })
);

let media =
  studenti.reduce((tot, student) => {
    return tot + student.voto;
  }, 0) / studenti.length;
console.log(media);
let toUppercase = studenti.map((student) => student.nome.toUpperCase());
console.log(toUppercase);
console.log(studenti.filter((student) => student.voto > 85));
