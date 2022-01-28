import usersController from "../controllers/UserController";
import BaseRoutes from "../helpers/BaseRoutes";
import { authMiddleware } from "../middlewares/AuthMiddleware";

class UserRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/', authMiddleware, usersController.index);
        this.router.post('/', usersController.create);
        this.router.get('/:id', usersController.show);
        this.router.put('/:id', usersController.update);
        this.router.delete('/:id', usersController.delete);
    }
}

export default new UserRoutes().router;