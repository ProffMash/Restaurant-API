"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const city_router_1 = require("./city/city.router");
const users_router_1 = require("./users/users.router");
const driver_router_1 = require("./driver/driver.router");
const restaurant_router_1 = require("./restaurant/restaurant.router");
const category_router_1 = require("./category/category.router");
const address_router_1 = require("./address/address.router");
const restaurant_owner_router_1 = require("./restaurant_owner/restaurant_owner.router");
const menu_item_router_1 = require("./menu_item/menu_item.router");
const comment_router_1 = require("./comment/comment.router");
const orders_router_1 = require("./orders/orders.router");
const auth_router_1 = require("./auth/auth.router");
const app = new hono_1.Hono();
// Route definitions
app.route("/city", city_router_1.cityRouter);
app.route("/users", users_router_1.usersRouter);
app.route("/driver", driver_router_1.driverRouter);
app.route("/restaurant", restaurant_router_1.restaurantRouter);
app.route("/category", category_router_1.categoryRouter);
app.route("/address", address_router_1.addressRouter);
app.route("/restaurant_owner", restaurant_owner_router_1.restaurant_ownerRouter);
app.route("/menu_item", menu_item_router_1.menuItemsRouter);
app.route("/comment", comment_router_1.commentsRouter);
app.route("/orders", orders_router_1.ordersRouter);
app.route("auth/", auth_router_1.authRouter);
// Health check endpoint
app.get('/ok', (c) => {
    return c.text('Programming is good');
});
// Error handling middleware
app.onError((err, c) => {
    console.error('Unhandled error:', err);
    return c.text('Internal Server Error', 500);
});
// 404 handler
app.notFound((c) => {
    return c.text('Not Found!', 404);
});
// Start the server
const port = process.env.PORT || 3000;
console.log(`Server is running on port ${port}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(port),
});
