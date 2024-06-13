"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchDriversController = exports.deleteDriverController = exports.updateDriverController = exports.createDriverController = exports.getDriver = exports.driverController = void 0;
const driver_service_1 = require("./driver.service");
const driverController = async (c) => {
    try {
        const limit = c.req.query('limit');
        const data = await (0, driver_service_1.driverService)(limit ? Number(limit) : undefined);
        if (data == null || data.length == 0) {
            return c.text("Drivers not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.driverController = driverController;
const getDriver = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, driver_service_1.getDriverById)(id);
        if (!data) {
            return c.text("Driver not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getDriver = getDriver;
const createDriverController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, driver_service_1.createDriver)(body);
        return c.json({ msg: "Driver created successfully" }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createDriverController = createDriverController;
const updateDriverController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const body = await c.req.json();
        const data = await (0, driver_service_1.updateDriver)(id, body);
        if (!data) {
            return c.text("Driver not found", 404);
        }
        return c.json({ msg: "Driver updated successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateDriverController = updateDriverController;
const deleteDriverController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, driver_service_1.deleteDriver)(id);
        if (!data) {
            return c.text("Driver not found", 404);
        }
        return c.json({ msg: "Driver deleted successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteDriverController = deleteDriverController;
const searchDriversController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, driver_service_1.searchDrivers)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Drivers not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchDriversController = searchDriversController;
