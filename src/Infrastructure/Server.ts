import express, { Application } from 'express';
import cors from 'cors';
import { userRouter } from './UserRouter';

// import { ProductRouter } from '../../Application/Routes/ProductRoutes';
// import { dbConnection } from '../Connections/MongoDB/Connection';

class Server {
    public app: Application;
    public port: string | number;

    public usersRoutePath: string;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        // this.usersRoutePath = '/api/products';
        this.usersRoutePath = '/users';


        // Conectar a base de datos
        this.connectDB();
        // Middlewares
        this.middlewares();
        // Rutas
        this.routes();
    }

    // conexion a la base de datos
    async connectDB() {
        // await dbConnection();
    }

    middlewares() {
        // CORS: es un mecanismo que permite a los navegadores web acceder a recursos de otros servidores con el permiso de estos.
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        // Directorio Publico
        this.app.use(express.static('public'));;
    }

    routes() {
        // La ruta sería: this.usersRoutePath
        this.app.use(this.usersRoutePath, userRouter);
        // this.app.use("/users", userRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }

}

export default Server;
