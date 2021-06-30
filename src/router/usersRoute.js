const express = require("express");
const router = express.Router();
const usersController = require("../controller/usersController");

router.get("/", usersController.getData);
router.post("/", usersController.createData);

module.exports = router;
