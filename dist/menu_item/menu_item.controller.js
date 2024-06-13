"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMenuItemsController = exports.deleteMenuItemController = exports.updateMenuItemController = exports.createMenuItemController = exports.getMenuItem = exports.menuItemsController = void 0;
const menu_item_service_1 = require("./menu_item.service");
const menuItemsController = async (c) => {
    try {
        const limit = c.req.query('limit');
        const data = await (0, menu_item_service_1.menuItemService)(limit ? Number(limit) : undefined);
        if (data == null || data.length == 0) {
            return c.text("Menu items not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.menuItemsController = menuItemsController;
const getMenuItem = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, menu_item_service_1.getMenuItemById)(id);
        if (!data) {
            return c.text("Menu item not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getMenuItem = getMenuItem;
const createMenuItemController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, menu_item_service_1.createMenuItem)(body);
        return c.json({ msg: "Menu item created successfully" }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createMenuItemController = createMenuItemController;
const updateMenuItemController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const body = await c.req.json();
        const data = await (0, menu_item_service_1.updateMenuItem)(id, body);
        if (!data) {
            return c.text("Menu item not found", 404);
        }
        return c.json({ msg: "Menu item updated successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateMenuItemController = updateMenuItemController;
const deleteMenuItemController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, menu_item_service_1.deleteMenuItem)(id);
        if (!data) {
            return c.text("Menu item not found", 404);
        }
        return c.json({ msg: "Menu item deleted successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteMenuItemController = deleteMenuItemController;
const searchMenuItemsController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, menu_item_service_1.searchMenuItems)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Menu items not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchMenuItemsController = searchMenuItemsController;
