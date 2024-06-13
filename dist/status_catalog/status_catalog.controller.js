"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchStatusCatalogsController = exports.deleteStatusCatalogController = exports.updateStatusCatalogController = exports.createStatusCatalogController = exports.getStatusCatalog = exports.statusCatalogController = void 0;
const status_catalog_service_1 = require("./status_catalog.service");
const statusCatalogController = async (c) => {
    try {
        const limit = c.req.query('limit');
        const data = await (0, status_catalog_service_1.statusCatalogService)(limit ? Number(limit) : undefined);
        if (data == null || data.length == 0) {
            return c.text("Status catalogs not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.statusCatalogController = statusCatalogController;
const getStatusCatalog = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, status_catalog_service_1.getStatusCatalogById)(id);
        if (!data) {
            return c.text("Status catalog not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getStatusCatalog = getStatusCatalog;
const createStatusCatalogController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, status_catalog_service_1.createStatusCatalog)(body);
        return c.json({ msg: "Status catalog created successfully" }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createStatusCatalogController = createStatusCatalogController;
const updateStatusCatalogController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const body = await c.req.json();
        const data = await (0, status_catalog_service_1.updateStatusCatalog)(id, body);
        if (!data) {
            return c.text("Status catalog not found", 404);
        }
        return c.json({ msg: "Status catalog updated successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateStatusCatalogController = updateStatusCatalogController;
const deleteStatusCatalogController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, status_catalog_service_1.deleteStatusCatalog)(id);
        if (!data) {
            return c.text("Status catalog not found", 404);
        }
        return c.json({ msg: "Status catalog deleted successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteStatusCatalogController = deleteStatusCatalogController;
const searchStatusCatalogsController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, status_catalog_service_1.searchStatusCatalogs)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Status catalogs not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchStatusCatalogsController = searchStatusCatalogsController;
