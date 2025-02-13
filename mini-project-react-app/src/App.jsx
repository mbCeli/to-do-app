import { Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import ToDoDetails from "./pages/ToDoDetails";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

import ToDoTasks from "./assets/to-dos-descrip.json"
import { useState } from "react";

function App() {
const [toDos, setToDos] = useState(ToDoTasks);

  return (
    <main className="app-container">
      <Navbar />
      <Sidebar />
      <Footer />
      <div className="pages-container">
      <Routes>
        <Route path="/" element={<HomePage toDos={toDos} setToDos={setToDos}/>} />
        <Route path="/tasks/:taskIndex" element={<ToDoDetails toDos={toDos} setToDos={setToDos}/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>
    </main>
  );
}

export default App;
