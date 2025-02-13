import { Link } from "react-router-dom";

export default function ToDoListCard({ toDo, deleteTask, index, finishTask }) {
  return (
    <div className="to-do-card">
      <p className={toDo.completed ? "task-done" : "task-not-done"}>{toDo.task}</p>  
      <Link to={`/tasks/${index}`} ><span className="see-more">See more</span></Link>
      <div className="to-do-card-buttons">
      <span className="completed-check" onClick={() => finishTask(index)}>{toDo.completed ? "✅" : "⬜️"}</span>
      <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
}
