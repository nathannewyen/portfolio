var path = require("path");

const user = require('../controllers/users.js')

module.exports = (app) => {
    app.get("/show", user.showUsers)

    app.get("/show/:id", user.oneUser)

    app.post("/add", user.createUser)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./project/dist/project/index.html"))
    });
}