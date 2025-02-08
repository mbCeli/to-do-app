import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ToDoList from "./components/ToDoList";

function App() {

  return (
    <main className="home-page">
      <Navbar />
      <Footer />
      <Sidebar /> {/* ✔ ❌ */}
      <ToDoList />
    </main>
  );
}

export default App;
