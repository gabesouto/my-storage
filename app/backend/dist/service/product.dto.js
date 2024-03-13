"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDtoToProduct = void 0;
const productDtoToProduct = (data) => {
    if (Array.isArray(data)) {
        return data.map(item => {
            const { name, brand, model, data: items } = item;
            const newData = items.map(dataItem => ({
                name,
                brand,
                model,
                price: dataItem.price,
                color: dataItem.color,
            }));
            return newData;
        }).flat();
    }
    if (Object.keys(data).includes("details")) {
        const { name, details: { brand, model, color }, price } = data;
        return {
            name,
            brand,
            model,
            color,
            price
        };
    }
    return data;
};
exports.productDtoToProduct = productDtoToProduct;
//# sourceMappingURL=product.dto.js.map