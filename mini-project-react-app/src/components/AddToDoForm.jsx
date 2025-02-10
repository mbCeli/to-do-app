import { useState } from "react";

export default function AddToDoForm(/* { addStudent } */) {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [estimatedDuration, setEstimatedDuration] = useState("");
    const [priority, setPriority] = useState("");
    const [completed, setCompleted] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newTask = { task, description, estimatedDuration, priority, completed };
    
        /* {addStudent((newStudent))} */
    
        setTask("");
        setDescription("");
        setEstimatedDuration("");
        setPriority("");
        setCompleted(false);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <span>Add a New Task</span>
            <div>
                <label>
                    Task
                    <input name="task" type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Task Title" />
                </label>

                <label>
                    Description (optional)
                    <textarea name="description" rows="5" cols="40" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Comment text."></textarea>
                </label>

                <label>
                    Estimated Duration
                    <input name="duration" type="text" value={estimatedDuration} onChange={(e) => setEstimatedDuration(e.target.value)} placeholder="Task Estimated Duration" />
                </label>
            </div>

            <div>
                <label>
                    Priority
                    <select name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="">-- None --</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>

                <label>
                    Completed
                    <input name="completed" type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.value)} />
                </label>

                <button type="submit">Add Task</button>
            </div>

        </form>
    );
}