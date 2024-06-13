"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOrderMenuItemsController = exports.deleteOrderMenuItemController = exports.updateOrderMenuItemController = exports.createOrderMenuItemController = exports.getOrderMenuItem = exports.orderMenuItemController = void 0;
const order_menu_item_service_1 = require("./order_menu_item.service");
const orderMenuItemController = async (c) => {
    try {
        const limit = c.req.query('limit');
        const data = await (0, order_menu_item_service_1.orderMenuItemService)(limit ? Number(limit) : undefined);
        if (data == null || data.length == 0) {
            return c.text("Order menu items not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.orderMenuItemController = orderMenuItemController;
const getOrderMenuItem = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, order_menu_item_service_1.getOrderMenuItemById)(id);
        if (!data) {
            return c.text("Order menu item not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getOrderMenuItem = getOrderMenuItem;
const createOrderMenuItemController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, order_menu_item_service_1.createOrderMenuItem)(body);
        return c.json({ msg: "Order menu item created successfully" }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOrderMenuItemController = createOrderMenuItemController;
const updateOrderMenuItemController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const body = await c.req.json();
        const data = await (0, order_menu_item_service_1.updateOrderMenuItem)(id, body);
        if (!data) {
            return c.text("Order menu item not found", 404);
        }
        return c.json({ msg: "Order menu item updated successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOrderMenuItemController = updateOrderMenuItemController;
const deleteOrderMenuItemController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, order_menu_item_service_1.deleteOrderMenuItem)(id);
        if (!data) {
            return c.text("Order menu item not found", 404);
        }
        return c.json({ msg: "Order menu item deleted successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOrderMenuItemController = deleteOrderMenuItemController;
const searchOrderMenuItemsController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, order_menu_item_service_1.searchOrderMenuItems)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Order menu items not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchOrderMenuItemsController = searchOrderMenuItemsController;
