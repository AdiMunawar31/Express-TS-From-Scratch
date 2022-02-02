import { Request, Response } from "express";
import IController from "../interface/ControllerInterface";
import TodoService from "../services/TodoServices";

class TodoController implements IController {
    /**
     * Display a listing of the resources
     * 
     * @param req Request
     * @param res Response
     */
    index = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: TodoService = new TodoService(req);
            const todos = await service.getAll()

            return res.send(todos);
        } catch (err) {
            return res.send(err);
        }
    }

    /**
     * Show the form for creating a new resources,
     * Store a newly created resource in storage
     * 
     * @param req Request
     * @param res Response
     */
    create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: TodoService = new TodoService(req);
            const todos = await service.store()

            return res.send(todos);
        } catch (err) {
            return res.send(err)
        }
    }

    /**
    * Display the specified resources
    * 
    * @param req Request
    * @param res Response
    */
    show = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: TodoService = new TodoService(req);
            const todo = await service.getOne()

            return res.send(todo);
        } catch (err) {
            return res.send(err);
        }
    }

    /**
     * Show the form for editing the specified resources,
     * Update a specified resources in a storage
     * 
     * @param req Request
     * @param res Response
     */
    update = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: TodoService = new TodoService(req);
            const todo = await service.update()

            return res.send({
                message: "Todo is Updated!",
                data: todo
            })
        } catch (err) {
            return res.send(err);
        }
    }

    /**
   * Remove the specified resource from storage
   * 
   * @param req Request
   * @param res Response
   */
    delete = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: TodoService = new TodoService(req);
            const todo = await service.delete()

            return res.send({
                message: "Todo is Deleted!",
                data: todo
            })
        } catch (err) {
            return res.send(err)
        }
    }

}

export default new TodoController();