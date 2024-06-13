"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchDrivers = exports.deleteDriver = exports.updateDriver = exports.createDriver = exports.getDriverById = exports.driverService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all drivers or limited by the given number
const driverService = async (limit) => {
    if (limit) {
        return await db_1.default.query.driver.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.driver.findMany();
};
exports.driverService = driverService;
// Fetch one driver by id
const getDriverById = async (id) => {
    return await db_1.default.query.driver.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.driver.id, Number(id))
    });
};
exports.getDriverById = getDriverById;
// Insert a new driver
const createDriver = async (data) => {
    return await db_1.default.insert(schema_1.driver).values(data);
};
exports.createDriver = createDriver;
// Update a driver by id
const updateDriver = async (id, data) => {
    return await db_1.default.update(schema_1.driver).set(data).where((0, drizzle_orm_1.eq)(schema_1.driver.id, id));
};
exports.updateDriver = updateDriver;
// Delete a driver by id
const deleteDriver = async (id) => {
    return await db_1.default.delete(schema_1.driver).where((0, drizzle_orm_1.eq)(schema_1.driver.id, id));
};
exports.deleteDriver = deleteDriver;
// Search for drivers by a search term (e.g., driver name)
const searchDrivers = async (searchTerm) => {
    return await db_1.default.query.driver.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.driver.id, `%${searchTerm}%`)
    });
};
exports.searchDrivers = searchDrivers;
