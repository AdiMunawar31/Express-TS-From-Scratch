import { Request, Response } from "express";
import IController from "../interface/ControllerInterface";
import db from "../db/models";
const DB: any = db;
const { todo } = DB;

class TodoController implements IController {
    /**
     * Display a listing of the resources
     * 
     * @param req Request
     * @param res Response
     */
    index = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.app.locals.credential;

        try {
            const todos = await todo.findAll({
                where: { user_id: id },
                attributes: ['id', 'description']
            });

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
        const { id } = req.app.locals.credential;
        const { description } = req.body;

        try {
            const todos = await todo.create({ user_id: id, description });

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
        const { id: user_id } = req.app.locals.credential;
        const { id } = req.params;

        try {
            const todos = await todo.findOne({
                where: { id, user_id }
            });

            return res.send(todos);
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
        const { id: user_id } = req.app.locals.credential;
        const { id } = req.params;
        const { description } = req.body;

        try {
            await todo.update({
                description
            }, {
                where: { id, user_id }
            });

            return res.send("Todo is Updated!")
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
        const { id: user_id } = req.app.locals.credential;
        const { id } = req.params;

        try {
            await todo.destroy({
                where: { id, user_id }
            });

            return res.send('Todo is Deleted!');
        } catch (err) {
            return res.send(err)
        }
    }

}

export default new TodoController();