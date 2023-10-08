const express = require("express");


const routers = express.Router();
routers.get('/', (req, res) => {
    res.render("Shared/BaseLayout")
});

module.exports = routers