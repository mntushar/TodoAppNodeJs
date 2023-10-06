const express = require("express");
const dotenv = require("dotenv");
const mongoes = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");


//create app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//config app
dotenv.config();

//static folder
app.use(express.static(path.join(__dirname, "Public")));

//app cookie
app.use(cookieParser(process.env.CookieSecret));

//db connection
mongoes.connect(process.env.DataBaseConnetionString)
    .then(() => console.log("Success connection..."))
    .catch((err) => console.log(err));

//setup view engine
app.set("view engine", "ejs");

//app route
app.get('/', (req, res) => {
    res.render("Shared/BaseLayout")
})

//start app
app.listen(process.env.AppPort, () => {
    console.log("Listing...");
});
