import * as dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { db } from './../db';
const { SECRET } = process.env;
const logIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await db.one('SELECT * FROM users WHERE username=$1', username);

  if (user && user.password === password) {
    const payload = { id: user.id, username };
    const token = jwt.sign(payload, SECRET!);
    await db.none('UPDATE users SET token=$2 WHERE id=$1', [user.id, token]);
    res.status(200).json({ id: user.id, username, token });
  } else {
    res.status(400).json({ msg: 'username of password incorrect' });
  }
};

async function singUp(req: Request, res: Response) {
  const { username, password } = req.body;
  const user = db.oneOrNone('SELECT * FROM users WHERE username=$1', username);

  if (user) {
    res.status(409).json({ msg: 'username already exists' });
  } else {
    const { id } = await db.one(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id',
      [username, password]
    );
    res.status(201).json({ id, msg: 'user created successfully' });
  }
}
async function logOut(req: Request, res: Response) {
  const user: any = req.user;
  console.log(user);
  await db.none('UPDATE users SET token=$2 WHERE id=$1', [user?.id, null]);
  res.status(200).json({ msg: 'logout success' });
}
export { logIn, singUp, logOut };
