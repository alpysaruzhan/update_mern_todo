import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todos/todoSlice';


function formatDate(dateString) {

  let data = new Date(dateString);

  let formatter = new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  return formatter.format(data);
}

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (

    <div className="list-group-item-action list-group-item">
      <div className="w-100 d-flex">
        <h5 className="mb-8">{todo.text}</h5>
        <button className="btn" onClick={() => dispatch(deleteTodo(todo._id))}>
        &#9746;
        </button>
      </div>
      <small>{formatDate(new Date(todo.createdAt))}</small>
    </div>
    
  );
}
