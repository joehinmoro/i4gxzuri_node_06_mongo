// IMPORTS
const express = require("express");
const router = express.Router();
const { createTodo, updateTodo, deleteTodo, getTodos, getTodo } = require("../controllers/todos");

// ROUTES
// 1. Create Route
router.post("/", createTodo);

// 2. Update Route
router.patch("/:id", updateTodo);

// 3. Delete Route
router.delete("/:id", deleteTodo);

// 4. Retrieve Route (INDEX)
router.get("/", getTodos);

// 5. Retrieve Route (SHOW)
router.get("/:id", getTodo);

// EXPORTS
module.exports = router;
