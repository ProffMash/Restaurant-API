"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bothuserres = exports.bothresdriver = exports.restaurant_ownerRoleAuth = exports.driverRoleAuth = exports.userRoleAuth = exports.adminRoleAuth = exports.authMiddleware = exports.verifyToken = void 0;
require("dotenv/config");
const jwt_1 = require("hono/jwt");
// AUTHENTICATION MIDDLEWARE
const verifyToken = async (token, secret) => {
    try {
        const decoded = await (0, jwt_1.verify)(token, secret);
        return decoded;
    }
    catch (error) {
        return null;
    }
};
exports.verifyToken = verifyToken;
// AUTHORIZATION MIDDLEWARE
const authMiddleware = async (c, next, requiredRole) => {
    const token = c.req.header("Authorization");
    if (!token)
        return c.json({ error: "Token not provided" }, 401);
    const decoded = await (0, exports.verifyToken)(token, process.env.JWT_SECRET);
    if (!decoded)
        return c.json({ error: "Invalid token" }, 401);
    if (decoded.role !== requiredRole)
        return c.json({ error: "Unauthorized" }, 401);
    await next();
};
exports.authMiddleware = authMiddleware;
const adminRoleAuth = async (c, next) => await (0, exports.authMiddleware)(c, next, "admin");
exports.adminRoleAuth = adminRoleAuth;
const userRoleAuth = async (c, next) => await (0, exports.authMiddleware)(c, next, "user");
exports.userRoleAuth = userRoleAuth;
const driverRoleAuth = async (c, next) => await (0, exports.authMiddleware)(c, next, "driver");
exports.driverRoleAuth = driverRoleAuth;
const restaurant_ownerRoleAuth = async (c, next) => await (0, exports.authMiddleware)(c, next, "restaurant_owner");
exports.restaurant_ownerRoleAuth = restaurant_ownerRoleAuth;
const bothresdriver = async (c, next) => await (0, exports.authMiddleware)(c, next, "driver" || "restaurant_owner");
exports.bothresdriver = bothresdriver;
const bothuserres = async (c, next) => await (0, exports.authMiddleware)(c, next, "user" || "restaurant_owner");
exports.bothuserres = bothuserres;
