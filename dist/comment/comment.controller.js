"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCommentsController = exports.deleteCommentController = exports.updateCommentController = exports.createCommentController = exports.getComment = exports.commentsController = void 0;
const comment_service_1 = require("./comment.service");
const commentsController = async (c) => {
    try {
        const limit = c.req.query('limit');
        const data = await (0, comment_service_1.commentService)(limit ? Number(limit) : undefined);
        if (data == null || data.length == 0) {
            return c.text("Comments not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.commentsController = commentsController;
const getComment = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, comment_service_1.getCommentById)(id);
        if (!data) {
            return c.text("Comment not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getComment = getComment;
const createCommentController = async (c) => {
    try {
        const body = await c.req.json();
        const data = await (0, comment_service_1.createComment)(body);
        return c.json({ msg: "Comment created successfully" }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createCommentController = createCommentController;
const updateCommentController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const body = await c.req.json();
        const data = await (0, comment_service_1.updateComment)(id, body);
        if (!data) {
            return c.text("Comment not found", 404);
        }
        return c.json({ msg: "Comment updated successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateCommentController = updateCommentController;
const deleteCommentController = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        if (isNaN(id)) {
            return c.json({ error: "Invalid ID" }, 400);
        }
        const data = await (0, comment_service_1.deleteComment)(id);
        if (!data) {
            return c.text("Comment not found", 404);
        }
        return c.json({ msg: "Comment deleted successfully" }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteCommentController = deleteCommentController;
const searchCommentsController = async (c) => {
    try {
        const searchTerm = c.req.query('searchTerm') ?? '';
        const data = await (0, comment_service_1.searchComments)(searchTerm);
        if (!data || data.length === 0) {
            return c.text("Comments not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.searchCommentsController = searchCommentsController;
