import { Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import ToDoDetails from "./pages/ToDoDetails";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {

  return (
    <main className="app-container">
      <Navbar />
      <Sidebar />
      <Footer />
      <div className="pages-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/:taskIndex" element={<ToDoDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>
    </main>
  );
}

export default App;
