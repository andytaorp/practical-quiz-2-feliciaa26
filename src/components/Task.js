import React from "react";

export default function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        {task.description} 
      </label>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}


