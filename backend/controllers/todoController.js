const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoModel');
const user = require('../models/userModel');

const createTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const todo = await Todo.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).send(todo);
});

const readTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: readTodos.user.id });
  res.status(200).send(todos);
});

const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }

  if (!req.user) {
    res.status(401);
    throw new Error('Пользователь не найден');
  }
  if (todo.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Пользователь не авторизован');
  }
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { ...req.body, user: req.user.id },
    {
      new: true,
    }
  );

  res.send(updatedTodo);
});

const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }
  await todo.remove();

  res.status(200).send({ id: req.params.id });
});

module.exports = {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo,
};
