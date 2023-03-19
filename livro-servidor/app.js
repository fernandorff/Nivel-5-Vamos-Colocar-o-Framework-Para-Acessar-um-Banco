const express = require("express");
const cors = require("cors");
const path = require("path");

const livroRouter = require("./routes/livros");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/livros", livroRouter);

module.exports = app;
