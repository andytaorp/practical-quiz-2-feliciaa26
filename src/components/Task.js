export default function Task({ task, onDeleteTask, onToggleTask }) {
  const taskStyle = task.completed ? { textDecoration: 'line-through' } : null;

  return (
    <li style={taskStyle}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      {task.description}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

