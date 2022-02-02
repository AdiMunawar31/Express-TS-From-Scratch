import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): any => {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorization!');
    }

    const secret_key: any = process.env.JWT_SECRET_KEY;
    const token: string = req.headers.authorization?.split(" ")[1];

    try {
        const credential: string | object = jwt.verify(token, secret_key);

        if (credential) {
            req.app.locals.credential = credential;
            return next();
        }

        return res.send('Token is Invalid!');
    } catch (err) {
        return res.send(err);
    }
}