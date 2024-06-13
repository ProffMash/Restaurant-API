"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchUsers = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.userService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all users or limited by the given number
const userService = async (limit) => {
    if (limit) {
        return await db_1.default.query.users.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.users.findMany();
};
exports.userService = userService;
// Fetch one user by id
const getUserById = async (id) => {
    return await db_1.default.query.users.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.users.id, Number(id))
    });
};
exports.getUserById = getUserById;
// Insert a new user
const createUser = async (data) => {
    return await db_1.default.insert(schema_1.users).values(data);
};
exports.createUser = createUser;
// Update a user by id
const updateUser = async (id, data) => {
    return await db_1.default.update(schema_1.users).set(data).where((0, drizzle_orm_1.eq)(schema_1.users.id, id));
};
exports.updateUser = updateUser;
// Delete a user by id
const deleteUser = async (id) => {
    return await db_1.default.delete(schema_1.users).where((0, drizzle_orm_1.eq)(schema_1.users.id, id));
};
exports.deleteUser = deleteUser;
// Search for users by a search term (e.g., user name)
const searchUsers = async (searchTerm) => {
    return await db_1.default.query.users.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.users.name, `%${searchTerm}%`)
    });
};
exports.searchUsers = searchUsers;
