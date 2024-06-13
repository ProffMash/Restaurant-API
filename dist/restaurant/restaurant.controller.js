"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRestaurantsController = exports.deleteRestaurantController = exports.updateRestaurantController = exports.createRestaurantController = exports.getRestaurant = exports.restaurantController = void 0;
const restaurant_service_1 = require("./restaurant.service");
const restaurantController = async (c) => {
    try {
        const limit = c.req.query('limit');
        const data = await (0, restaurant_service_1.restaurantService)(limit ? Number(limit) : undefined);
        if (data == null || data.length == 0) {
            return c.text("Restaurants not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.restaurantController = restaurantController;
const getRestaurant = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, restaurant_service_1.getRestaurantById)(id);
        if (!data) {
            return c.text("Restaurant not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getRestaurant = getRestaurant;
const createRestaurantController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, restaurant_service_1.createRestaurant)(body);
        return c.json({ msg: "Restaurant created successfully" }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createRestaurantController = createRestaurantController;
const updateRestaurantController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const body = await c.req.json();
        const data = await (0, restaurant_service_1.updateRestaurant)(id, body);
        if (!data) {
            return c.text("Restaurant not found", 404);
        }
        return c.json({ msg: "Restaurant updated successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateRestaurantController = updateRestaurantController;
const deleteRestaurantController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, restaurant_service_1.deleteRestaurant)(id);
        if (!data) {
            return c.text("Restaurant not found", 404);
        }
        return c.json({ msg: "Restaurant deleted successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteRestaurantController = deleteRestaurantController;
const searchRestaurantsController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, restaurant_service_1.searchRestaurants)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Restaurants not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchRestaurantsController = searchRestaurantsController;
