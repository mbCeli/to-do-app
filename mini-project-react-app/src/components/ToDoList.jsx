import { useState } from "react";
import ToDoTasks from "../assets/to-dos.json";
import ToDoListCard from "./ToDoListCard";
import { Link } from "react-router-dom";

export default function ToDoList() {
  const [toDos, setToDo] = useState(ToDoTasks);

  const deleteTask = (i) => {
    const filteredToDos = toDos.filter((toDo) => {
      return toDos.indexOf(toDo) !== i;
    });
    setToDo(filteredToDos);
  };

  return (
    <div className="to-do-list">
      {toDos.map((toDo) => {
        return (
          <Link to={`/tasks/${toDos.indexOf(toDo)}`} key={toDo.task}>
            <ToDoListCard
              toDo={toDo}
              deleteTask={deleteTask}
              index={toDos.indexOf(toDo)}
            />
          </Link>
        );
      })}
    </div>
  );
}
