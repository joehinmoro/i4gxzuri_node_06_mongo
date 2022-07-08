// IMPORTS
const mongoose = require("mongoose");
const { Schema: schema } = mongoose;
// const schema = mongoose.Schema

// mongoDB connection
mongoose
    .connect("mongodb://localhost:27017/i4gxzTodosDB")
    .then(() => {
        console.log("DB connection success");
    })
    .catch((err) => {
        console.log("DB connection error:", err);
    });

// Todo schema
const todoSchema = new schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// Todo Model
const Todo = mongoose.Model("Todo", todoSchema);

// EXPORTS
module.exports = Todo;
