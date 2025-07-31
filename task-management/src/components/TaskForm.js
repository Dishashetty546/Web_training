import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext.js";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && desc) {
      addTask(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Task Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
