import { Hono } from "hono";
import { ordersController, getOrder, createOrderController, updateOrderController, deleteOrderController, searchOrdersController } from "./orders.controller";
import { restaurant_ownerRoleAuth } from "../middleware/bearAuth";

export const ordersRouter = new Hono();

ordersRouter.get("/", restaurant_ownerRoleAuth, ordersController);
ordersRouter.get("/:id",restaurant_ownerRoleAuth, getOrder);
ordersRouter.post("/", restaurant_ownerRoleAuth, createOrderController);
ordersRouter.put("/:id", restaurant_ownerRoleAuth, updateOrderController);
ordersRouter.delete("/:id", restaurant_ownerRoleAuth, deleteOrderController);
ordersRouter.get("/search",restaurant_ownerRoleAuth, searchOrdersController);
