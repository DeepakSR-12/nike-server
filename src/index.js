const express = require("express");
const productRoutes = require("./router/productRouter");
const orderRoutes = require("./router/orderRouter");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

app.listen(PORT, () => {
  console.log("API is listening on port ", PORT);
});
