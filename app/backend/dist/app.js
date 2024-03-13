"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        // this.error();
        this.app.get('/', (req, res) => res.json({ ok: true }));
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(accessControl);
    }
    routes() {
        this.app.use(router_1.default);
    }
    // private error():void {
    //   this.app.use(errorMiddleware)  
    // }
    start() {
        this.app.listen(3001, () => console.log(`Running on port 3001`));
        this.app.get("/", (req, res) => {
            res.send("server is running");
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map