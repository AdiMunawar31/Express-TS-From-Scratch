import { Request, Response } from "express";
import db from "../db/models";
import PasswordHash from "../utils/PasswordHash";
const DB: any = db;
const { user } = DB;

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body;

        const hashedPassword: string = await PasswordHash.hash(password);
        await user.create({
            username: username,
            password: hashedPassword
        });

        return res.send("Register Sukses!");
    }
    login(req: Request, res: Response): Response {
        return res.send("Login");
    }
}

export default new AuthController();