"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOrderStatuses = exports.deleteOrderStatus = exports.updateOrderStatus = exports.createOrderStatus = exports.getOrderStatusById = exports.orderStatusService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all order statuses or limited by the given number
const orderStatusService = async (limit) => {
    if (limit) {
        return await db_1.default.query.order_status.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.order_status.findMany();
};
exports.orderStatusService = orderStatusService;
// Fetch one order status by id
const getOrderStatusById = async (id) => {
    return await db_1.default.query.order_status.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.order_status.id, Number(id))
    });
};
exports.getOrderStatusById = getOrderStatusById;
// Insert a new order status
const createOrderStatus = async (data) => {
    return await db_1.default.insert(schema_1.order_status).values(data);
};
exports.createOrderStatus = createOrderStatus;
// Update an order status by id
const updateOrderStatus = async (id, data) => {
    return await db_1.default.update(schema_1.order_status).set(data).where((0, drizzle_orm_1.eq)(schema_1.order_status.id, id));
};
exports.updateOrderStatus = updateOrderStatus;
// Delete an order status by id
const deleteOrderStatus = async (id) => {
    return await db_1.default.delete(schema_1.order_status).where((0, drizzle_orm_1.eq)(schema_1.order_status.id, id));
};
exports.deleteOrderStatus = deleteOrderStatus;
// Search for order statuses by a search term (e.g., status name)
const searchOrderStatuses = async (searchTerm) => {
    return await db_1.default.query.order_status.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.order_status.id, `%${searchTerm}%`)
    });
};
exports.searchOrderStatuses = searchOrderStatuses;
