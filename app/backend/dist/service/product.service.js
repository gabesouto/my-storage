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
const product_repository_repository_1 = __importDefault(require("../repositories/product/product-repository.repository"));
const product_dto_1 = require("./product.dto");
class ProductService {
    constructor(repository = new product_repository_repository_1.default()) {
        this.repository = repository;
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.repository.findAll();
            if (!products)
                return { status: 'BAD_REQUEST', message: "no products have be" };
            return { status: 'OK', data: products };
        });
    }
    createProduct(req) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Array.isArray(req)) {
                const newProducts = (0, product_dto_1.productDtoToProduct)(req);
                const createdProducts = yield this.repository.bulkCreate(newProducts);
                if (!createdProducts)
                    return { status: 'BAD_REQUEST', message: "no products have been created" };
                return { status: 'OK', data: createdProducts };
            }
            const newProduct = (0, product_dto_1.productDtoToProduct)(req);
            const createdProduct = yield this.repository.create(newProduct);
            if (!createdProduct)
                return { status: 'BAD_REQUEST', message: "no products have been created" };
            return { status: 'OK', data: createdProduct };
        });
    }
    updateProduct(req, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateData = (0, product_dto_1.productDtoToProduct)(req);
            const updatedProduct = yield this.repository.update(updateData, id);
            if (!updatedProduct)
                return { status: 'BAD_REQUEST', message: "no products have been updated" };
            return { status: 'OK', data: updatedProduct };
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            {
                const deletedProduct = yield this.repository.delete(id);
                if (deletedProduct)
                    return { status: 'BAD_REQUEST', message: "no products have been deleted" };
                return { status: 'OK' };
            }
        });
    }
}
exports.default = ProductService;
//# sourceMappingURL=product.service.js.map