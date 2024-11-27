import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!description.trim()) return; 
  
    const newTask = {
      description,
      completed: false,
    };
  
    onAddTask(newTask);
    setDescription("");
  };
  

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What tasks do you want to add?</h3>

      <input
        type="text"
        placeholder="Task..."
        name="description"
        id="description"
        value={description}
        onChange={handleInputChange}
      />

      <button type="submit">Add</button>
    </form>
  );
}

