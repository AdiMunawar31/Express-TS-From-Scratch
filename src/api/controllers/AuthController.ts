import { Request, Response } from "express";
import db from "../db/models";
const DB: any = db;
const { user } = DB;

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;
        await user.create({ username, password });
        return res.send("Register Sukses!");
    }
    login(req: Request, res: Response): Response {
        return res.send("Login");
    }
}

export default new AuthController();