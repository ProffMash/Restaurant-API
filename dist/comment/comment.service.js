"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchComments = exports.deleteComment = exports.updateComment = exports.createComment = exports.getCommentById = exports.commentService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
// Fetch all comments or limited by the given number
const commentService = async (limit) => {
    if (limit) {
        return await db_1.default.query.comment.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.comment.findMany();
};
exports.commentService = commentService;
// Fetch one comment by id
const getCommentById = async (id) => {
    return await db_1.default.query.comment.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.comment.id, Number(id))
    });
};
exports.getCommentById = getCommentById;
// Insert a new comment
const createComment = async (data) => {
    return await db_1.default.insert(schema_1.comment).values(data);
};
exports.createComment = createComment;
// Update a comment by id
const updateComment = async (id, data) => {
    return await db_1.default.update(schema_1.comment).set(data).where((0, drizzle_orm_1.eq)(schema_1.comment.id, id));
};
exports.updateComment = updateComment;
// Delete a comment by id
const deleteComment = async (id) => {
    return await db_1.default.delete(schema_1.comment).where((0, drizzle_orm_1.eq)(schema_1.comment.id, id));
};
exports.deleteComment = deleteComment;
// Search for comments by a search term (e.g., comment text)
const searchComments = async (searchTerm) => {
    return await db_1.default.query.comment.findMany({
        where: (0, drizzle_orm_1.like)(schema_1.comment.comment_text, `%${searchTerm}%`)
    });
};
exports.searchComments = searchComments;
