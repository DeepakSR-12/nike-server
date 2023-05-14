const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://deepak:NJ2ROpsbAXUzhW9J@cluster0.1sg4i7o.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const database = client.db("test");
const products = database.collection("products");

module.exports = { products };
