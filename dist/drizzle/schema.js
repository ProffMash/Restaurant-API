"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurant_owner = exports.AuthOnUsersTableRelations = exports.AuthOnUsersTable = exports.roleEnum = exports.users = exports.status_catalog = exports.state = exports.restaurant = exports.orders = exports.order_status = exports.order_menu_item = exports.menu_item = exports.driver = exports.comment = exports.city = exports.category = exports.address = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
// Address Table
exports.address = (0, pg_core_1.pgTable)('address', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    street_address_1: (0, pg_core_1.varchar)('street_address_1', { length: 50 }).notNull(),
    street_address_2: (0, pg_core_1.varchar)('street_address_2', { length: 50 }),
    zip_code: (0, pg_core_1.varchar)('zip_code', { length: 15 }).notNull(),
    delivery_instructions: (0, pg_core_1.varchar)('delivery_instructions', { length: 100 }),
    user_id: (0, pg_core_1.integer)('user_id').notNull().references(() => exports.users.id, { onDelete: "cascade" }),
    city_id: (0, pg_core_1.integer)('city_id').notNull().references(() => exports.city.id, { onDelete: "cascade" }),
    created_at: (0, pg_core_1.timestamp)('created_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull()
});
// Category table
exports.category = (0, pg_core_1.pgTable)('category', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 50 }).notNull()
});
// City table
exports.city = (0, pg_core_1.pgTable)('city', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 50 }).notNull(),
    state_id: (0, pg_core_1.integer)('state_id').notNull().references(() => exports.state.id, { onDelete: "cascade" })
});
// Comment table
exports.comment = (0, pg_core_1.pgTable)('comment', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    order_id: (0, pg_core_1.integer)('order_id').notNull().references(() => exports.orders.id, { onDelete: "cascade" }),
    user_id: (0, pg_core_1.integer)('user_id').notNull().references(() => exports.users.id, { onDelete: "cascade" }),
    comment_text: (0, pg_core_1.varchar)('comment_text', { length: 100 }).notNull(),
    is_complaint: (0, pg_core_1.boolean)('is_complaint').notNull(),
    is_praise: (0, pg_core_1.boolean)('is_praise').notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull()
});
// Driver table
exports.driver = (0, pg_core_1.pgTable)('driver', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    car_make: (0, pg_core_1.varchar)('car_make', { length: 20 }).notNull(),
    car_model: (0, pg_core_1.varchar)('car_model', { length: 20 }).notNull(),
    car_year: (0, pg_core_1.integer)('car_year').notNull(),
    user_id: (0, pg_core_1.integer)('user_id').notNull().references(() => exports.users.id, { onDelete: "cascade" }),
    online: (0, pg_core_1.boolean)('online').notNull(),
    delivering: (0, pg_core_1.boolean)('delivering').notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull()
});
// MenuItem table
exports.menu_item = (0, pg_core_1.pgTable)('menu_item', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(),
    restaurant_id: (0, pg_core_1.integer)('restaurant_id').notNull().references(() => exports.restaurant.id, { onDelete: "cascade" }),
    category_id: (0, pg_core_1.integer)('category_id').notNull().references(() => exports.category.id, { onDelete: "cascade" }),
    description: (0, pg_core_1.varchar)('description', { length: 100 }).notNull(),
    ingredients: (0, pg_core_1.varchar)('ingredients', { length: 50 }).notNull(),
    price: (0, pg_core_1.decimal)('price', { precision: 10, scale: 2 }).notNull(),
    active: (0, pg_core_1.boolean)('active').notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull()
});
// OrderMenuItem table
exports.order_menu_item = (0, pg_core_1.pgTable)('order_menu_item', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    order_id: (0, pg_core_1.integer)('order_id').notNull().references(() => exports.orders.id, { onDelete: "cascade" }),
    menu_item_id: (0, pg_core_1.integer)('menu_item_id').notNull().references(() => exports.menu_item.id, { onDelete: "cascade" }),
    quantity: (0, pg_core_1.integer)('quantity').notNull(),
    item_price: (0, pg_core_1.decimal)('item_price', { precision: 10, scale: 2 }).notNull(),
    price: (0, pg_core_1.decimal)('price', { precision: 10, scale: 2 }).notNull(),
    comment: (0, pg_core_1.varchar)('comment', { length: 100 })
});
// OrderStatus table
exports.order_status = (0, pg_core_1.pgTable)('order_status', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    order_id: (0, pg_core_1.integer)('order_id').notNull().references(() => exports.orders.id, { onDelete: "cascade" }),
    status_catalog_id: (0, pg_core_1.integer)('status_catalog_id').notNull().references(() => exports.status_catalog.id, { onDelete: "cascade" }),
    created_at: (0, pg_core_1.timestamp)('created_at').notNull().defaultNow()
});
// Orders table
exports.orders = (0, pg_core_1.pgTable)('orders', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    restaurant_id: (0, pg_core_1.integer)('restaurant_id').notNull().references(() => exports.restaurant.id, { onDelete: "cascade" }),
    estimated_delivery_time: (0, pg_core_1.timestamp)('estimated_delivery_time'),
    actual_delivery_time: (0, pg_core_1.timestamp)('actual_delivery_time'),
    delivery_address_id: (0, pg_core_1.integer)('delivery_address_id').notNull().references(() => exports.address.id, { onDelete: "cascade" }),
    user_id: (0, pg_core_1.integer)('user_id').notNull().references(() => exports.users.id, { onDelete: "cascade" }),
    driver_id: (0, pg_core_1.integer)('driver_id').notNull().references(() => exports.driver.id, { onDelete: "cascade" }),
    price: (0, pg_core_1.decimal)('price', { precision: 10, scale: 2 }).notNull(),
    discount: (0, pg_core_1.decimal)('discount', { precision: 10, scale: 2 }).notNull(),
    final_price: (0, pg_core_1.decimal)('final_price', { precision: 10, scale: 2 }).notNull(),
    comment: (0, pg_core_1.varchar)('comment', { length: 100 }),
    created_at: (0, pg_core_1.timestamp)('created_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull()
});
// Restaurant table
exports.restaurant = (0, pg_core_1.pgTable)('restaurant', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 50 }).notNull(),
    street_address: (0, pg_core_1.varchar)('street_address', { length: 50 }).notNull(),
    zip_code: (0, pg_core_1.varchar)('zip_code', { length: 20 }).notNull(),
    city_id: (0, pg_core_1.integer)('city_id').notNull().references(() => exports.city.id, { onDelete: "cascade" }),
    created_at: (0, pg_core_1.timestamp)('created_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull()
});
// State table
exports.state = (0, pg_core_1.pgTable)('state', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 50 }).notNull(),
    code: (0, pg_core_1.varchar)('code', { length: 10 }).notNull()
});
// StatusCatalog table
exports.status_catalog = (0, pg_core_1.pgTable)('status_catalog', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 50 }).notNull()
});
// Users table
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 50 }).notNull(),
    contact_phone: (0, pg_core_1.varchar)('contact_phone', { length: 15 }).notNull(),
    phone_verified: (0, pg_core_1.boolean)('phone_verified').notNull(),
    email: (0, pg_core_1.varchar)('email', { length: 50 }).notNull(),
    email_verified: (0, pg_core_1.boolean)('email_verified').notNull(),
    confirmation_code: (0, pg_core_1.varchar)('confirmation_code', { length: 15 }),
    password: (0, pg_core_1.varchar)('password', { length: 50 }).notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').default((0, drizzle_orm_1.sql) `NOW()`).notNull()
});
// Auth Table
exports.roleEnum = (0, pg_core_1.pgEnum)("role", ["admin", "user", "driver", "restaurant_owner"]);
exports.AuthOnUsersTable = (0, pg_core_1.pgTable)("auth_on_users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    userId: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.users.id, { onDelete: "cascade" }),
    password: (0, pg_core_1.varchar)("password", { length: 255 }),
    username: (0, pg_core_1.varchar)("username", { length: 255 }),
    role: (0, exports.roleEnum)("role").default("user")
});
exports.AuthOnUsersTableRelations = (0, drizzle_orm_1.relations)(exports.AuthOnUsersTable, ({ one }) => ({
    user: one(exports.users, { fields: [exports.AuthOnUsersTable.userId], references: [exports.users.id] })
}));
// RestaurantOwner table
exports.restaurant_owner = (0, pg_core_1.pgTable)('restaurant_owner', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    restaurant_id: (0, pg_core_1.integer)('restaurant_id').notNull().references(() => exports.restaurant.id, { onDelete: "cascade" }),
    owner_id: (0, pg_core_1.integer)('owner_id').notNull().references(() => exports.users.id, { onDelete: "cascade" })
});
/* ------Relationships-------- */
// Address Relations
const addressRelations = (0, drizzle_orm_1.relations)(exports.address, ({ one }) => ({
    user: one(exports.users, { fields: [exports.address.user_id], references: [exports.users.id] }),
    city: one(exports.city, { fields: [exports.address.city_id], references: [exports.city.id] }),
}));
// Category Relations
const categoryRelations = (0, drizzle_orm_1.relations)(exports.category, ({ many }) => ({
    menuItems: many(exports.menu_item),
}));
// City Relations
const cityRelations = (0, drizzle_orm_1.relations)(exports.city, ({ one, many }) => ({
    state: one(exports.state, { fields: [exports.city.state_id], references: [exports.state.id] }),
    addresses: many(exports.address),
    restaurants: many(exports.restaurant),
}));
// Comment Relations
const commentRelations = (0, drizzle_orm_1.relations)(exports.comment, ({ one }) => ({
    order: one(exports.orders, { fields: [exports.comment.order_id], references: [exports.orders.id] }),
    user: one(exports.users, { fields: [exports.comment.user_id], references: [exports.users.id] }),
}));
// Driver Relations
const driverRelations = (0, drizzle_orm_1.relations)(exports.driver, ({ one, many }) => ({
    user: one(exports.users, { fields: [exports.driver.user_id], references: [exports.users.id] }),
    orders: many(exports.orders),
}));
// MenuItem Relations
const menuItemRelations = (0, drizzle_orm_1.relations)(exports.menu_item, ({ one, many }) => ({
    restaurant: one(exports.restaurant, { fields: [exports.menu_item.restaurant_id], references: [exports.restaurant.id] }),
    category: one(exports.category, { fields: [exports.menu_item.category_id], references: [exports.category.id] }),
    orderMenuItems: many(exports.order_menu_item),
}));
// OrderMenuItem Relations
const orderMenuItemRelations = (0, drizzle_orm_1.relations)(exports.order_menu_item, ({ one }) => ({
    order: one(exports.orders, { fields: [exports.order_menu_item.order_id], references: [exports.orders.id] }),
    menuItem: one(exports.menu_item, { fields: [exports.order_menu_item.menu_item_id], references: [exports.menu_item.id] }),
}));
// OrderStatus Relations
const orderStatusRelations = (0, drizzle_orm_1.relations)(exports.order_status, ({ one }) => ({
    order: one(exports.orders, { fields: [exports.order_status.order_id], references: [exports.orders.id] }),
    statusCatalog: one(exports.status_catalog, { fields: [exports.order_status.status_catalog_id], references: [exports.status_catalog.id] }),
}));
// Orders Relations
const ordersRelations = (0, drizzle_orm_1.relations)(exports.orders, ({ one, many }) => ({
    restaurant: one(exports.restaurant, { fields: [exports.orders.restaurant_id], references: [exports.restaurant.id] }),
    deliveryAddress: one(exports.address, { fields: [exports.orders.delivery_address_id], references: [exports.address.id] }),
    user: one(exports.users, { fields: [exports.orders.user_id], references: [exports.users.id] }),
    driver: one(exports.driver, { fields: [exports.orders.driver_id], references: [exports.driver.id] }),
    orderMenuItems: many(exports.order_menu_item),
    orderStatuses: many(exports.order_status),
}));
// Restaurant Relations
const restaurantRelations = (0, drizzle_orm_1.relations)(exports.restaurant, ({ one, many }) => ({
    city: one(exports.city, { fields: [exports.restaurant.city_id], references: [exports.city.id] }),
    menuItems: many(exports.menu_item),
    orders: many(exports.orders),
    owners: many(exports.restaurant_owner),
}));
// State Relations
const stateRelations = (0, drizzle_orm_1.relations)(exports.state, ({ many }) => ({
    cities: many(exports.city),
}));
// StatusCatalog Relations
const statusCatalogRelations = (0, drizzle_orm_1.relations)(exports.status_catalog, ({ many }) => ({
    orderStatuses: many(exports.order_status),
}));
// Users Relations
const usersRelations = (0, drizzle_orm_1.relations)(exports.users, ({ many }) => ({
    addresses: many(exports.address),
    comments: many(exports.comment),
    drivers: many(exports.driver),
    orders: many(exports.orders),
    restaurantOwners: many(exports.restaurant_owner),
}));
// RestaurantOwner Relations
const restaurantOwnerRelations = (0, drizzle_orm_1.relations)(exports.restaurant_owner, ({ one }) => ({
    restaurant: one(exports.restaurant, { fields: [exports.restaurant_owner.restaurant_id], references: [exports.restaurant.id] }),
    owner: one(exports.users, { fields: [exports.restaurant_owner.owner_id], references: [exports.users.id] }),
}));
