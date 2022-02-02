import AuthController from "../controllers/AuthController";
import BaseRoutes from "../helpers/BaseRoutes";
import { authMiddleware } from "../middlewares/AuthMiddleware";
import authValidation from "../validations/AuthValidation";

class AuthRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post('/register', authValidation, AuthController.register);
        this.router.post('/login', authValidation, AuthController.login);
        this.router.get('/profile', authMiddleware, AuthController.profile);
    }
}

export default new AuthRoutes().router;