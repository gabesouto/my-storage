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
const user_service_1 = __importDefault(require("../service/user.service"));
const http_status_enum_1 = require("./http-status.enum");
const api_exceptions_1 = require("../helpers/api-exceptions");
class UserController {
    constructor(userService = new user_service_1.default()) {
        this.userService = userService;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.create(req.body);
                if (user.data === 'Usuário já cadastrado') {
                    throw new api_exceptions_1.BadRequestError(user.data);
                }
                res.status(http_status_enum_1.HTTPStatus.CREATED).json(user.data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.login(req.body);
                if (user.data === 'Credenciais incorretas') {
                    throw new api_exceptions_1.BadRequestError(user.data);
                }
                res.status(http_status_enum_1.HTTPStatus.OK).json(user.data);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map