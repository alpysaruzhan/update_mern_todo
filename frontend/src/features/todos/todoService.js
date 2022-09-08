import axios from 'axios';

const API_URL = '/api/todos';

const createTodo = async (todoData, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.post(API_URL, todoData, config);
  return response.data;
};

const getTodos = async token => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const deleteTodo = async (todoId, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.delete(`${API_URL}/${todoId}`, config);
  return response.data;
};

export default {
  createTodo,
  getTodos,
  deleteTodo,
};
