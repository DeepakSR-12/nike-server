const express = require("express");
const { getAllProducts, getProductById } = require("../database/products");
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.send({ status: "OK", data: products });
});

router.get("/:productId", async (req, res) => {
  const product = await getProductById(req.params.productId);
  if (!product) {
    res.status(404).send({ status: "Not Found" });
    return;
  }

  res.send({ status: "OK", data: product });
});

module.exports = router;
