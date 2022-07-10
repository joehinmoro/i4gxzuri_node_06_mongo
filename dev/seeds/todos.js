// IMPORTS
const Todo = require("../../models/todos");

// SEEDING
// alpha seed
// const alpha = { title: "Binge The Boys S03", description: "Duh!!!" };
// seed data
const seeds = [
    { title: "Vote Peter Obi", description: "The obvious choice" },
    { title: "Shut down Lagos", description: "paint Lagos red" },
    { title: "Kill time", description: "waste money" },
    { title: "Fire my assistant", description: ":(" },
];

const seedTodos = async () => {
    // clear todos collection
    await Todo.deleteMany({ _id: { $ne: "62cae699eff375a09e083ac8" } });
    // insert seed data into todos collection
    await Todo.insertMany(seeds);
};

// EXPORTS
module.exports = seedTodos;
