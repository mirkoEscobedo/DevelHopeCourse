import { Request, Response } from 'express';
import Joi from 'joi';
import pgPromise from 'pg-promise';

const db = pgPromise()('postgress://postgress:001510@localhost:5432/test_db');

console.log(db);
type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: 'Earth',
  },
  {
    id: 2,
    name: 'Mars',
  },
];

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

function getAll(req: Request, res: Response) {
  res.status(200).json(planets);
}

function getOneById(req: Request, res: Response) {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).json(planet);
}

function create(req: Request, res: Response) {
  const { id, name } = req.body;
  const newPlanet: Planet = { id, name };
  const validatePlanet = planetSchema.validate(newPlanet);
  if (validatePlanet.error) {
    return res.status(400).json({ msg: validatePlanet.error });
  } else {
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: 'planet created' });
  }
}

function updateById(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.body;
  const validatePlanet = planetSchema.validate({ id: id, name: name });
  if (validatePlanet.error) {
    return res.status(400).json({ msg: validatePlanet.error });
  } planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
    res.status(200).json({ msg: 'planet updated' });
}

function deleteById(req: Request, res: Response) {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));
  res.status(200).json({ msg: `planet ${id} deleted'` });
}

export { getAll, getOneById, create, updateById, deleteById };
