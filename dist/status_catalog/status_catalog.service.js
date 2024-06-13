"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchStatusCatalogs = exports.deleteStatusCatalog = exports.updateStatusCatalog = exports.createStatusCatalog = exports.getStatusCatalogById = exports.statusCatalogService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all status catalogs or limited by the given number
const statusCatalogService = async (limit) => {
    if (limit) {
        return await db_1.default.query.status_catalog.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.status_catalog.findMany();
};
exports.statusCatalogService = statusCatalogService;
// Fetch one status catalog by id
const getStatusCatalogById = async (id) => {
    return await db_1.default.query.status_catalog.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.status_catalog.id, Number(id))
    });
};
exports.getStatusCatalogById = getStatusCatalogById;
// Insert a new status catalog
const createStatusCatalog = async (data) => {
    return await db_1.default.insert(schema_1.status_catalog).values(data);
};
exports.createStatusCatalog = createStatusCatalog;
// Update a status catalog by id
const updateStatusCatalog = async (id, data) => {
    return await db_1.default.update(schema_1.status_catalog).set(data).where((0, drizzle_orm_1.eq)(schema_1.status_catalog.id, id));
};
exports.updateStatusCatalog = updateStatusCatalog;
// Delete a status catalog by id
const deleteStatusCatalog = async (id) => {
    return await db_1.default.delete(schema_1.status_catalog).where((0, drizzle_orm_1.eq)(schema_1.status_catalog.id, id));
};
exports.deleteStatusCatalog = deleteStatusCatalog;
// Search for status catalogs by a search term (e.g., status catalog name)
const searchStatusCatalogs = async (searchTerm) => {
    return await db_1.default.query.status_catalog.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.status_catalog.name, `%${searchTerm}%`)
    });
};
exports.searchStatusCatalogs = searchStatusCatalogs;
