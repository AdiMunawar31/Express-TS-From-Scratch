import { Request, Response } from "express";
import Authentication from "../utils/Authentication";
import db from "../db/models";
const DB: any = db;
const { user } = DB;

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body;

        const hashedPassword: string = await Authentication.PasswordHash(password);
        await user.create({
            username: username,
            password: hashedPassword
        });

        return res.send("Register Sukses!");
    }

    login = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body;

        const users = await user.findOne({
            where: { username }
        });

        const comparePassword = await Authentication.PasswordCompare(password, users.password);

        if (comparePassword) {
            const token = Authentication.generateToken(users.id, users.username, users.password);

            return res.send({ token });
        }

        return res.send('Authentication failed!');
    }

    profile = (req: Request, res: Response): Response => {
        return res.send(req.app.locals.credential);
    }
}

export default new AuthController();