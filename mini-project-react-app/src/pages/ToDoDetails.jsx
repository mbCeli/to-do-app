import { useParams, Link } from "react-router-dom";

import ToDoTasks from "../assets/to-dos-descrip.json";

export default function ToDoDetails() {
  const { taskIndex } = useParams();

  const index = Number(taskIndex); //Los parámetros de la URL como {taskIndex} se pasan como strings, así que necesitamos convertirlo a un número antes de hacer comparaciones
  const taskDetails = ToDoTasks.find((task, i) => i === index);

  return (
    <div className="to-do-details">
      <h1>Task Details</h1>
      <div>
        {taskDetails && (
          <>
            <p className="task-name">{taskDetails.task}</p>
            <p className="description">{taskDetails.description}</p>
            <p>{taskDetails.priority}</p>
            {/* Poner un input para que se pueda escribir mas detalles sobre el task */}

            <Link to="/">
              <button>Back</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
