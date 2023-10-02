const express = require("express");

const app = express();

app.use(express.json());

const urlsRouter = require("./urls/urls.router");

// TODO: Add code to meet the requirements and make the tests pass.

app.use("/urls", urlsRouter);

module.exports = app;
