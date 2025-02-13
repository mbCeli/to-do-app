import { Link } from "react-router-dom";

import { RiDeleteBin6Fill } from "react-icons/ri";

export default function ToDoListCard({ toDo, deleteTask, index, finishTask }) {
  return (
    <div className="to-do-card">
      <p className={toDo.completed ? "task-done" : "task-not-done"}>{toDo.task}</p>  
      <Link to={`/tasks/${index}`} ><span className="see-more">See more</span></Link>
      <div className="to-do-card-buttons">
      <span className="completed-check" onClick={() => finishTask(index)}> <span className="completed-text">Completed</span> {toDo.completed ? "✅" : "⬜️"}</span>
      <button className="delete-btn" onClick={() => deleteTask(index)}><RiDeleteBin6Fill className="delete-bin-icon"/></button>
      </div>
    </div>
  );
}
