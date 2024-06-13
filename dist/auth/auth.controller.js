"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
require("dotenv/config");
const auth_service_1 = require("./auth.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("hono/jwt");
// Register user
const registerUser = async (c) => {
    try {
        const user = await c.req.json();
        const pass = user.password;
        const hashedPassword = await bcrypt_1.default.hash(pass, 10);
        user.password = hashedPassword;
        const createdUser = await (0, auth_service_1.createAuthUserService)(user);
        if (!createdUser)
            return c.text("User not created", 404);
        return c.json({ msg: createdUser }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.registerUser = registerUser;
// Login user
const loginUser = async (c) => {
    try {
        const user = await c.req.json();
        // Check if user exists
        const userExist = await (0, auth_service_1.userLoginService)(user);
        if (userExist === null)
            return c.json({ error: "User not found" }, 404);
        const userMatch = await bcrypt_1.default.compare(user.password, userExist?.password);
        if (!userMatch) {
            return c.json({ error: "Invalid credentials" }, 401);
        }
        else {
            // Create a payload
            const payload = {
                sub: userExist?.username,
                role: userExist?.role,
                exp: Math.floor(Date.now() / 1000) + (60 * 180) // 3 hours
            };
            let secret = process.env.JWT_SECRET;
            const token = await (0, jwt_1.sign)(payload, secret);
            const user = userExist?.user;
            const role = userExist?.role;
            return c.json({ token, user: { role, ...user } }, 200);
        }
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.loginUser = loginUser;
