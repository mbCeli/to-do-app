import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import ToDoTasks from "../assets/to-dos-descrip.json";

export default function ToDoDetails() {
  const { taskIndex } = useParams();

  const index = Number(taskIndex); //Los parámetros de la URL como {taskIndex} se pasan como strings, así que necesitamos convertirlo a un número antes de hacer comparaciones
  const taskDetails = ToDoTasks.find((task, i) => i === index);

  //Para cambiar entre mostrar/esconder el formulario de update

  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  //States para el formulario de actualizar:
  const [task, setTask] = useState(taskDetails.task);
  const [description, setDescription] = useState(taskDetails.description);
  const [priority, setPriority] = useState(taskDetails.priority);

  const handleUpdateForm = (e) => {
    e.preventDefault();

    const updatedTask = { 
      task,  
      description, 
      priority };
}

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
            {/* click on update button to show form and hide button when showing the form */}
            <button
              className={showButton ? "show-button" : "hide-button"}
              onClick={() => {
                setShowForm(!showForm);
                setShowButton(!showButton);
              }}
            >
              Update
            </button>
            <br />
            {/* aquí empezaría el elemento de formulario de update, que tendrá una variable state que hace que se muestre o no cuando hacemos click en el botón update */}
            {showForm && (
              <div>
                <form /* onSubmit={handleUpdateForm} */>
                  <span>Update this Task</span>
                  <div>
                    <label>
                      Task
                      <input
                        name="task"
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Task Title"
                      />
                    </label>

                    <label>
                      Description (optional)
                      <textarea
                        name="description"
                        rows="5"
                        cols="40"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Comment text."
                      ></textarea>
                    </label>
                  </div>

                  <div>
                    <label>
                      Priority
                      <select
                        name="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                      >
                        <option value="">-- None --</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </label>

                    <button type="submit">Save</button>
                  </div>
                </form>
              </div>
            )}
            <Link to="/">
              <button>Back</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
