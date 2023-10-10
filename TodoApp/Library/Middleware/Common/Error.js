const error = require("http-errors");


//404 not found
function NotFound(req, res, next) {
    res.render("Error/Error", {
        Title: "Error page"
    });
}

//default error 
function DefaultError(err, req, res, next) {
    res.locals.error = process.env.AppEnv === "Development" ? err : { message: err.message }

    res.render("Error/Error", {
        Title: "Error page"
    });
}

module.exports = {
    NotFound,
    DefaultError
};
