const express = require("express");
const app = express();
const port = 3000;

const { sequelize } = require("./src/models");
sequelize.sync({ force: true });

const usersRoute = require ("./src/router/usersRoute");
app.use("/users", usersRoute);

const booksRoute = require ("./src/router/booksRoute");
app.use("/books", booksRoute);

app.get("/", (req, res) => {
    return res.json("Hello world");
});

app.listen(port, () => {
    console.log("http://localhost:" + port);
});