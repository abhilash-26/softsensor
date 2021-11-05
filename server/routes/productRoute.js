const express = require("express");
const router = express.Router();
const { allProducts } = require("../controllers/productController");

router.get("/get-all-product", allProducts);

module.exports = router;
