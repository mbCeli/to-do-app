import AddToDoForm from "../components/AddToDoForm";
import ToDoList from "../components/ToDoList";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <AddToDoForm />
      <br />

      <ToDoList />

    </div>
  );
}
