"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCities = exports.deleteCity = exports.updateCity = exports.createCity = exports.getCityById = exports.cityService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all cities or limited by the given number
const cityService = async (limit) => {
    if (limit) {
        return await db_1.default.query.city.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.city.findMany();
};
exports.cityService = cityService;
// Fetch one city by id
const getCityById = async (id) => {
    return await db_1.default.query.city.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.city.id, Number(id))
    });
};
exports.getCityById = getCityById;
// Insert a new city
// Insert a new city
const createCity = async (data) => {
    return await db_1.default.insert(schema_1.city).values(data);
};
exports.createCity = createCity;
// Update a city by id
const updateCity = async (id, data) => {
    return await db_1.default.update(schema_1.city).set(data).where((0, drizzle_orm_1.eq)(schema_1.city.id, id));
};
exports.updateCity = updateCity;
// Delete a city by id
const deleteCity = async (id) => {
    return await db_1.default.delete(schema_1.city).where((0, drizzle_orm_1.eq)(schema_1.city.id, id));
};
exports.deleteCity = deleteCity;
// Search for cities by a search term (e.g., city name)
const searchCities = async (searchTerm) => {
    return await db_1.default.query.city.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.city.name, `%${searchTerm}%`)
    });
};
exports.searchCities = searchCities;
