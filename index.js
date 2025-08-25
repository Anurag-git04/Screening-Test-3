const express = require("express");
const { Todos } = require("./models/todo");
const dbconnect = require("./db/db.connect");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
dbconnect();
app.use(express.json());

// POST TODO LIST
app.post("/todos", async (req, res) => {
  try {
    const { task, completed } = req.body;
    if (!task) {
      return res.status(500).json({ message: "Task is required" });
    }
    const newTask = await Todos.create({ task, completed });
    await newTask.save();
    return res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "failed", error: error });
  }
});

// GET ALL TASK
app.get("/todos", async (req, res) => {
  try {
    const todoList = await Todos.find();
    return res.status(200).json(todoList);
  } catch (error) {
    return res.status(500).json({ message: "failed", error: error });
  }
});

// Delete Todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todos.findByIdAndDelete(id);
    console.log(todo);
    if (todo) {
      return res.status(200).json({ message: "Todo Deleted Successfully" });
    } else {
      return res.status(404).json({ message: " No Todo Found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "failed", error: error });
  }
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
