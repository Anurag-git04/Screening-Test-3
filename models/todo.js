const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todos = mongoose.model("Todos", TodoSchema);

module.exports = { Todos };
