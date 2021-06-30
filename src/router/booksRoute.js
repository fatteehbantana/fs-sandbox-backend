const express = require("express");
const router = express.Router();
const booksController = require("../controller/booksController");

router.get("/", booksController.getData);
router.post("/", booksController.createData);

module.exports = router;
