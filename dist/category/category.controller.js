"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCategoriesController = exports.deleteCategoryController = exports.updateCategoryController = exports.createCategoryController = exports.getCategory = exports.categoryController = void 0;
const category_service_1 = require("./category.service");
const categoryController = async (c) => {
    try {
        const limit = c.req.query('limit');
        const data = await (0, category_service_1.categoryService)(limit ? Number(limit) : undefined);
        if (data == null || data.length == 0) {
            return c.text("Categories not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.categoryController = categoryController;
const getCategory = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, category_service_1.getCategoryById)(id);
        if (!data) {
            return c.text("Category not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getCategory = getCategory;
const createCategoryController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, category_service_1.createCategory)(body);
        return c.json({ msg: "Category created successfully" }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createCategoryController = createCategoryController;
const updateCategoryController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const body = await c.req.json();
        const data = await (0, category_service_1.updateCategory)(id, body);
        if (!data) {
            return c.text("Category not found", 404);
        }
        return c.json({ msg: "Category updated successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateCategoryController = updateCategoryController;
const deleteCategoryController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, category_service_1.deleteCategory)(id);
        if (!data) {
            return c.text("Category not found", 404);
        }
        return c.json({ msg: "Category deleted successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteCategoryController = deleteCategoryController;
const searchCategoriesController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, category_service_1.searchCategories)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Categories not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchCategoriesController = searchCategoriesController;
