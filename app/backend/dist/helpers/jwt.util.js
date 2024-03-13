"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/utils/jwt.util.ts
const jsonwebtoken_1 = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || 'secret';
function enter(payload) {
    const token = (0, jsonwebtoken_1.sign)(payload, secret, { expiresIn: '8h' });
    return token;
}
function decodedToken(token) {
    const data = (0, jsonwebtoken_1.verify)(token, secret);
    return data;
}
exports.default = {
    enter,
    decodedToken,
};
//# sourceMappingURL=jwt.util.js.map