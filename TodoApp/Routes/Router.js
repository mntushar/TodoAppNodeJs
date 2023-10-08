const express = require("express");
const baseRouter = express.Router();

const homeRouter = require("./Home");


//home router
baseRouter.use("/", homeRouter);

module.exports = baseRouter;