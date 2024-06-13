"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRestaurantOwners = exports.deleteRestaurantOwner = exports.updateRestaurantOwner = exports.createRestaurantOwner = exports.getRestaurantOwnerById = exports.restaurant_ownerService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all restaurant owners or limited by the given number
const restaurant_ownerService = async (limit) => {
    if (limit) {
        return await db_1.default.query.restaurant_owner.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.restaurant_owner.findMany();
};
exports.restaurant_ownerService = restaurant_ownerService;
// Fetch one restaurant owner by id
const getRestaurantOwnerById = async (id) => {
    return await db_1.default.query.restaurant_owner.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurant_owner.id, Number(id))
    });
};
exports.getRestaurantOwnerById = getRestaurantOwnerById;
// Insert a new restaurant owner
const createRestaurantOwner = async (data) => {
    return await db_1.default.insert(schema_1.restaurant_owner).values(data);
};
exports.createRestaurantOwner = createRestaurantOwner;
// Update a restaurant owner by id
const updateRestaurantOwner = async (id, data) => {
    return await db_1.default.update(schema_1.restaurant_owner).set(data).where((0, drizzle_orm_1.eq)(schema_1.restaurant_owner.id, id));
};
exports.updateRestaurantOwner = updateRestaurantOwner;
// Delete a restaurant owner by id
const deleteRestaurantOwner = async (id) => {
    return await db_1.default.delete(schema_1.restaurant_owner).where((0, drizzle_orm_1.eq)(schema_1.restaurant_owner.id, id));
};
exports.deleteRestaurantOwner = deleteRestaurantOwner;
// Search for restaurant owners by a search term (e.g., owner_id)
const searchRestaurantOwners = async (searchTerm) => {
    return await db_1.default.query.restaurant_owner.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.restaurant_owner.owner_id, `%${searchTerm}%`)
    });
};
exports.searchRestaurantOwners = searchRestaurantOwners;
