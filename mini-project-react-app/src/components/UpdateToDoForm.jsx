import { useState } from "react";

export default function UpdateToDoForm({ toDos, setToDos, indexOneTask, taskDetails, setShowForm, setShowButton }) {
//States para el formulario de update:
  const [task, setTask] = useState(taskDetails.task);
  const [description, setDescription] = useState(taskDetails.description);
  const [priority, setPriority] = useState(taskDetails.priority);

  //función para manejar el submit del update form:
  const handleUpdateForm = (e) => {
    e.preventDefault();

    const updatedTask = {
      task,
      description,
      priority
    };

    const updatedList = [...toDos].map((task, index) => index === indexOneTask ? updatedTask : task);
    /* console.log(updatedTask); */

    setToDos(updatedList);
    setShowForm(false); // Hide the form after saving changes
    setShowButton(true);
  }
    

    return (
        <div>
            <form onSubmit={handleUpdateForm}>
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
                            <option disabled value="">-- None --</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </label>

                    <button type="submit" className="btn save">Save</button>
                </div>
            </form>
        </div>
    )
}
