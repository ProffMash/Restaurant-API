"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAddresses = exports.deleteAddress = exports.updateAddress = exports.createAddress = exports.getAddressById = exports.addressService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all addresses or limited by the given number
const addressService = async (limit) => {
    if (limit) {
        return await db_1.default.query.address.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.address.findMany();
};
exports.addressService = addressService;
// Fetch one address by id
const getAddressById = async (id) => {
    return await db_1.default.query.address.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.address.id, Number(id))
    });
};
exports.getAddressById = getAddressById;
// Insert a new address
const createAddress = async (data) => {
    return await db_1.default.insert(schema_1.address).values(data);
};
exports.createAddress = createAddress;
// Update an address by id
const updateAddress = async (id, data) => {
    return await db_1.default.update(schema_1.address).set(data).where((0, drizzle_orm_1.eq)(schema_1.address.id, id));
};
exports.updateAddress = updateAddress;
// Delete an address by id
const deleteAddress = async (id) => {
    return await db_1.default.delete(schema_1.address).where((0, drizzle_orm_1.eq)(schema_1.address.id, id));
};
exports.deleteAddress = deleteAddress;
// Search for addresses by a search term (e.g., city)
const searchAddresses = async (searchTerm) => {
    return await db_1.default.query.address.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.address.zip_code, `%${searchTerm}%`)
    });
};
exports.searchAddresses = searchAddresses;
