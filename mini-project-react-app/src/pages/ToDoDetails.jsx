import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import UpdateToDoForm from "../components/UpdateToDoForm";

import { FaEdit } from "react-icons/fa";

export default function ToDoDetails({toDos, setToDos}) {
  const { taskIndex } = useParams();

  const indexOneTask = Number(taskIndex); //Los parámetros de la URL como {taskIndex} se pasan como strings, así que necesitamos convertirlo a un número antes de hacer comparaciones
 
  const taskDetails = toDos[indexOneTask];

  //Para cambiar entre mostrar/esconder el formulario de update y el botón de update:
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  

  return (
    <div className="to-do-details">
      <h1>Task Details</h1>
      <div className="task-details">
        {taskDetails && (
          <>
            <p><span className="task-details-info">Task: </span>{taskDetails.task}</p>
            <p><span className="task-details-info">Description: </span>{taskDetails.description}</p>
            <p><span className="task-details-info">Priority Level: </span>{taskDetails.priority}</p>
            {/* click on update button to show form and hide button when showing the form */}
            
            <button
              className={showButton ? "btn show-button" : "btn hide-button"}
              onClick={() => {
                setShowForm(!showForm);
                setShowButton(!showButton);
              }}>
              Edit <FaEdit className="edit-icon"/>
            </button>
            <br />
            {showForm && <UpdateToDoForm toDos={toDos} setToDos={setToDos} indexOneTask={indexOneTask} taskDetails={taskDetails} setShowForm={setShowForm} setShowButton={setShowButton} />}
            <Link to="/">
              <button className="btn back">Back</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
