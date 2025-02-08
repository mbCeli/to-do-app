import { useState } from "react";
import ToDoTasks from "../assets/to-dos.json";
import ToDoListCard from "./ToDoListCard";

export default function ToDoList() {
  const [toDos, setToDo] = useState(ToDoTasks);

  const deleteTask = () => {
    const filteredToDos = toDos.filter((toDo) => {
      return (
        toDo.completed === false
      ); /* change the condition later in time because any task can be deleted at any time */
    });
    setToDo(filteredToDos);
  };

  return (
    <div>
      {toDos.map((toDo) => {
        return (
          <ToDoListCard 
          key={toDo.task} 
          toDo={toDo} 
          deleteTask={deleteTask} />
        );
      })}
    </div>
  );
}
