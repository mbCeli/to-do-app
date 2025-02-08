
export default function ToDoListCard({ toDo, deleteTask }) {
  return (
    <div>
      <div key={toDo.task} className="to-do-card">
        <p className="task-name">{toDo.task}</p>
        <p className="completion">{toDo.completed === true ? "✔" : "❌"}</p>
        <button onClick={() => deleteTask()}>Delete</button>
      </div>
    </div>
  );
}
