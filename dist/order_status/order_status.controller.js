"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOrderStatusesController = exports.deleteOrderStatusController = exports.updateOrderStatusController = exports.createOrderStatusController = exports.getOrderStatus = exports.orderStatusController = void 0;
const order_status_service_1 = require("./order_status.service");
const orderStatusController = async (c) => {
    try {
        const limit = c.req.query('limit');
        const data = await (0, order_status_service_1.orderStatusService)(limit ? Number(limit) : undefined);
        if (data == null || data.length == 0) {
            return c.text("Order statuses not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.orderStatusController = orderStatusController;
const getOrderStatus = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, order_status_service_1.getOrderStatusById)(id);
        if (!data) {
            return c.text("Order status not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getOrderStatus = getOrderStatus;
const createOrderStatusController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, order_status_service_1.createOrderStatus)(body);
        return c.json({ msg: "Order status created successfully" }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOrderStatusController = createOrderStatusController;
const updateOrderStatusController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const body = await c.req.json();
        const data = await (0, order_status_service_1.updateOrderStatus)(id, body);
        if (!data) {
            return c.text("Order status not found", 404);
        }
        return c.json({ msg: "Order status updated successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOrderStatusController = updateOrderStatusController;
const deleteOrderStatusController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, order_status_service_1.deleteOrderStatus)(id);
        if (!data) {
            return c.text("Order status not found", 404);
        }
        return c.json({ msg: "Order status deleted successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOrderStatusController = deleteOrderStatusController;
const searchOrderStatusesController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, order_status_service_1.searchOrderStatuses)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Order statuses not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchOrderStatusesController = searchOrderStatusesController;
