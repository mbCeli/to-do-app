import { useState } from "react";

import AddToDoForm from "../components/AddToDoForm";
import ToDoList from "../components/ToDoList";

import ToDoTasks from "../assets/to-dos-descrip.json"; //he importado el json nuevo aquí por el momento

export default function HomePage() {
  const [toDos, setToDo] = useState(ToDoTasks);

  const deleteTask = (i) => {                   
    const filteredToDos = toDos.filter((toDo) => {
      return toDos.indexOf(toDo) !== i;
    });
    setToDo(filteredToDos);
  };

  const addNewTask = (newTask) => {
    setToDo([...toDos, newTask]);
  };

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <AddToDoForm addTask={addNewTask}/>
      <br />

      <ToDoList toDos={toDos} deleteTask={deleteTask}/>

    </div>
  );
}
