import { Hono } from "hono";
import { usersController, getUser, createUserController, updateUserController, deleteUserController, searchUsersController } from "./users.controller";
import { adminRoleAuth } from "../middleware/bearAuth";
import { driverRoleAuth } from "../middleware/bearAuth";

export const usersRouter = new Hono();

usersRouter.get("/", adminRoleAuth, usersController);
usersRouter.get("/:id", getUser);
usersRouter.post("/", createUserController);
usersRouter.put("/:id", updateUserController);
usersRouter.delete("/:id", driverRoleAuth, deleteUserController);
usersRouter.get("/search", searchUsersController);

