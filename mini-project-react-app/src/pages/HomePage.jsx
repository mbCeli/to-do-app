import { useEffect, useState } from "react";

import AddToDoForm from "../components/AddToDoForm";
import ToDoList from "../components/ToDoList";

import ToDoTasks from "../assets/to-dos-descrip.json"; //he importado el json nuevo con las descripciones

export default function HomePage() {
  const [toDos, setToDos] = useState([]);

  //uso de localStorage para conseguir que cuando volvemos al home page, se muestren los cambios que hemos hecho en el update form
  useEffect(() => {
    const storedToDos = localStorage.getItem("toDos");
    if (storedToDos) {
      setToDos(JSON.parse(storedToDos));
    } else {
      // Si no hay nada en localStorage, cargamos de un archivo JSON u otro lugar.
      // Usamos los datos iniciales del JSON
      setToDos(ToDoTasks);  
    }
  }, []);

  const deleteTask = (i) => {                   
    const filteredToDos = toDos.filter((toDo) => {
      return toDos.indexOf(toDo) !== i;
    });
    setToDos(filteredToDos);
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
    setToDos(finishedList)
  }

  const addNewTask = (newTask) => {
    setToDos([...toDos, newTask]);
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
