import { Link } from "react-router-dom";

export default function ToDoListCard({ toDo, deleteTask, index }) {
  return (
    <div>
      <div key={toDo.task} className="to-do-card">
        <p className="task-name">{toDo.task}</p>
        <Link to={`/tasks/${index}`} ><span>➕</span></Link>
        <p className="completion">{toDo.completed === true ? "✔" : "❌"}</p>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
}
