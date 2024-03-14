"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const auth_middleware_1 = require("../middlewares/auth-middleware");
const productRouter = (0, express_1.Router)();
const productController = new product_controller_1.default();
productRouter.get('/products', auth_middleware_1.authMiddleware, (req, res) => productController.getAllProducts(req, res));
productRouter.post('/products', auth_middleware_1.authMiddleware, (req, res) => productController.createProduct(req, res));
productRouter.put('/products/:id/', auth_middleware_1.authMiddleware, (req, res) => productController.updateProduct(req, res));
productRouter.delete('/products/:id/', auth_middleware_1.authMiddleware, (req, res) => productController.deleteProduct(req, res));
exports.default = productRouter;
//# sourceMappingURL=product.route.js.map