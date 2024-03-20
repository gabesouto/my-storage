"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const user_repository_1 = __importDefault(require("../repositories/user/user.repository"));
const jwt_util_1 = __importDefault(require("../helpers/jwt.util"));
class UserService {
    constructor(repository = new user_repository_1.default()) {
        this.repository = repository;
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password, username }) {
            const hashPassword = yield (0, bcryptjs_1.hash)(password, 10);
            const userExists = yield this.repository.getUser(email);
            if (userExists) {
                return { data: "Usuário já cadastrado" };
            }
            const newUser = yield this.repository.create({ email, password: hashPassword, username });
            const response = {
                email: newUser.email,
                username: newUser.username
            };
            return { data: response };
        });
    }
    login(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            const userExists = yield this.repository.getUser(email);
            if (!userExists) {
                return { data: "Credenciais incorretas" };
            }
            const verifyPass = (0, bcryptjs_1.compareSync)(password, userExists.password);
            if (!verifyPass) {
                return { data: "Credenciais incorretas" };
            }
            const token = jwt_util_1.default.enter({ id: userExists.id, email: userExists.email });
            const response = {
                email: userExists.email,
                username: userExists.username,
                token: token
            };
            return { data: response };
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map