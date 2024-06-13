"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOrders = exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrderById = exports.ordersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all orders or limited by the given number
const ordersService = async (limit) => {
    if (limit) {
        return await db_1.default.query.orders.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.orders.findMany();
};
exports.ordersService = ordersService;
// Fetch one order by id
const getOrderById = async (id) => {
    return await db_1.default.query.orders.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.orders.id, Number(id))
    });
};
exports.getOrderById = getOrderById;
// Insert a new order
const createOrder = async (data) => {
    return await db_1.default.insert(schema_1.orders).values(data);
};
exports.createOrder = createOrder;
// Update an order by id
const updateOrder = async (id, data) => {
    return await db_1.default.update(schema_1.orders).set(data).where((0, drizzle_orm_1.eq)(schema_1.orders.id, id));
};
exports.updateOrder = updateOrder;
// Delete an order by id
const deleteOrder = async (id) => {
    return await db_1.default.delete(schema_1.orders).where((0, drizzle_orm_1.eq)(schema_1.orders.id, id));
};
exports.deleteOrder = deleteOrder;
// Search for orders by a search term (e.g., order comment)
const searchOrders = async (searchTerm) => {
    return await db_1.default.query.orders.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.orders.comment, `%${searchTerm}%`)
    });
};
exports.searchOrders = searchOrders;
