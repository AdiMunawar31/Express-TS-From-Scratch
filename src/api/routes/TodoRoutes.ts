import TodoController from "../controllers/TodoController";
import BaseRoutes from "../helpers/BaseRoutes";
import { authMiddleware } from "../middlewares/AuthMiddleware";
import todoValidation from "../validations/TodoValidation";

class TodoRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/', authMiddleware, TodoController.index);
        this.router.post('/', authMiddleware, todoValidation, TodoController.create);
        this.router.get('/:id', authMiddleware, TodoController.show);
        this.router.put('/:id', authMiddleware, todoValidation, TodoController.update);
        this.router.delete('/:id', authMiddleware, TodoController.delete);
    }
}

export default new TodoRoutes().router;