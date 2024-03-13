"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_enum_1 = require("../controllers/http-status.enum");
function loginValidation(req, res, next) {
    const payload = req.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRequiredLength = 6;
    if (!emailRegex.test(payload.email) || payload.password.length < passwordRequiredLength) {
        return res.status(http_status_enum_1.HTTPStatus.BAD_REQUEST).json({ message: 'Invalid email or password' });
    }
    next();
}
exports.default = loginValidation;
//# sourceMappingURL=loginValidation.js.map