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
const http_status_enum_1 = require("./http-status.enum");
const product_service_1 = __importDefault(require("../service/product.service"));
class ProductController {
    constructor(productService = new product_service_1.default()) {
        this.productService = productService;
        this.getAllProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const produtcsResponse = yield this.productService.getAllProducts();
            if (produtcsResponse.status !== "OK") {
                return res.status(http_status_enum_1.HTTPStatus.BAD_REQUEST).json(produtcsResponse.data);
            }
            return res.status(http_status_enum_1.HTTPStatus.OK).json(produtcsResponse.data);
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productCreated = yield this.productService.createProduct(req.body);
            if (productCreated.status !== "OK") {
                return res.status(http_status_enum_1.HTTPStatus.BAD_REQUEST).json(productCreated.data);
            }
            return res.status(http_status_enum_1.HTTPStatus.CREATED).json(productCreated.data);
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const productUpdated = yield this.productService.updateProduct(req.body, id);
            if (productUpdated.status !== "OK") {
                return res.status(http_status_enum_1.HTTPStatus.BAD_REQUEST).json(productUpdated.data);
            }
            return res.status(http_status_enum_1.HTTPStatus.OK).json(productUpdated.data);
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const productDeleted = yield this.productService.deleteProduct(id);
            if (productDeleted.status !== "OK") {
                return res.status(http_status_enum_1.HTTPStatus.BAD_REQUEST).json(productDeleted.message);
            }
            return res.status(http_status_enum_1.HTTPStatus.OK).json();
        });
    }
}
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map