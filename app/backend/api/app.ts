import  express from 'express';
import SequelizeProduct from './models/product.model';
import router from './routes/router';
import { errorMiddleware } from './middlewares/error';
import cors from 'cors';


class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();
    this.error();

    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(cors());

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.use(router);
    
  }

  private error():void {
    this.app.use(errorMiddleware)  
  }

  public start(): void {
    this.app.listen(3001, () => console.log(`Running on port 3001`))
    this.app.get("/", (req, res) => {
      res.send("server is running")
    })

}

}

export { App };

