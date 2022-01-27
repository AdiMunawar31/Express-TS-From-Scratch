import { Request, Response } from "express";
import IController from "./ControllerInterface";

class UsersController implements IController {
    /**
     * Display a listing of the resources
     * 
     * @param req Request
     * @param res Response
     */
    index(req: Request, res: Response): Response {
        return res.send("From UsersController");
    }

    /**
     * Show the form for creating a new resources,
     * Store a newly created resource in storage
     * 
     * @param req Request
     * @param res Response
     */
    create(req: Request, res: Response): Response {
        return res.send(req.body);
    }

    /**
    * Display the specified resources
    * 
    * @param req Request
    * @param res Response
    */
    show(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }

    /**
     * Show the form for editing the specified resources,
     * Update a specified resources in a storage
     * 
     * @param req Request
     * @param res Response
     */
    update(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }

    /**
   * Remove the specified resource from storage
   * 
   * @param req Request
   * @param res Response
   */
    delete(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }

}

export default new UsersController();