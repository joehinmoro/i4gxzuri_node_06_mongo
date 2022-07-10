// IMPORTS
const Todo = require("../models/todos");
const valId = require("mongoose").Types.ObjectId.isValid;
console.log(valId);

// CONTROL FUNCTIONS
// 1. create todo
const createTodo = async (req, res) => {
    try {
        // destructure the required fields from req.body
        const { title, description } = req.body;
        // ensure title property is part of req body
        if (!title)
            return res
                .status(400)
                .json({ error: { message: "todo must have a title", code: 400 } });
        // create a new todo model instance
        const newTodo = new Todo({ title, description });
        // save new todo document to db
        await newTodo.save();
        console.log(newTodo);
        // redirect to show route of newly added todo
        res.redirect(`/todos/${newTodo._id}`);
    } catch (error) {
        // if error, send error message and status code
        res.status(500).json({ error: { message: "something went wrong", code: 500 } });
        console.log(error);
    }
};

// 2. update todo
const updateTodo = async (req, res) => {
    try {
        //  destructure update values from req body
        const { title, description } = req.body;
        // ensure title is not empty
        if (!title) {
            return res
                .status(400)
                .json({ error: { message: "todo must have a title", code: 400 } });
        }
        // destructure todo id from req params
        const { id } = req.params;
        // verify id is a valid object id
        if (!valId(id)) {
            return res
                .status(400)
                .json({ error: { message: "id must be valid: 12 bytes", code: 400 } });
        }
        // query for todo document using params id
        const singleTodo = await Todo.findById(id);
        // verify todo document exist
        if (!singleTodo) {
            return res.status(404).json({ error: { message: "todo record not found", code: 404 } });
        }
        // update single todo record with update data
        await Todo.findByIdAndUpdate(
            id,
            { title, description },
            { runValidators: true, new: true }
        );
        // redirect to show route of updated record
        res.redirect(`/todos/${id}`);
    } catch (error) {
        // if error, send error message and status code
        res.status(500).json({ error: { message: "something went wrong", code: 500 } });
        console.log(error);
    }
};

// 3. delete todo
const deleteTodo = async (req, res) => {
    try {
        // destructure todo id from req params
        const { id } = req.params;
        // verify id is a valid object id
        if (!valId(id)) {
            return res
                .status(400)
                .json({ error: { message: "id must be valid: 12 bytes", code: 400 } });
        }
        // query for todo document using params id
        const singleTodo = await Todo.findById(id);
        // verify todo document exist
        if (!singleTodo) {
            return res.status(404).json({ error: { message: "todo record not found", code: 404 } });
        }
        // delete todo document
        await Todo.findByIdAndDelete(id);
        // redirect to index route
        res.redirect("/todos");
    } catch (error) {
        // if error, send error message and status code
        res.status(500).json({ error: { message: "something went wrong", code: 500 } });
        console.log(error);
    }
};

// 4. get single todo
const getTodo = async (req, res) => {
    try {
        // destructure todo id from req params
        const { id } = req.params;
        // verify id is a valid object id
        if (!valId(id)) {
            return res
                .status(400)
                .json({ error: { message: "id must be valid: 12 bytes", code: 400 } });
        }
        // query for todo document using params id
        const singleTodo = await Todo.findById(id);
        // verify todo document exist
        if (!singleTodo) {
            return res.status(404).json({ error: { message: "todo record not found", code: 404 } });
        }
        // respond with single todo
        res.status(200).json(singleTodo);
    } catch (error) {
        // if error, send error message and status code
        res.status(500).json({ error: { message: "something went wrong", code: 500 } });
        console.log(error);
    }
};

// 5. get all todos
const getTodos = async (req, res) => {
    try {
        // query for all todo documents
        // const allTodos = await Todo.find({}, {})
        // const allTodos = await Todo.find({}).select()
        const allTodos = await Todo.find({});
        // respond with retreived data
        res.status(200).json(allTodos);
    } catch (error) {
        // if error, send error message and status code
        res.status(500).json({ error: { message: "something went wrong", code: 500 } });
    }
};

// EXPORTS
module.exports = { createTodo, updateTodo, deleteTodo, getTodos, getTodo };
