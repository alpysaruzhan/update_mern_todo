const express = require('express');
const router = express.Router();
const {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').post(createTodo).get(protect, readTodos);
router.route('/:id').post(updateTodo).get(protect, deleteTodo);

module.exports = router;
