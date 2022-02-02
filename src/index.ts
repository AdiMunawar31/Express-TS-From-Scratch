import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import UsersRoute from './api/routes/UserRoute';
import AuthRoute from './api/routes/AuthRoute';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
        dotenv.config();
    }

    protected plugins(): void {
        /* Get Body Request JSON */
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))

        // Logger dengan morgan
        this.app.use(morgan('dev'));

        // Beberapa Library Pendukung
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send("From TS routes");
        })

        this.app.use('/api/v1/users', UsersRoute);
        this.app.use('/api/v1/auth', AuthRoute);
    }
}

const app = new App().app;
app.listen(process.env.PORT, () => console.log(`🔥Server is Running in http://localhost:${process.env.PORT}`));