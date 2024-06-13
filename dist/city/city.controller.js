"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCitiesController = exports.deleteCityController = exports.updateCityController = exports.createCityController = exports.getCity = exports.cityController = void 0;
const city_service_1 = require("./city.service");
const cityController = async (c) => {
    try {
        const limit = c.req.query('limit');
        const data = await (0, city_service_1.cityService)(limit ? Number(limit) : undefined);
        if (data == null || data.length == 0) {
            return c.text("Cities not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.cityController = cityController;
const getCity = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, city_service_1.getCityById)(id);
        if (!data) {
            return c.text("City not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getCity = getCity;
const createCityController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, city_service_1.createCity)(body);
        return c.json({ msg: "City created successfully" }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createCityController = createCityController;
const updateCityController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const body = await c.req.json();
        const data = await (0, city_service_1.updateCity)(id, body);
        if (!data) {
            return c.text("City not found", 404);
        }
        return c.json({ msg: "City updated successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateCityController = updateCityController;
const deleteCityController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, city_service_1.deleteCity)(id);
        if (!data) {
            return c.text("City not found", 404);
        }
        return c.json({ msg: "City deleted successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteCityController = deleteCityController;
const searchCitiesController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, city_service_1.searchCities)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Cities not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchCitiesController = searchCitiesController;
