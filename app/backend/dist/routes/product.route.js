"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const productRouter = (0, express_1.Router)();
const productController = new product_controller_1.default();
productRouter.get('/products', (req, res) => productController.getAllProducts(req, res));
productRouter.post('/products', (req, res) => productController.createProduct(req, res));
productRouter.put('/products/:id/', (req, res) => productController.updateProduct(req, res));
productRouter.delete('/products/:id/', (req, res) => productController.deleteProduct(req, res));
exports.default = productRouter;
//# sourceMappingURL=product.route.js.map