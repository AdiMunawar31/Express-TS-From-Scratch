import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): any => {
    let isLogin: boolean = true;

    if (isLogin) next();
    return res.send('Unauthorized!');
}