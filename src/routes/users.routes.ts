import { Request, Response, Router } from "express";
import usersController from "../controllers/users.controller";
import IRouter from "./RouteInterface";

class UserRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/', usersController.index);
        this.router.post('/', usersController.create);
    }
}

export default new UserRoutes().router;