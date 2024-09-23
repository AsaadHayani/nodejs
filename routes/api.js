const express = require("express");
const routerApi = express.Router();
const UserController = require("../controllers/Api/UserContoller");

routerApi.get("/", UserController.index);

routerApi.get("/:id", UserController.view);

routerApi.post("/", UserController.store);

routerApi.put("/:id", UserController.update);

routerApi.delete("/:id", UserController.del);

module.exports = routerApi;
