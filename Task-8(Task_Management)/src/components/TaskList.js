import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext.js";

function TaskList() {
  const { tasks, deleteTask, updateTask } = useContext(TaskContext);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
    setEditDesc(task.desc);
  };

  const handleUpdate = () => {
    updateTask(editId, editTitle, editDesc);
    setEditId(null);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          {editId === task.id ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
              />
              <button onClick={handleUpdate}>Save</button>
            </>
          ) : (
            <>
              <h3>{task.title}</h3>
              <p>{task.desc}</p>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
