// IMPORTS
const express = require("express");
const { json } = require("express");
const todoRoutes = require("./routes/todos");
const todoSeeds = require("./dev/seeds/todos");

// SETTINGS AND MIDDLEWARE
// instantiate express app
const app = express();
// parse json in request body
app.use(json());

// SEEDS
// todo seeds
todoSeeds();

// ROUTES
// todo routes
app.use("/", todoRoutes);

// SERVER LISTEN
// define port number
const portNum = process.env.PORT || 3000;
app.listen(portNum, () => {
    console.log(`listening on port: ${portNum}`);
});
