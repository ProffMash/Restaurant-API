import { Hono } from "hono";
import { driverController, getDriver, createDriverController, updateDriverController, deleteDriverController, searchDriversController } from "./driver.controller";
import { bothresdriver } from "../middleware/bearAuth"

export const driverRouter = new Hono();

driverRouter.get("/", bothresdriver, driverController);
driverRouter.get("/:id", bothresdriver, getDriver);
driverRouter.post("/", bothresdriver, createDriverController);
driverRouter.put("/:id", bothresdriver, updateDriverController);
driverRouter.delete("/:id", bothresdriver, deleteDriverController);
driverRouter.get("/search", bothresdriver, searchDriversController);
