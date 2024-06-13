"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOrdersController = exports.deleteOrderController = exports.updateOrderController = exports.createOrderController = exports.getOrder = exports.ordersController = void 0;
const orders_service_1 = require("./orders.service");
const ordersController = async (c) => {
    try {
        const limit = c.req.query('limit');
        const data = await (0, orders_service_1.ordersService)(limit ? Number(limit) : undefined);
        if (data == null || data.length == 0) {
            return c.text("Orders not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.ordersController = ordersController;
const getOrder = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, orders_service_1.getOrderById)(id);
        if (!data) {
            return c.text("Order not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getOrder = getOrder;
const createOrderController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, orders_service_1.createOrder)(body);
        return c.json({ msg: "Order created successfully" }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOrderController = createOrderController;
const updateOrderController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const body = await c.req.json();
        const data = await (0, orders_service_1.updateOrder)(id, body);
        if (!data) {
            return c.text("Order not found", 404);
        }
        return c.json({ msg: "Order updated successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOrderController = updateOrderController;
const deleteOrderController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, orders_service_1.deleteOrder)(id);
        if (!data) {
            return c.text("Order not found", 404);
        }
        return c.json({ msg: "Order deleted successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOrderController = deleteOrderController;
const searchOrdersController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, orders_service_1.searchOrders)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Orders not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchOrdersController = searchOrdersController;
