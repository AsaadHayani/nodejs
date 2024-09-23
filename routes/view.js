const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.index);

router.get("/user/add", UserController.create);

router.get("/edit/:id", UserController.edit);

router.get("/view/:id", UserController.view);

router.post("/user/add", UserController.store);

router.post("/search", UserController.search);

router.put("/edit/:id", UserController.update);

router.delete("/delete/:id", UserController.del);

module.exports = router;
