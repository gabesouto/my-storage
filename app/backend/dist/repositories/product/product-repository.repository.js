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
const product_model_1 = __importDefault(require("../../models/product.model"));
class ProductRepository {
    constructor() {
        this.model = product_model_1.default;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findAll();
        });
    }
    create(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create({
                name: req.name,
                brand: req.brand,
                color: req.color,
                price: req.price,
                model: req.model
            });
        });
    }
    bulkCreate(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProducts = [];
            yield Promise.all(req.map((product) => __awaiter(this, void 0, void 0, function* () {
                const { name, brand, color, price, model } = product;
                const createdProduct = yield this.model.create({
                    name,
                    brand,
                    color,
                    price,
                    model,
                });
                newProducts.push(createdProduct);
            })));
            return newProducts;
        });
    }
    update(req, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.update(req, {
                where: { id: id }
            });
            const updatedProduct = yield this.model.findByPk(id);
            if (!updatedProduct)
                return "product not found";
            return updatedProduct;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const productToDelete = yield this.model.findByPk(id);
            if (!productToDelete)
                return "book not found";
            productToDelete === null || productToDelete === void 0 ? void 0 : productToDelete.destroy();
            return null;
        });
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=product-repository.repository.js.map