import express from 'express';
import morgan from 'morgan';
import Joi from 'joi';
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  createImage,
} from './controllers/planets';
import { logIn, logOut, singUp } from './controllers/users';
import multer from 'multer';
import { authorize } from './controllers/authorize';
import './passport';

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
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});
app.get('/api/planets', getAll);

app.get('/api/planets/:id', getOneById);

app.post('/api/planets', (req, res) => {
  create(req, res);
});

app.put('/api/planets/:id', (req, res) => {
  updateById(req, res);
});

app.delete('/api/planets/:id', deleteById);

app.post('/api/planets/:id/image', upload.single('image'), createImage);

app.post('/api/users/signup', singUp);
app.post('/api/users/login', logIn);
app.get('/api/users/logout', authorize, logOut);
app.listen(process.env.PORT, () => {
  console.log('Serving on https://Localhost:3000');
});
