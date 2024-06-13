"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRestaurants = exports.deleteRestaurant = exports.updateRestaurant = exports.createRestaurant = exports.getRestaurantById = exports.restaurantService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all restaurants or limited by the given number
const restaurantService = async (limit) => {
    if (limit) {
        return await db_1.default.query.restaurant.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.restaurant.findMany();
};
exports.restaurantService = restaurantService;
// Fetch one restaurant by id
const getRestaurantById = async (id) => {
    return await db_1.default.query.restaurant.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurant.id, Number(id))
    });
};
exports.getRestaurantById = getRestaurantById;
// Insert a new restaurant
const createRestaurant = async (data) => {
    return await db_1.default.insert(schema_1.restaurant).values(data);
};
exports.createRestaurant = createRestaurant;
// Update a restaurant by id
const updateRestaurant = async (id, data) => {
    return await db_1.default.update(schema_1.restaurant).set(data).where((0, drizzle_orm_1.eq)(schema_1.restaurant.id, id));
};
exports.updateRestaurant = updateRestaurant;
// Delete a restaurant by id
const deleteRestaurant = async (id) => {
    return await db_1.default.delete(schema_1.restaurant).where((0, drizzle_orm_1.eq)(schema_1.restaurant.id, id));
};
exports.deleteRestaurant = deleteRestaurant;
// Search for restaurants by a search term (e.g., restaurant name)
const searchRestaurants = async (searchTerm) => {
    return await db_1.default.query.restaurant.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.restaurant.id, `%${searchTerm}%`)
    });
};
exports.searchRestaurants = searchRestaurants;
