"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantOwnerValidator = exports.registerUserSchema = exports.loginUserSchema = exports.usersValidator = exports.statusCatalogValidator = exports.stateValidator = exports.restaurantValidator = exports.ordersValidator = exports.orderStatusValidator = exports.orderMenuItemValidator = exports.menuItemValidator = exports.driverValidator = exports.commentValidator = exports.cityValidator = exports.categoryValidator = exports.addressValidator = void 0;
const zod_1 = require("zod");
// Address Validator
exports.addressValidator = zod_1.z.object({
    street_address_1: zod_1.z.string().max(50),
    street_address_2: zod_1.z.string().max(50).nullable(),
    zip_code: zod_1.z.string().max(15),
    delivery_instructions: zod_1.z.string().max(100).nullable(),
    user_id: zod_1.z.number(),
    city_id: zod_1.z.number()
});
// Category Validator
exports.categoryValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string().max(50)
});
// City Validator
exports.cityValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string().max(50),
    state_id: zod_1.z.number()
});
// Comment Validator
exports.commentValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    order_id: zod_1.z.number(),
    user_id: zod_1.z.number(),
    comment_text: zod_1.z.string().max(100),
    is_complaint: zod_1.z.boolean(),
    is_praise: zod_1.z.boolean(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date()
});
// Driver Validator
exports.driverValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    car_make: zod_1.z.string().max(20),
    car_model: zod_1.z.string().max(20),
    car_year: zod_1.z.number(),
    user_id: zod_1.z.number(),
    online: zod_1.z.boolean(),
    delivering: zod_1.z.boolean(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date()
});
// MenuItem Validator
exports.menuItemValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string().max(255),
    restaurant_id: zod_1.z.number(),
    category_id: zod_1.z.number(),
    description: zod_1.z.string().max(100),
    ingredients: zod_1.z.string().max(50),
    price: zod_1.z.number().min(0),
    active: zod_1.z.boolean(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date()
});
// OrderMenuItem Validator
exports.orderMenuItemValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    order_id: zod_1.z.number(),
    menu_item_id: zod_1.z.number(),
    quantity: zod_1.z.number().min(0),
    item_price: zod_1.z.number().min(0),
    price: zod_1.z.number().min(0),
    comment: zod_1.z.string().max(100).nullable()
});
// OrderStatus Validator
exports.orderStatusValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    order_id: zod_1.z.number(),
    status_catalog_id: zod_1.z.number(),
    created_at: zod_1.z.date()
});
// Orders Validator
exports.ordersValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    restaurant_id: zod_1.z.number(),
    estimated_delivery_time: zod_1.z.date().nullable(),
    actual_delivery_time: zod_1.z.date().nullable(),
    delivery_address_id: zod_1.z.number(),
    user_id: zod_1.z.number(),
    driver_id: zod_1.z.number(),
    price: zod_1.z.number().min(0),
    discount: zod_1.z.number().min(0),
    final_price: zod_1.z.number().min(0),
    comment: zod_1.z.string().max(100).nullable(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date()
});
// Restaurant Validator
exports.restaurantValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string().max(50),
    street_address: zod_1.z.string().max(50),
    zip_code: zod_1.z.string().max(20),
    city_id: zod_1.z.number(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date()
});
// State Validator
exports.stateValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string().max(50),
    code: zod_1.z.string().max(10)
});
// StatusCatalog Validator
exports.statusCatalogValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string().max(50)
});
// Users Validator
exports.usersValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string().max(50),
    contact_phone: zod_1.z.string().max(15),
    phone_verified: zod_1.z.boolean(),
    email: zod_1.z.string().max(50).email(),
    email_verified: zod_1.z.boolean(),
    confirmation_code: zod_1.z.string().max(15).nullable(),
    password: zod_1.z.string().max(50),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date()
});
// Login User Validator
exports.loginUserSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
// Register User Validator
exports.registerUserSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    username: zod_1.z.string(),
    password: zod_1.z.string(),
    role: zod_1.z.string().optional(),
});
// RestaurantOwner Validator
exports.restaurantOwnerValidator = zod_1.z.object({
    id: zod_1.z.number().optional(),
    restaurant_id: zod_1.z.number(),
    owner_id: zod_1.z.number()
});
