import { Request, Response } from "express";

class AuthController {
    login(req: Request, res: Response): Response {
        return res.send("Login");
    }
    register(req: Request, res: Response): Response {
        return res.send("register");
    }
}

export default new AuthController();