"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userController = new user_controller_1.default();
const userRouter = (0, express_1.Router)();
userRouter.post('/signup', (req, res, next) => userController.create(req, res, next));
userRouter.post('/signin', (req, res, next) => userController.login(req, res, next));
exports.default = userRouter;
//# sourceMappingURL=user.route.js.map