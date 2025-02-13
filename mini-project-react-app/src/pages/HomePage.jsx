import AddToDoForm from "../components/AddToDoForm";
import ToDoList from "../components/ToDoList";


export default function HomePage({toDos, setToDos}) {
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
