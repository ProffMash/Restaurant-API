"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRestaurantOwnersController = exports.deleteRestaurantOwnerController = exports.updateRestaurantOwnerController = exports.createRestaurantOwnerController = exports.getRestaurantOwner = exports.restaurant_ownerController = void 0;
const restaurant_owner_service_1 = require("./restaurant_owner.service");
const restaurant_ownerController = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, restaurant_owner_service_1.restaurant_ownerService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Restaurant_owner not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.restaurant_ownerController = restaurant_ownerController;
const getRestaurantOwner = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        const data = await (0, restaurant_owner_service_1.getRestaurantOwnerById)(id);
        if (!data) {
            return c.text("Restaurant_owner not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getRestaurantOwner = getRestaurantOwner;
const createRestaurantOwnerController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, restaurant_owner_service_1.createRestaurantOwner)(body);
        return c.json({ msg: data }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createRestaurantOwnerController = createRestaurantOwnerController;
const updateRestaurantOwnerController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        const body = await c.req.json();
        const data = await (0, restaurant_owner_service_1.updateRestaurantOwner)(id, body);
        if (!data) {
            return c.text("Restaurant_owner not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateRestaurantOwnerController = updateRestaurantOwnerController;
const deleteRestaurantOwnerController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        const data = await (0, restaurant_owner_service_1.deleteRestaurantOwner)(id);
        if (!data) {
            return c.text("Restaurant_owner not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteRestaurantOwnerController = deleteRestaurantOwnerController;
const searchRestaurantOwnersController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, restaurant_owner_service_1.searchRestaurantOwners)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Restaurant_owner not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchRestaurantOwnersController = searchRestaurantOwnersController;
