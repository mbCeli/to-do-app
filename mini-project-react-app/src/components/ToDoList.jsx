import ToDoListCard from "./ToDoListCard";

export default function ToDoList({ toDos, deleteTask, finishTask }) {
  return (
    <div className="to-do-list">
      {toDos.map((toDo, i) => {
        return (
          <ToDoListCard
            key={toDo.task}
            index={i}
            toDo={toDo}
            deleteTask={deleteTask}
            finishTask={finishTask}
          />
        );
      })}
    </div>
  );
}
