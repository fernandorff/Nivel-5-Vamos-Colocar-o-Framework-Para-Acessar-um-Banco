const mongoose = require("mongoose");

const dbUrl = "mongodb://127.0.0.1:27017/livraria";

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose
  .connect(dbUrl, options)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = mongoose;
