import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
export function authorize(req: Request, res: Response, next: NextFunction) {
  passport.authenticate('jwt', { session: false }, (err: Error, user: any) => {
    if (!user || err) {
      res.status(401).json({ msg: 'unauthorized' });
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
}
