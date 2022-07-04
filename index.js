// IMPORTS
const express = require("express");
const { json } = require("express");

// SETTINGS AND MIDDLEWARE
// instantiate express app
const app = express();
// parse json in request body
app.use(json());

// ROUTES
// todo routes
// app.use("/todo", todoRoutes);

// SERVER LISTEN
// define port number
const portNum = process.env.PORT || 3000;
app.listen(portNum, () => {
    console.log(`listening on port: ${portNum}`);
});
