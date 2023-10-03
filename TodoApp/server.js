const express = require("express");
const dotenv = require("dotenv");


//create app
const app = express();

//config app
dotenv.config();

//app route
app.get('/', (req, res) => {
    res.send('hello world')
})

//start app
app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
});
