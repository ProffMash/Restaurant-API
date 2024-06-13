"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMenuItems = exports.deleteMenuItem = exports.updateMenuItem = exports.createMenuItem = exports.getMenuItemById = exports.menuItemService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all menu items or limited by the given number
const menuItemService = async (limit) => {
    if (limit) {
        return await db_1.default.query.menu_item.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.menu_item.findMany();
};
exports.menuItemService = menuItemService;
// Fetch one menu item by id
const getMenuItemById = async (id) => {
    return await db_1.default.query.menu_item.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.menu_item.id, Number(id))
    });
};
exports.getMenuItemById = getMenuItemById;
// Insert a new menu item
const createMenuItem = async (data) => {
    return await db_1.default.insert(schema_1.menu_item).values(data);
};
exports.createMenuItem = createMenuItem;
// Update a menu item by id
const updateMenuItem = async (id, data) => {
    return await db_1.default.update(schema_1.menu_item).set(data).where((0, drizzle_orm_1.eq)(schema_1.menu_item.id, id));
};
exports.updateMenuItem = updateMenuItem;
// Delete a menu item by id
const deleteMenuItem = async (id) => {
    return await db_1.default.delete(schema_1.menu_item).where((0, drizzle_orm_1.eq)(schema_1.menu_item.id, id));
};
exports.deleteMenuItem = deleteMenuItem;
// Search for menu items by a search term (e.g., menu item name)
const searchMenuItems = async (searchTerm) => {
    return await db_1.default.query.menu_item.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.menu_item.name, `%${searchTerm}%`)
    });
};
exports.searchMenuItems = searchMenuItems;
