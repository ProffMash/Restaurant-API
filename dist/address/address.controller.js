"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAddressesController = exports.deleteAddressController = exports.updateAddressController = exports.createAddressController = exports.getAddress = exports.addressController = void 0;
const address_service_1 = require("./address.service");
const addressController = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, address_service_1.addressService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Address not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.addressController = addressController;
const getAddress = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        const data = await (0, address_service_1.getAddressById)(id);
        if (!data) {
            return c.text("Address not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAddress = getAddress;
const createAddressController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, address_service_1.createAddress)(body);
        return c.json({ msg: data }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createAddressController = createAddressController;
const updateAddressController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        const body = await c.req.json();
        const data = await (0, address_service_1.updateAddress)(id, body);
        if (!data) {
            return c.text("Address not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateAddressController = updateAddressController;
const deleteAddressController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        const data = await (0, address_service_1.deleteAddress)(id);
        if (!data) {
            return c.text("Address not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteAddressController = deleteAddressController;
const searchAddressesController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, address_service_1.searchAddresses)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Address not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchAddressesController = searchAddressesController;
