"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOrderMenuItems = exports.deleteOrderMenuItem = exports.updateOrderMenuItem = exports.createOrderMenuItem = exports.getOrderMenuItemById = exports.orderMenuItemService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all order menu items or limited by the given number
const orderMenuItemService = async (limit) => {
    if (limit) {
        return await db_1.default.query.order_menu_item.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.order_menu_item.findMany();
};
exports.orderMenuItemService = orderMenuItemService;
// Fetch one order menu item by id
const getOrderMenuItemById = async (id) => {
    return await db_1.default.query.order_menu_item.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.order_menu_item.id, Number(id))
    });
};
exports.getOrderMenuItemById = getOrderMenuItemById;
// Insert a new order menu item
const createOrderMenuItem = async (data) => {
    return await db_1.default.insert(schema_1.order_menu_item).values(data);
};
exports.createOrderMenuItem = createOrderMenuItem;
// Update an order menu item by id
const updateOrderMenuItem = async (id, data) => {
    return await db_1.default.update(schema_1.order_menu_item).set(data).where((0, drizzle_orm_1.eq)(schema_1.order_menu_item.id, id));
};
exports.updateOrderMenuItem = updateOrderMenuItem;
// Delete an order menu item by id
const deleteOrderMenuItem = async (id) => {
    return await db_1.default.delete(schema_1.order_menu_item).where((0, drizzle_orm_1.eq)(schema_1.order_menu_item.id, id));
};
exports.deleteOrderMenuItem = deleteOrderMenuItem;
// Search for order menu items by a search term (e.g., menu item name)
const searchOrderMenuItems = async (searchTerm) => {
    return await db_1.default.query.order_menu_item.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.order_menu_item.comment, `%${searchTerm}%`)
    });
};
exports.searchOrderMenuItems = searchOrderMenuItems;
