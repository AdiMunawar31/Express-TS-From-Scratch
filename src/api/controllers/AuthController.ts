import { Request, Response } from "express";
import db from "../db/models";
import user from "../db/models/user";
import Authentication from "../utils/Authentication";
const DB: any = db;
const { users } = DB;

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body;

        const hashedPassword: string = await Authentication.PasswordHash(password);
        await users.create({
            username: username,
            password: hashedPassword
        });

        return res.send("Register Sukses!");
    }

    login = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body;

        const user = await users.findOne({
            where: { username }
        });

        const comparePassword = await Authentication.PasswordCompare(password, user.password);

        if (comparePassword) {
            const token = Authentication.generateToken(user.id, user.username, user.password);

            return res.send({ token });
        }

        return res.send('Authentication failed!');

    }
}

export default new AuthController();