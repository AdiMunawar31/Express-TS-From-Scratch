import { Request, Response } from "express";
import IController from "../interface/ControllerInterface";

let data: any[] = [
    { id: 1, name: "Adi" },
    { id: 2, name: "Munawawar" }
]

class UsersController implements IController {
    /**
     * Display a listing of the resources
     * 
     * @param req Request
     * @param res Response
     */
    index(req: Request, res: Response): Response {
        return res.send(data);
    }

    /**
     * Show the form for creating a new resources,
     * Store a newly created resource in storage
     * 
     * @param req Request
     * @param res Response
     */
    create(req: Request, res: Response): Response {
        const { id, name } = req.body;

        const user = { id, name }
        data.push(user)

        return res.send("User telah di tambahkan!");
    }

    /**
    * Display the specified resources
    * 
    * @param req Request
    * @param res Response
    */
    show(req: Request, res: Response): Response {
        const { id } = req.params;

        let person = data.find(item => item.id == id);
        return res.send(person)
    }

    /**
     * Show the form for editing the specified resources,
     * Update a specified resources in a storage
     * 
     * @param req Request
     * @param res Response
     */
    update(req: Request, res: Response): Response {
        const { id } = req.params;
        const { name } = req.body;

        let person = data.find(item => item.id == id);
        person.name = name;

        return res.send("User telah di update");
    }

    /**
   * Remove the specified resource from storage
   * 
   * @param req Request
   * @param res Response
   */
    delete(req: Request, res: Response): Response {
        const { id } = req.params;

        let person = data.find(item => item.id != id);

        return res.send(person);
    }

}

export default new UsersController();