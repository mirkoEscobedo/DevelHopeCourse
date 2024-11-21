import express from 'express';
import morgan from 'morgan';
import Joi from 'joi';
import { getAll, getOneById, create, updateById, deleteById } from './controllers/planets';


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

const TODO: string = 'start writing your Express API server here :)';

console.log(TODO);

const app = express();
app.use(express.json())
app.use(morgan('dev'));

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});
app.get('/api/planets', getAll);

app.get('/api/planets/:id',getOneById);

app.post('/api/planets', create);

app.put('/api/planets/:id', updateById);

app.delete('/api/planets/:id', deleteById);

app.listen(process.env.PORT, () => {
  console.log('Serving on https://Localhost:3000');
});
