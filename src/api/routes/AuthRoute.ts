import AuthController from "../controllers/AuthController";
import BaseRoutes from "../helpers/BaseRoutes";

class AuthRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/login', AuthController.login);
        this.router.post('/register', AuthController.register);
    }
}

export default new AuthRoutes().router;