import pgPromise from 'pg-promise';

const db = pgPromise()('postgress://postgres:001510@localhost:5432/test_db');

const setupDb = async () => {
  await db.none(
    `DROP TABLE IF EXISTS planets;

    CREATE TABLE planets (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT
    );
    DROP TABLE IF EXISTS users;
    
    CREATE TABLE users(
        id SERIAL NOT NULL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT
    );
    `
  );
  await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
  await db.none(`INSERT INTO users (username, password) VALUES ('blob', 'efafae')`);
};
setupDb();

console.log(db);

export { db };
