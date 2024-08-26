const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32,
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO',
  },
  {
    id: 2,
    jobTitle: 'Project Manager',
  },
  {
    id: 3,
    jobTitle: 'Developer',
  },
];

function fetchPersonById(persons, id) {
  return new Promise((ok, err) => {
    setTimeout(() => {
      let foundPerson = persons.find((person) => {
        person.id == id;
      });
      if (foundPerson !== undefined) {
        ok(foundPerson);
      } else {
        err(`there is no user with id of ${id}`);
      }
    }, 2000);
  });
}

function fetchJobById(jobs, id) {
  return new Promise((ok, err) => {
    let foundJob = jobs.find((job) => job.id == id);
    setTimeout(() => {
      if (foundJob !== undefined) {
        ok(foundJob);
      } else {
        err(`there is no job with this id: ${id}`);
      }
    }, 1000);
  });
}

fetchJobById(jobs, 2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

function go(persons, jobs, id) {
  Promise.all([fetchPersonById(persons, id), fetchJobById(jobs, id)])
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

go(persons, jobs, 2);
