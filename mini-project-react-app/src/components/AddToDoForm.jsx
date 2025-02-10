import { useState } from "react";

export default function AddToDoForm(/* { addStudent } */) {
    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("");
    const [graduationYear, setGraduationYear] = useState(2023);
    const [graduated, setGraduated] = useState(false);

    const handleNameInput = e => setFullName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handlePhoneInput = e => setPhone(e.target.value);
    const handleProgramSelect = e => setProgram(e.target.value);

    const handleGraduatedInput = e => setGraduated(e.target.checked);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newStudent = { fullName, email, phone, program, image, graduationYear, graduated };
    
        /* {addStudent((newStudent))} */
    
        setFullName("");
        setImage("");
        setPhone("");
        setEmail("");
        setProgram("");
        setGraduationYear(2023);
        setGraduated(false);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <span>Add a New Task</span>
            <div>
                <label>
                    Task
                    <input name="task" type="text" value={fullName} onChange={handleNameInput} placeholder="Task Title" />
                </label>

                <label>
                    Description (optional)
                    <textarea name="description" rows="5" cols="40" value={image} onChange={handleImageInput} placeholder="Comment text."></textarea>
                </label>

                <label>
                    Estimated Duration
                    <input name="duration" type="text" value={phone} onChange={handlePhoneInput} placeholder="Task Estimated Duration" />
                </label>
            </div>

            <div>
                <label>
                    Priority
                    <select name="priority" value={program} onChange={handleProgramSelect}>
                        <option value="">-- None --</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>

                <label>
                    Completed
                    <input name="completed" type="checkbox" checked={graduated} onChange={handleGraduatedInput} />
                </label>

                <button type="submit">Add Task</button>
            </div>

        </form>
    );
}