"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchUsersController = exports.deleteUserController = exports.updateUserController = exports.createUserController = exports.getUser = exports.usersController = void 0;
const users_service_1 = require("./users.service");
const usersController = async (c) => {
    try {
        const limit = c.req.query('limit');
        const data = await (0, users_service_1.userService)(limit ? Number(limit) : undefined);
        if (data == null || data.length == 0) {
            return c.text("Users not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.usersController = usersController;
const getUser = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, users_service_1.getUserById)(id);
        if (!data) {
            return c.text("User not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getUser = getUser;
const createUserController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, users_service_1.createUser)(body);
        return c.json({ msg: "User created successfully" }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createUserController = createUserController;
const updateUserController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const body = await c.req.json();
        const data = await (0, users_service_1.updateUser)(id, body);
        if (!data) {
            return c.text("User not found", 404);
        }
        return c.json({ msg: "User updated successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateUserController = updateUserController;
const deleteUserController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, users_service_1.deleteUser)(id);
        if (!data) {
            return c.text("User not found", 404);
        }
        return c.json({ msg: "User deleted successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteUserController = deleteUserController;
const searchUsersController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, users_service_1.searchUsers)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Users not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchUsersController = searchUsersController;
