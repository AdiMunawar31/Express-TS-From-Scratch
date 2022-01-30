import { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'

const authValidation = [
    check('username').isString(),
    check('password').isLength({ min: 6 }),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }

        next();
    }
]

export default authValidation;