/* import { useState } from "react";
import ToDoTasks from "../assets/to-dos.json"; */
import ToDoListCard from "./ToDoListCard";

export default function ToDoList({ toDos, deleteTask }) {
  /* const [toDos, setToDo] = useState(ToDoTasks); */ //Me llevo este state a HomaPage para poder usarlo en el addNewTask

  /* const deleteTask = (i) => {                    //También me llevo esta función a HomePage
    const filteredToDos = toDos.filter((toDo) => {
      return toDos.indexOf(toDo) !== i;
    });
    setToDo(filteredToDos);
  }; */

  return (
    <div className="to-do-list">
      {toDos.map((toDo, i) => {
        return (
            <ToDoListCard
              key={toDo.task}
              index={i}
              /* index={toDos.indexOf(toDo)} */ /* Borré el Link porque al darle al botón de borrar llevaba a la página details,
              además cambié este index por el índice que ya tiene en cuenta el map */
              toDo={toDo}
              deleteTask={deleteTask}
            />
        );
      })}
    </div>
  );
}
