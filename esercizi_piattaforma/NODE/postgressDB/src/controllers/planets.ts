//Ambush.txt YO IS THIS WRONG? <3
// import fs from 'node:fs';
// import path from 'node:path';
// import archiver from 'archiver';

// export async function createZipFromFiles(
//   filePaths: string[],
//   outputFilePath: string
// ): Promise<string> {
//   return new Promise((resolve, reject) => {
//     const output = fs.createWriteStream(outputFilePath);
//     const archive = archiver('zip', { zlib: { level: 9 } });

//     output.on('close', () => {
//       console.log(`${archive.pointer()} total bytes`);
//       console.log('Zip archive created successfully.');
//       resolve(outputFilePath);
//     });

//     archive.on('error', (err) => {
//       console.error('Error creating ZIP archive', err);
//       reject(err);
//     });

//     archive.pipe(output);

//     filePaths.forEach((filePath) => {
//       archive.file(filePath, { name: path.basename(filePath) });
//     });
//     console.log('finilizing archive...');
//     archive.finalize();
//     console.log('Archive finalized successfully.');
//   });
// }
import { Request, Response } from 'express';
import Joi from 'joi';
import pgPromise from 'pg-promise';

const db = pgPromise()('postgress://postgress:001510@localhost:5432/test_db');

const setupDb = async () => {
  await db.none(
    `DROP TABLE IF EXISTS planets;

    CREATE TABLE planets (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
    image TEXT
    );`
  );
  await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
};
setupDb();

console.log(db);
type Planet = {
  id: number;
  name: string;
};

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

async function getAll(req: Request, res: Response) {
  const planets = await db.many(`SELECT * FROM planets;`);
  res.status(200).json(planets);
}

async function getOneById(req: Request, res: Response) {
  const { id } = req.params;
  const planets = await db.oneOrNone(
    `SELECT * FROM planets WHERE id=$1;`,
    Number(id)
  );
  const planet = planets.find((p: Planet) => p.id === Number(id));
  res.status(200).json(planet);
}

async function create(req: Request, res: Response) {
  const planets = await db.many(`SELECT * FROM planets;`);
  const { name } = req.body;
  const newPlanet = { name };
  const validatePlanet = planetSchema.validate(newPlanet);
  if (validatePlanet.error) {
    return res.status(400).json({ msg: validatePlanet.error });
  } else {
    db.none(`INSERT INTO planets (name) VALUES ($1)`, name);

    res.status(201).json({ msg: 'planet created' });
  }
}

async function updateById(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.body;
  const validatePlanet = planetSchema.validate({ id: id, name: name });
  if (validatePlanet.error) {
    return res.status(400).json({ msg: validatePlanet.error });
  }
  await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);
  res.status(200).json({ msg: 'planet updated' });
}

async function deleteById(req: Request, res: Response) {
  const { id } = req.params;
  await db.none(`DELETE FROM planets WHERE id=$1`, Number(id));
  res.status(200).json({ msg: `planet ${id} deleted'` });
}

const createImage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const fileName = req.file?.path;

  if (fileName) {
    db.none(`UPDATE planets SET image=$2 WHERE id=$1`, [id, fileName]);
    res.status(201).json({ msg: 'planet image uploaded successfully' });
  } else {
    res.status(400).json({ msg: 'planet image failed to upload.' });
  }
};

export { getAll, getOneById, create, updateById, deleteById, createImage };
