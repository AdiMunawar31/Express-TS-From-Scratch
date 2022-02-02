import { Request } from "express";
import db from "../db/models";
const DB: any = db;
const { todo } = DB;

class TodoService {
    credential: {
        id: number,
    };
    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.credential = req.app.locals.credential;
        this.body = req.body;
        this.params = req.params;
    }

    getAll = async () => {
        const todos = await todo.findAll({
            where: { user_id: this.credential.id },
            attributes: ['id', 'description']
        });

        return todos;
    }

    store = async () => {
        const { description } = this.body;

        const todos = await todo.create({
            user_id: this.credential.id,
            description
        });

        return todos;
    }

    getOne = async () => {
        const { id } = this.params;

        const todos = await todo.findOne({
            where: {
                id,
                user_id: this.credential.id
            }
        });

        return todos;
    }

    update = async () => {
        const { id } = this.params;
        const { description } = this.body;

        const todos = await todo.update({
            description
        }, {
            where: {
                id,
                user_id: this.credential.id
            }
        });

        return todos;
    }

    delete = async () => {
        const { id } = this.params;

        const todos = await todo.destroy({
            where: {
                id,
                user_id: this.credential.id
            }
        });

        return todos;
    }
}

export default TodoService;