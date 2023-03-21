import express, { Application } from "express"
import userRoutes from '../routes/user'

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.routes();
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running on port ' + this.port);
        });
    }

}

export default Server;