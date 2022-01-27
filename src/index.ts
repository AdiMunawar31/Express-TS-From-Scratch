import express, { Application, Request, Response } from 'express';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.routes();
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send("From TS routes");
        })
    }
}

const PORT: number = 5000;

const app = new App().app;
app.listen(PORT, () => console.log(`🔥Server Running in http://localhost:${PORT}`));