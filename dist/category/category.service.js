"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCategories = exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryById = exports.categoryService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all categories or limited by the given number
const categoryService = async (limit) => {
    if (limit) {
        return await db_1.default.query.category.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.category.findMany();
};
exports.categoryService = categoryService;
// Fetch one category by id
const getCategoryById = async (id) => {
    return await db_1.default.query.category.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.category.id, Number(id))
    });
};
exports.getCategoryById = getCategoryById;
// Insert a new category
const createCategory = async (data) => {
    return await db_1.default.insert(schema_1.category).values(data);
};
exports.createCategory = createCategory;
// Update a category by id
const updateCategory = async (id, data) => {
    return await db_1.default.update(schema_1.category).set(data).where((0, drizzle_orm_1.eq)(schema_1.category.id, id));
};
exports.updateCategory = updateCategory;
// Delete a category by id
const deleteCategory = async (id) => {
    return await db_1.default.delete(schema_1.category).where((0, drizzle_orm_1.eq)(schema_1.category.id, id));
};
exports.deleteCategory = deleteCategory;
// Search for categories by a search term (e.g., category name)
const searchCategories = async (searchTerm) => {
    return await db_1.default.query.category.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.category.name, `%${searchTerm}%`)
    });
};
exports.searchCategories = searchCategories;
