import { useEffect, useState } from "react";

import AddToDoForm from "../components/AddToDoForm";
import ToDoList from "../components/ToDoList";

import ToDoTasks from "../assets/to-dos-descrip.json"; //he importado el json nuevo aquí por el momento

export default function HomePage() {
  const [toDos, setToDo] = useState([]);

  useEffect(() => {
    const storedToDos = localStorage.getItem("toDos");
    if (storedToDos) {
      setToDo(JSON.parse(storedToDos));
    } else {
      // Si no hay nada en localStorage, cargamos de un archivo JSON u otro lugar.
      // Usa la forma en que estás obteniendo inicialmente las tareas.
      setToDo(ToDoTasks);  // P. ej., datos iniciales del JSON.
    }
  }, []);

  const deleteTask = (i) => {                   
    const filteredToDos = toDos.filter((toDo) => {
      return toDos.indexOf(toDo) !== i;
    });
    setToDo(filteredToDos);
  };

  const finishTask = (indexToFinish) => {
    const finishedList = [...toDos].map((task, index) => {
      if(index === indexToFinish) {
        /* console.log(task.completed); */
        return {...task, completed: !task.completed};
      } else {
        return task;
      }
    })
    setToDo(finishedList)
  }

  const addNewTask = (newTask) => {
    setToDo([...toDos, newTask]);
  };

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <AddToDoForm addTask={addNewTask}/>
      <br />

      <ToDoList toDos={toDos} deleteTask={deleteTask} finishTask={finishTask}/>

    </div>
  );
}
