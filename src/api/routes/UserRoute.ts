import { Router } from "express";
import usersController from "../controllers/UserController";
import IRouter from "../interface/RouteInterface";

class UserRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/', usersController.index);
        this.router.post('/', usersController.create);
        this.router.get('/:id', usersController.show);
        this.router.put('/:id', usersController.update);
        this.router.delete('/', usersController.delete);
    }
}

export default new UserRoutes().router;