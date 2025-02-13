import { Link } from "react-router-dom";

export default function ToDoListCard({ toDo, deleteTask, index, finishTask }) {
  return (
    <div className="to-do-card">
      <p className="task-name">{toDo.task}</p>
      <Link to={`/tasks/${index}`} ><span>➕</span></Link>
      <span className="completed-check" onClick={() => finishTask(index)}>{toDo.completed ? "✅" : "⬜️"}</span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}
