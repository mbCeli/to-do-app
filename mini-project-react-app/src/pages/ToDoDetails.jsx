import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import ToDoTasks from "../assets/to-dos-descrip.json";
import UpdateToDoForm from "../components/UpdateToDoForm";

export default function ToDoDetails() {
  const { taskIndex } = useParams();

  const indexOneTask = Number(taskIndex); //Los parámetros de la URL como {taskIndex} se pasan como strings, así que necesitamos convertirlo a un número antes de hacer comparaciones

  //state de la lista de tasks para poder utilizarla en la función de update
  const [toDos, setToDos] = useState(ToDoTasks);

  useEffect(() => {
    // Guarda los cambios en localStorage:
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const taskDetails = toDos[indexOneTask];

  //Para cambiar entre mostrar/esconder el formulario de update y el botón de update:
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  

  return (
    <div className="to-do-details">
      <h1>Task Details</h1>
      <div>
        {taskDetails && (
          <>
            <p className="task-name"><span>Task: </span>{taskDetails.task}</p>
            <p className="description"><span>Description: </span>{taskDetails.description}</p>
            <p><span>Priority Level: </span>{taskDetails.priority}</p>
            {/* click on update button to show form and hide button when showing the form */}
            <button
              className={showButton ? "show-button" : "hide-button"}
              onClick={() => {
                setShowForm(!showForm);
                setShowButton(!showButton);
              }}>
              Update
            </button>
            <br />
            {showForm && <UpdateToDoForm toDos={toDos} setToDos={setToDos} indexOneTask={indexOneTask} taskDetails={taskDetails} setShowForm={setShowForm} setShowButton={setShowButton} />}
            <Link to="/">
              <button>Back</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
